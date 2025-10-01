export const weaponLines = [
    "Attack",
    "Attack Speed",
    "Critical Hit Chance",
    "Critical Hit Damage",
    "Additional Damage",
    "Chance to transform into Demon Lord",
    "Increase Damage Against Boss",
    "Increase Damage Against Undead",
    "Increase Damage Against Primate",
    "Increase Damage Against Demon",
    "Increase Damage Against Animal",
    "Chance to stun enemy for 2 sec",

    "Defense",
    "Evasion",
    "HP",
    "Decrease Damage Taken",
    "Chance to transform into Archangel",
    "Chance to cast level 1 Evasion",
    "Chance to cast level 1 Barrier",
    "Chance to cast level 1 Curse",

    "Lifesteal",
    "EXP Gain",
    "Decrease Mood Consumption",
    "Decrease Satiety Consumption",
    "Decrease Stamina Consumption",
    "Increase Movement Speed",
    "Chance to gain 2x Gold",
    "Chance to gain extra Material",
    "Chance to recover 1% Stamina",
    "Chance to recover 3% Satiety",
    "Chance to recover 3% Mood",
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
        "Hunter gold gain is increased by",
        "Amplify ATK by [] from movement speed (max 40%)",
        "Blood Expansion is activated at level",

        // PvP
        "Ignore enemy's defense and inflict pure damage",
        "Increase damage against enemy with HP below 50%",
        "Berserker's Wrath is active at all times at level",
        "Chance to cast level 1 Thunderbolt when attacking",
        "Chance to cast level 1 Fury when attacking",
        "Decrease skill cooldown by",
        "Ruler of the sky is active at all times at level",
        "Chance to inflict 3x damage",
        "Chance to cast Firestorm when attacking",
        "Chance to cast Replication when the ranger cast a skill",
        "Increase Critical Hit Damage to Primate",
        "Increase damage dealt to hunter",
        "Decrease damage taken during barrier skill",
        "Decrease damage taken from Critical Hit Damage",
        "Decrease damage taken from hunter",
    ],

};

// ---------------- VALUE GROUPS ----------------
// Match old difficulty ranges to new order
const Group1 = [
    "Attack Speed",
    "Critical Hit Chance",
    "Evasion",
    "EXP Gain",
    "Chance to transform into Archangel",
    "Chance to transform into Demon Lord",
];
const Group2 = [
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
];
const Group3 = ["Attack", "Defense", "HP", "Additional Damage"];
const Group4 = [
    "Critical Hit Damage",
    "Increase Damage Against Boss",
    "Increase Damage Against Primate",
    "Increase Damage Against Demon",
    "Increase Damage Against Animal",
    "Increase Damage Against Undead",
];

// ---------------- ASSIGN HELPER ----------------
function assignWeaponValues(target, values) {
    Group1.forEach(line => (target[line] = values[0]));
    Group2.forEach(line => (target[line] = values[1]));
    Group3.forEach(line => (target[line] = values[2]));
    Group4.forEach(line => (target[line] = values[3]));
}

// ---------------- WEAPON VALUES ----------------
export const ancientWeaponValues = {};
assignWeaponValues(ancientWeaponValues, [[3, 10], [5, 15], [8, 20], [15, 30]]);

export const primalWeaponValues = {};
assignWeaponValues(primalWeaponValues, [[5, 12], [7, 17], [11, 23], [20, 35]]);

export const originalWeaponValues = {};
assignWeaponValues(originalWeaponValues, [[5, 12], [7, 17], [11, 23], [20, 35]]);

export const chaosWeaponValues = {};
assignWeaponValues(chaosWeaponValues, [[7, 14], [9, 19], [14, 26], [25, 40]]);

export const abyssWeaponValues = {};
assignWeaponValues(abyssWeaponValues, [[9, 16], [11, 21], [17, 29], [30, 45]]);

export const weaponValuesByType = {
  ancient: ancientWeaponValues,
  primal: primalWeaponValues,
  original: originalWeaponValues,
  chaos: chaosWeaponValues,
  abyss: abyssWeaponValues,
};
