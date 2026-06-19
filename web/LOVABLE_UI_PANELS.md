# Lovable UI Component Specifications: KZY Onboarding
- **Aesthetic:** Minimalist Premium, Light-Mode Dominant, `#FFFFFF` canvas backgrounds, charcoal (`#111111`) text, sharp structural borders (`1px solid #E5E7EB`).
- **Layout:** Centered single-column container (`max-w-xl`), massive whitespace padding, smooth progress bar tracking step increments of 20%.

---

## 📱 Screen 1: Core Biometrics & Goals (`step_biometrics_goals`)
- **Headline Text:** "Select your primary trajectory."
- **Subtext:** "Align the body to a singular physical focus."
- **UI Component:** `Grid (3 columns x 1 row)` of interactive selection cards.
- **Card States & Data Tags:**
  * **Card A:** Label: `Muscle Growth` | Value tag: `muscle_growth`
  * **Card B:** Label: `Fat Loss` | Value tag: `fat_loss`
  * **Card C:** Label: `Strength Priority` | Value tag: `strength_priority`
- **Interaction Logic:** Single-select. Clicking a card applies a dark border overlay and instantly activates the "Continue" text link below.

---

## 📱 Screen 2: Spatial Assets (`step_spatial_assets`)
- **Headline Text:** "Declare your training theater."
- **Subtext:** "We calibrate the matrix to your immediate physical reality."
- **UI Component:** `Stacked List (Vertical)` of large, flat rows with conditional field reveal.
- **Primary Row Tags:**
  * Option 1: `Pure Indoor` | Option 2: `Pure Outdoor` | Option 3: `Hybrid Split`
- **Conditional Form Panel (Revealed dynamically via Slide-Down transition):**
  * *If Indoor or Hybrid selected:* Expose an input field for `Clearance Height (Feet)` [Type: Number, step: 0.1] and a binary toggle switch for `Overhead Rafters Present`.
  * *If Outdoor selected:* Expose a binary toggle switch for `Concrete Slab Foundation Present`.

---

## 📱 Screen 3: Hardware Stack (`step_hardware_stack`)
- **Headline Text:** "Inventory your available assets."
- **Subtext:** "True physical sovereignty requires zero proprietary machinery."
- **UI Component:** `Multi-Select Pill Cloud`. High-contrast interactive badges wrapping an icon + text layout.
- **Pill Inventory Items:**
  * Badge 1: `Pure Bodyweight` | Value: `bodyweight`
  * Badge 2: `Gymnastic Rings / Pull-Up Bars` | Value: `calisthenics_anchors`
  * Badge 3: `Variable Resistance Bands` | Value: `variable_resistance`
  * Badge 4: `Selective Heavy Loads` | Value: `heavy_load`
- **Interaction Logic:** Multi-select enabled. Selected badges fill completely to charcoal background with crisp white text.

---

## 📱 Screen 4: Milestone Targets (`step_milestone_targets`)
- **Headline Text:** "Choose your sovereign milestones."
- **Subtext:** "Select the master bodyweight maneuvers you intend to command."
- **UI Component:** `2x2 Dense Square Grid Checkbox Matrix`.
- **Grid Options:**
  * Block 1: `The Pull-Up` | Key: `pull_up`
  * Block 2: `Deep Push-Up Depth` | Key: `push_up_depth`
  * Block 3: `The Handstand` | Key: `handstand`
  * Block 4: `The Pistol Squat` | Key: `pistol_squat`
- **Interaction Logic:** Multi-select checklist. Clicking a block triggers a structural checkmark state.

---

## 📱 Screen 5: Time Window Optimization (`step_time_window`)
- **Headline Text:** "Optimize your exposure."
- **Subtext:** "Intentionally structure your daily physical output around vital solar rhythms."
- **UI Component:** `Inline Dual Time Slider` paired with a premium status informational callout block.
- **Interactive Component:** Range picker preset default to `10:00` and `14:00`.
- **Informational Banner Text:** "Recommended: Mid-day training between 10 AM and 2 PM unlocks optimal UVB exposure for natural Vitamin D synthesis."
- **Action Button CTA:** "Synthesize My Routine" -> Triggers the POST payload directly to the live n8n orchestration loop.
