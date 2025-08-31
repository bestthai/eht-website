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
        "High-Class Material",
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

    Special: [
        // WB/TWB/VWB
        "Damage given by ignoring monster's defense",
        "Increase Damage given to monster",
        "Chance to 3x damage when attacking monster",
        "Chance to cast Poison Aura when attacking monster",
        "Chance to cast Devour when attacking monster",
        "Chance to cast Venom Rain when attacking monster",
        "Chance to cast Dark Fissure when attacking monster",
        "Chance to cast Soul Eater when attacking monster",
        "Chance to cast Dark Lightning when attacking monster",
        "Chance to cast Feather Shot when attacking monster",
        "Chance to cast Frozen soul when attacking monster",
        "Chance to cast Rampage when attacking monster",
        "Chance to cast Dragon's Rage when attacking monster",
        "Chance to cast Primodial Power when attacking monster",

        // Chaos Unique
        "If the hunter have YOLO characteristic, increase Movement Speed and Attack by",
        "When attacking, Pumpkin Change is cast at",
        "Increase 2nd, 3rd Class Skill level by",
        "When attacked, Mood, Stamina, and Satiety are recovered by",
        "When attacked, Frost Wave is cast at",
        "Blood Berserk is activated at all times at level",
        "When attacking, Curse Chain is cast at",
        "Amplify ATK by [] from movement speed (max 30%)",
        "When attacked with status effect that limit action, damage taken is reduced by [] for 6 sec",
        "When using potion, there is [] for quantity to not decrease",
        "Thunder Dragon's Rage is activated at all times at level",
        "when attacking, 20% chance to cast Slyph's Blessing at level",
        "Cyclone skill duration is increased by",
        "Trinity is activated at all times at level",
        "King of the Underworld is activated at all times at level",
        "Commander's Privilage is actived at all times",

        // Abyss Unique
        "If damage-absorbtion shield is active, damage taken is reduced by [] for 6 sec",
        "When attacked, Enhance Frost Wave is cast at",
        "Enhance Blood Berserk is activated at all times at level",
        "Hunter's gold gain is increased by",
        "Amplify ATK by [] from movement speed (max 40%)",
        "Blood Expansion is activated at level",
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
