/**
 * n8n Custom Code Node - KineticZoneYard Asset Matching Engine
 * Input: Expects a single webhook payload object under $input.item.json
 */

// Capture the incoming item data array safely from n8n context
const inputData = $input.item ? $input.item.json : {};

// Extract our primary validation streams
const userProfile = inputData.user || {};
const environment = inputData.environment || {};
const rawEquipment = inputData.equipment_inventory || [];
const milestones = inputData.milestone_targets || [];
const constraints = inputData.constraints || {};

// Initialize our filtered output structures
let executableEquipment = [];
let structuralWarnings = [];

// Enforce hard infrastructure threshold boundaries
const MIN_CLEARANCE_FEET = 8.5;
const rafterAnchorAvailable = environment.has_overhead_rafters === true;
const clearanceHeight = parseFloat(environment.clearance_height_feet) || 0;

// Loop through each piece of equipment to run spatial validation guards
for (const item of rawEquipment) {
    if (item.name === "Gymnastic Rings") {
        // Enforce environmental check: Must have rafters AND sufficient headroom
        if (!rafterAnchorAvailable || clearanceHeight < MIN_CLEARANCE_FEET) {
            structuralWarnings.push(
                `Stripped "Gymnastic Rings": Environment lacks overhead rafters or falls below minimum ${MIN_CLEARANCE_FEET}ft clearance.`
            );
            continue; // Skip appending to active inventory array
        }
    }
    // If it passes structural safety guards, it is cleared for active use
    executableEquipment.push(item);
}

// Map output to n8n standard execution schema
return {
    json: {
        meta: {
            processing_timestamp: new Date().toISOString(),
            spatial_safety_passed: structuralWarnings.length === 0,
            structural_warnings: structuralWarnings
        },
        payload: {
            user_id: userProfile.id,
            email: userProfile.email,
            fitness_goal: userProfile.fitness_goal,
            experience_level: userProfile.experience_level,
            milestone_targets: milestones,
            optimal_uvb_window_intent: constraints.optimal_uvb_window_intent || false,
            available_training_hours: constraints.available_training_hours || "10:00-14:00",
            validated_environment: {
                type: environment.environment_type,
                clearance_height_feet: clearanceHeight,
                has_concrete_slab: environment.has_concrete_slab || false
            },
            executable_equipment_inventory: executableEquipment
        }
    }
};
