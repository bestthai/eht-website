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

export const goldenGearValues = {}
    gearLines.slice(0, 4).forEach(line => {
        goldenGearValues[line] = [3, 10];
    });

    gearLines.slice(4, 12).forEach(line => {
        goldenGearValues[line] = [5, 15];
    });

    gearLines.slice(12, 15).forEach(line => {
        goldenGearValues[line] = [8, 20];
    });

    gearLines.slice(15, 21).forEach(line => {
        goldenGearValues[line] = [15, 30];
    });   

export const ancientGearValues = {}
    gearLines.slice(0, 4).forEach(line => {
        ancientGearValues[line] = [3, 10];
    });

    gearLines.slice(4, 12).forEach(line => {
        ancientGearValues[line] = [5, 15];
    });

    gearLines.slice(12, 15).forEach(line => {
        ancientGearValues[line] = [8, 20];
    });

    gearLines.slice(15, 21).forEach(line => {
        ancientGearValues[line] = [15, 30];
    });    


export const primalGearValues = {};
    gearLines.slice(0, 4).forEach(line => {
        primalGearValues[line] = [5, 12];
    });

    gearLines.slice(4, 12).forEach(line => {
        primalGearValues[line] = [7, 17];
    });

    gearLines.slice(12, 15).forEach(line => {
        primalGearValues[line] = [11, 23];
    });

    gearLines.slice(15, 21).forEach(line => {
        primalGearValues[line] = [20, 35];
    });

export const hellGearValues = {};
    gearLines.slice(0, 4).forEach(line => {
        hellGearValues[line] = [5, 12];
    });

    gearLines.slice(4, 12).forEach(line => {
        hellGearValues[line] = [7, 17];
    });

    gearLines.slice(12, 15).forEach(line => {
        hellGearValues[line] = [11, 23];
    });

    gearLines.slice(15, 21).forEach(line => {
        hellGearValues[line] = [20, 35];
    });


export const originalGearValues = {};
    gearLines.slice(0, 4).forEach(line => {
        originalGearValues[line] = [5, 12];
    });

    gearLines.slice(4, 12).forEach(line => {
        originalGearValues[line] = [7, 17];
    });

    gearLines.slice(12, 15).forEach(line => {
        originalGearValues[line] = [11, 23];
    });

    gearLines.slice(15, 21).forEach(line => {
        originalGearValues[line] = [20, 35];
    });


export const chaosGearValues = {};
    gearLines.slice(0, 4).forEach(line => {
        chaosGearValues[line] = [7, 14];
    });

    gearLines.slice(4, 12).forEach(line => {
        chaosGearValues[line] = [9, 19];
    });

    gearLines.slice(12, 15).forEach(line => {
        chaosGearValues[line] = [14, 26];
    });

    gearLines.slice(15, 21).forEach(line => {
        chaosGearValues[line] = [25, 40];
    });


export const abyssGearValues = {};
    gearLines.slice(0, 4).forEach(line => {
        abyssGearValues[line] = [9, 16];
    });

    gearLines.slice(4, 12).forEach(line => {
        abyssGearValues[line] = [11, 21];
    });

    gearLines.slice(12, 15).forEach(line => {
        abyssGearValues[line] = [17, 29];
    });

    gearLines.slice(15, 21).forEach(line => {
        abyssGearValues[line] = [30, 45];
    });

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


