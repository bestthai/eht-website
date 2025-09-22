export const gearLines = [
    "Attack",
    "Attack Speed",
    "Critical Hit Chance",
    "Critical Hit Damage",
    "Increase Damage Against Boss",
    "Increase Damage Against Undead",
    "Increase Damage Against Primate",
    "Increase Damage Against Demon",
    "Increase Damage Against Animal",

    "Defense",
    "Decrease Damage Taken",
    "Evasion",
    "HP",

    "Lifesteal",
    "EXP Gain",
    "Decrease Mood Consumption",
    "Decrease Satiety Consumption",
    "Decrease Stamina Consumption",
    "Increase Movement Speed",
    "Chance to gain 2x Gold",
    "Chance to gain extra Material",
];

export const gearLineGroups = {
    offense: [
        "Attack",
        "Attack Speed",
        "Critical Hit Chance",
        "Critical Hit Damage",
        "Increase Damage Against Boss",
        "Increase Damage Against Undead",
        "Increase Damage Against Primate",
        "Increase Damage Against Demon",
        "Increase Damage Against Animal",
    ],

    defense: [
        "Defense",
        "Decrease Damage Taken",
        "Evasion",
        "HP",
        "Lifesteal"
    ],

    utility: [
        "EXP Gain",
        "Decrease Mood Consumption",
        "Decrease Satiety Consumption",
        "Decrease Stamina Consumption",
        "Increase Movement Speed",
        "Chance to gain 2x Gold",
        "Chance to gain extra Material"
    ],
};

// ---------------- VALUE GROUPS ----------------
// Same grouping logic from old file, reassigned to new order
const group1 = ["Evasion", "Critical Hit Chance", "Attack Speed", "EXP Gain"];
const group2 = [
    "Decrease Damage Taken",
    "Decrease Mood Consumption",
    "Decrease Satiety Consumption",
    "Decrease Stamina Consumption",
    "Lifesteal",
    "Increase Movement Speed",
    "Chance to gain 2x Gold",
    "Chance to gain extra Material",
];
const group3 = ["Attack", "Defense", "HP"];
const group4 = [
    "Critical Hit Damage",
    "Increase Damage Against Boss",
    "Increase Damage Against Primate",
    "Increase Damage Against Undead",
    "Increase Damage Against Demon",
    "Increase Damage Against Animal",
];

// ---------------- ASSIGN HELPERS ----------------
function assignValues(target, values) {
    group1.forEach(line => (target[line] = values[0]));
    group2.forEach(line => (target[line] = values[1]));
    group3.forEach(line => (target[line] = values[2]));
    group4.forEach(line => (target[line] = values[3]));
}

// ---------------- GEAR VALUES ----------------
export const goldenGearValues = {};
assignValues(goldenGearValues, [[3, 10], [5, 15], [8, 20], [15, 30]]);

export const ancientGearValues = {};
assignValues(ancientGearValues, [[3, 10], [5, 15], [8, 20], [15, 30]]);

export const primalGearValues = {};
assignValues(primalGearValues, [[5, 12], [7, 17], [11, 23], [20, 35]]);

export const hellGearValues = {};
assignValues(hellGearValues, [[5, 12], [7, 17], [11, 23], [20, 35]]);

export const originalGearValues = {};
assignValues(originalGearValues, [[5, 12], [7, 17], [11, 23], [20, 35]]);

export const chaosGearValues = {};
assignValues(chaosGearValues, [[7, 14], [9, 19], [14, 26], [25, 40]]);

export const abyssGearValues = {};
assignValues(abyssGearValues, [[9, 16], [11, 21], [17, 29], [30, 45]]);

export const gearValuesByType = {
    golden: goldenGearValues,
    ancient: ancientGearValues,
    hell: hellGearValues,
    primal: primalGearValues,
    original: originalGearValues,
    chaos: chaosGearValues,
    abyss: abyssGearValues,
};

// =================================================


