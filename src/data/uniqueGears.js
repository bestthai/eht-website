export const chaosUniqueLines = {
    Helmet: {
        "Juggernaut Helm" : "If the hunter have YOLO characteristic, increase Movement Speed and Attack by",
        "Pumpkin Witch Hat" : "When attacking, Pumpkin Change is cast at",
        "Helmet of Insight" : "Increase 2nd, 3rd Class Skill level by",
    }, // done

    Chestplate: {
        "Sufferer's Armor" : "When attacked, Mood, Stamina, and Satiety are recovered by",
        "Frost Giant Cuirass" : "When attacked, Frost Wave is cast at", // done
    },

    Glove: {
        "Bloodfist" : "Blood Berserk is activated at all times at level",
        "Hecate's Glove" : "When attacking, Curse Chain is cast at",
    },

    Boot: {
        "Greaves of Wind" : "Amplify ATK by [] from movement speed (max 30%)",
        "Greaves of Tenacity" : "When attacked with status effect that limit action, damage taken is reduced by [] for 6 sec",
    },

    Belt: {
        "Alchemist's Belt" : "When using potion, there is [] for quantity to not decrease",
        "Thunder Dragon's Belt" : "Thunder Dragon's Rage is activated at all times at level",
        "Slyph's Belt" : "when attacking, 20% chance to cast Slyph's Blessing at level",
    },

    Ring: {
        "Cyclone Ring" : "Cyclone skill duration is increased by",
        "Trinity Ring" : "Trinity is activated at all times at level",
    },

    Necklace: {
        "Hades's Necklace" : "King of the Underworld is activated at all times at level",
        "Commander's Necklace" : "Commander's Privilage is actived at all times",
    },
}

export const chaosUniqueLineValues = {
    "Juggernaut Helm": [30], 
    "Pumpkin Witch Hat": [10, 20], 
    "Helmet of Insight": [1, 3],

    "Sufferer's Armor": [1, 5],
    "Frost Giant Cuirass": [10, 25],

    "Bloodfist": [1, 3],
    "Hecate's Glove": [10, 25],

    "Greaves of Wind": [3, 10],
    "Greaves of Tenacity": [30, 50],

    "Alchemist's Belt": [25, 50],
    "Thunder Dragon's Belt": [1, 3],
    "Slyph's Belt": [1, 3],

    "Cyclone Ring": [2, 4],
    "Trinity Ring": [1, 3],

    "Hades's Necklace": [1, 3],
    "Commander's Necklace": [null], 
};

export const chaosUniquePercent = {
    "Juggernaut Helm": true,
    "Pumpkin Witch Hat": true,
    "Helmet of Insight": false,

    "Sufferer's Armor": true,
    "Frost Giant Cuirass": true,

    "Bloodfist": false,
    "Hecate's Glove": true,

    "Greaves of Wind": true,
    "Greaves of Tenacity": true,

    "Alchemist's Belt": true,
    "Thunder Dragon's Belt": false,
    "Slyph's Belt": true,

    "Cyclone Ring": false,
    "Trinity Ring": false,

    "Hades's Necklace": false,
    "Commander's Necklace": false,
};


export const abyssUniqueLines = {
    Helmet: {

    },

    Chestplate: {
        "Armor of Absorbtion" : "If damage-absorbtion shield is active, damage taken is reduced by [] for 6 sec",
        "Truthful Frost Giant Cuirass" : "When attacked, Enhance Frost Wave is cast at",
    },

    Glove: {
        "Truthful Bloodfist" : "Enhance Blood Berserk is activated at all times at level", // done
        "Hand of Midas" : "Hunter's gold gain is increased by",
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

export const abyssUniquePercent = {
    "Armor of Absorbtion": true,
    "Truthful Frost Giant Cuirass": true, 

    "Truthful Bloodfist": false,
    "Hand of Midas": true,

    "Truthful Greaves of Wind": true, 
    "Vampire Boot": true,
};