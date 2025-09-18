export const chaosUniqueLines = {
    Helmet: {
        "Juggernaut Helm" : "If the hunter have YOLO characteristic, increase Movement Speed and Attack by",
        "Pumpkin Witch Hat" : "When attacking, Pumpkin Change is cast at",
        "Helmet of Insight" : "Increase 2nd, 3rd Class Skill level by",
    }, 

    Chestplate: {
        "Sufferer Armor" : "When attacked, Mood, Stamina, and Satiety are recovered by",
        "Frost Giant Cuirass" : "When attacked, Frost Wave is cast at", 
    },

    Glove: {
        "Bloodfist" : "Blood Berserk is activated at all times at level",
        "Hecate Glove" : "When attacking, Curse Chain is cast at",
    },

    Boot: {
        "Greaves of Wind" : "Amplify ATK by [] from movement speed (max 30%)",
        "Greaves of Tenacity" : "When attacked with status effect that limit action, damage taken is reduced by [] for 6 sec",
    },

    Belt: {
        "Alchemist Belt" : "When using potion, there is [] for quantity to not decrease",
        "Thunder Dragon Belt" : "Thunder Dragon's Rage is activated at all times at level",
        "Slyph Belt" : "when attacking, 20% chance to cast Slyph's Blessing at level",
    },

    Ring: {
        "Cyclone Ring" : "Cyclone skill duration is increased by",
        "Trinity Ring" : "Trinity is activated at all times at level",
    },

    Necklace: {
        "Hades Necklace" : "King of the Underworld is activated at all times at level",
        "Commander Necklace" : "Commander's Privilage is actived at all times",
    },
}

export const chaosUniqueLineValues = {
    "Juggernaut Helm": [30], 
    "Pumpkin Witch Hat": [10, 20], 
    "Helmet of Insight": [1, 3],

    "Sufferer Armor": [1, 5],
    "Frost Giant Cuirass": [10, 25],

    "Bloodfist": [1, 3],
    "Hecate Glove": [10, 25],

    "Greaves of Wind": [3, 10],
    "Greaves of Tenacity": [30, 50],

    "Alchemist Belt": [25, 50],
    "Thunder Dragon Belt": [1, 3],
    "Slyph Belt": [1, 3],

    "Cyclone Ring": [2, 4],
    "Trinity Ring": [1, 3],

    "Hades Necklace": [1, 3],
    "Commander Necklace": [100], 
};

export const chaosUniqueFixedLine = {
    "Juggernaut Helm": {0: "HP"},
    "Greaves of Wind": {0: "Increase Movement Speed"},
};

export const chaosUniqueFixedLineValue = {
    "Juggernaut Helm": [20, 30],
    "Greaves of Wind": [15, 30],
};

export const chaosUniquePercent = {
    "Juggernaut Helm": true,
    "Pumpkin Witch Hat": true,
    "Helmet of Insight": false,

    "Sufferer Armor": true,
    "Frost Giant Cuirass": true,

    "Bloodfist": false,
    "Hecate Glove": true,

    "Greaves of Wind": true,
    "Greaves of Tenacity": true,

    "Alchemist Belt": true,
    "Thunder Dragon Belt": false,
    "Slyph Belt": true,

    "Cyclone Ring": false,
    "Trinity Ring": false,

    "Hades Necklace": false,
    "Commander Necklace": true,
};


export const abyssUniqueLines = {
    Helmet: {

    },

    Chestplate: {
        "Armor of Absorbtion" : "If damage-absorbtion shield is active, damage taken is reduced by [] for 6 sec",
        "Truthful Frost Giant Cuirass" : "When attacked, Enhance Frost Wave is cast at",
    },

    Glove: {
        "Truthful Bloodfist" : "Enhance Blood Berserk is activated at all times at level", 
        "Hand of Midas" : "Hunter gold gain is increased by",
    },
 
    Boot: {
        "Truthful Greaves of Wind" : "Amplify ATK by [] from movement speed (max 40%)",
        "Vampire Boot" : "Blood Expansion is activated at level",
    },

    Belt: {

    },

    Ring: {

    },

    Necklace: {
    
    },
}

export const abyssUniqueLineValues = {
    "Armor of Absorbtion": [15, 30],
    "Truthful Frost Giant Cuirass": [10, 25],

    "Truthful Bloodfist": [1, 3],
    "Hand of Midas": [35, 50],

    "Truthful Greaves of Wind": [3, 10],
    "Vampire Boot": [1, 3],
};

export const abyssUniqueFixedLine = {
    "Truthful Greaves of Wind": {0: "Increase Movement Speed"},
};

export const abyssUniqueFixedLineValue = {
    "Truthful Greaves of Wind": [17, 32],
};

export const abyssUniquePercent = {
    "Armor of Absorbtion": true,
    "Truthful Frost Giant Cuirass": true, 

    "Truthful Bloodfist": false,
    "Hand of Midas": true,

    "Truthful Greaves of Wind": true, 
    "Vampire Boot": true,
};