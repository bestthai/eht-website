export const runeLines = [
    "Attack Speed",
    "Critical Hit Chance",
    "Evasion",

    "Chance to recover 3% Stamina",
    "Chance to recover 3% Satiety",
    "Chance to recover 3% Mood",
    "Lifesteal",
    "Increase Movement Speed",
    "Decrease Damage Taken",
    "Additional Damage",
    
    "EXP Gain",
    "Decrease Mood Consumption",
    "Decrease Satiety Consumption",
    "Decrease Stamina Consumption",

    "Attack",
    "Defense",
    "HP",
    "Chance to gain 2x Gold",
    "Chance to gain extra Material",

    "Critical Hit Damage",
    "Increase Damage Against Boss",
    "Increase Damage Against Primate",
    "Increase Damage Against Demon",
    "Increase Damage Against Animal",
    "Increase Damage Against Undead",
];

export const runeValues = {};
    runeLines.slice(0, 3).forEach(rune => {
        runeValues[rune] = [1, 6, 1];
    })

    runeLines.slice(3, 10).forEach(rune => {
        runeValues[rune] = [3, 12, 1];
    })

    runeLines.slice(10, 14).forEach(rune => {
        runeValues[rune] = [4, 22, 1];
    })

    runeLines.slice(14, 19).forEach(rune => {
        runeValues[rune] = [6, 24, 1];
    })

    runeLines.slice(19, 25).forEach(rune => {
        runeValues[rune] = [10, 28, 1];
    })