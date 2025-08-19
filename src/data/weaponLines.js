export const weaponLines = [
    "Attack Speed",
    "Critical Hit Chance",
    "Evasion",
    "EXP Gain",
    "Chance to transform into Archangel",
    "Chance to transform into Demon Lord",

    "Decrease Damage Taken",
    "Decrease Mood Consumption",
    "Decrease Satiety Consumption",
    "Decrease Stamina Consumption",
    "Lifesteal",
    "Increase Movement Speed",
    "Chance to gain 2x Gold",
    "Chance to gain extra Material",
    "Chance to cast level 1 Evasion",
    "Chance to cast level 1 Barrier",
    "Chance to cast level 1 Curse",
    "Chance to recover 1% Stamina",
    "Chance to recover 3% Satiety",
    "Chance to recover 3% Mood",
    "Chance to stun enemy for 2 sec",
    
    "Attack",
    "Defense",
    "HP",
    "Additional Damage",

    "Critical Hit Damage",
    "Increase Damage Against Boss",
    "Increase Damage Against Primate",
    "Increase Damage Against Demon",
    "Increase Damage Against Animal",
    "Increase Damage Against Undead",

]; 

export const weaponLineGroups = {
    Maxable: [
        "Attack Speed",
        "Critical Hit Chance",
        "Evasion",
    ],

    Offense: [
        "Attack",
        "Critical Hit Damage",
        "Increase Damage Against Boss",
        "Increase Damage Against Primate",
        "Increase Damage Against Demon",
        "Increase Damage Against Animal",
        "Increase Damage Against Undead",
        "Additional Damage",
    ],

    Defense: [
        "Defense",
        "HP",
        "Decrease Damage Taken",
    ],

    Utility: [
        "Lifesteal",
        "Increase Movement Speed",
        "Chance to cast level 1 Evasion",
        "Chance to cast level 1 Barrier",
        "Chance to cast level 1 Curse",
        "Chance to transform into Archangel",
        "Chance to transform into Demon Lord",
    ],

    Misc: [
        "EXP Gain",
        "Decrease Mood Consumption",
        "Decrease Satiety Consumption",
        "Decrease Stamina Consumption", 
        "Chance to gain 2x Gold",
        "Chance to gain extra Material",
        "Chance to recover 1% Stamina",
        "Chance to recover 3% Stamina",
        "Chance to recover 3% Satiety",
        "Chance to recover 3% Mood",
        "Chance to stun enemy for 2 sec",
    ],

};

export const ancientWeaponValues = {}
    weaponLines.slice(0, 6).forEach(line => {
        ancientWeaponValues[line] = [3, 10];
    });

    weaponLines.slice(6, 21).forEach(line => {
        ancientWeaponValues[line] = [5, 15];
    });

    weaponLines.slice(21, 25).forEach(line => {
        ancientWeaponValues[line] = [8, 20];
    });

    weaponLines.slice(25, 31).forEach(line => {
        ancientWeaponValues[line] = [15, 30];
    });    


export const primalWeaponValues = {};
    weaponLines.slice(0, 6).forEach(line => {
        primalWeaponValues[line] = [5, 12];
    });

    weaponLines.slice(6, 21).forEach(line => {
        primalWeaponValues[line] = [7, 17];
    });

    weaponLines.slice(21, 25).forEach(line => {
        primalWeaponValues[line] = [11, 23];
    });

    weaponLines.slice(25, 31).forEach(line => {
        primalWeaponValues[line] = [20, 35];
    });


export const originalWeaponValues = {};
    weaponLines.slice(0, 6).forEach(line => {
        originalWeaponValues[line] = [5, 12];
    });

    weaponLines.slice(6, 21).forEach(line => {
        originalWeaponValues[line] = [7, 17];
    });

    weaponLines.slice(21, 25).forEach(line => {
        originalWeaponValues[line] = [11, 23];
    });

    weaponLines.slice(25, 31).forEach(line => {
        originalWeaponValues[line] = [20, 35];
    });


export const chaosWeaponValues = {};
    weaponLines.slice(0, 6).forEach(line => {
        chaosWeaponValues[line] = [7, 14];
    });

    weaponLines.slice(6, 21).forEach(line => {
        chaosWeaponValues[line] = [9, 19];
    });

    weaponLines.slice(21, 25).forEach(line => {
        chaosWeaponValues[line] = [14, 26];
    });

    weaponLines.slice(25, 31).forEach(line => {
        chaosWeaponValues[line] = [25, 40];
    });


export const abyssWeaponValues = {};
    weaponLines.slice(0, 6).forEach(line => {
        abyssWeaponValues[line] = [9, 16];
    });

    weaponLines.slice(6, 21).forEach(line => {
        abyssWeaponValues[line] = [11, 21];
    });
    
    weaponLines.slice(21, 25).forEach(line => {
        abyssWeaponValues[line] = [17, 29];
    });

    weaponLines.slice(25, 31).forEach(line => {
        abyssWeaponValues[line] = [30, 45];
    });

export const weaponValuesByType = {
  ancient: ancientWeaponValues,
  primal: primalWeaponValues,
  original: originalWeaponValues,
  chaos: chaosWeaponValues,
  abyss: abyssWeaponValues,
};
