export const WB_TYPES = [ "wb", "twb", "vwb" ];

export const FIXED_WB_LINES = {
    1: "Damage given by ignoring monster's defense",
    3: "Attack",
    4: "Increase Damage given to monster",
    5: "Critical Hit Damage",
}

export const LINE2_MAPS = {
    Berserker : {
        wb : {
            Venom: "Chance to 3x damage when attacking monster",
            Darkness: "Chance to cast Dark Fissure when attacking monster",
        },
        twb : {
            Venom: "Chance to 3x damage when attacking monster",
            Darkness: "Chance to cast Dark Fissure when attacking monster",
        },
        vwb : {
            Glacial: "Chance to cast Rampage when attacking monster",
            Blaze: "",
        },
    },

    Paladin : {
        wb : {
            Venom: "Chance to cast Poison Aura when attacking monster",
            Darkness: "Chance to cast Dark Lightning when attacking monster",
        },
        twb : {
            Venom: "Chance to cast Poison Aura when attacking monster",
            Darkness: "Chance to cast Dark Lightning when attacking monster",
        },
        vwb : {
            Glacial: "",
            Blaze: "Chance to cast Dragon's Rage when attacking monster",
        }
    },

    Sorcerer : {
        wb : {
            Venom: "Chance to cast Devour when attacking monster",
            Darkness: "Chance to cast Soul Eater when attacking monster",
        },
        twb : {
            Venom: "Chance to cast Devour when attacking monster",
            Darkness: "Chance to cast Soul Eater when attacking monster",
        },
        vwb : {
            Glacial: "",
            Blaze: "Chance to cast Primodial Power when attacking monster",
        }
    },

    Ranger : {
        wb : {
            Venom: "Chance to cast Venom Rain when attacking monster",
            Darkness: "Chance to cast Feather Shot when attacking monster",
        },
        twb : {
            Venom: "Chance to cast Venom Rain when attacking monster",
            Darkness: "Chance to cast Feather Shot when attacking monster",
        },
        vwb : {
            Glacial: "Chance to cast Frozen soul when attacking monster",
            Blaze: "",
        }
    },

    "Dark Knight" : {
        wb : {
            Venom: "Chance to cast Poison Fang when attacking monster",
            Darkness: "Chance to cast Curse Aura when attacking monster",
        },
        twb : {
            Venom: "Chance to cast Poison Fang when attacking monster",
            Darkness: "Chance to cast Curse Aura when attacking monster",
        },
        vwb : {
            Glacial: "Chance to cast Frozen Heart when attacking monster",
            Blaze: "",
        }
    },
}

export const wbLineValues = {
    wb: {
        Venom: {
            fixed: {
                "Damage given by ignoring monster's defense": [30, 50],
                "Attack": [11, 23],
                "Increase Damage given to monster": [20, 35],
            },
            classes: {
                Berserker: { "Chance to 3x damage when attacking monster": [15,30] },
                Paladin: { "Chance to cast Poison Aura when attacking monster": [15,25] },
                Sorcerer: { "Chance to cast Devour when attacking monster": [5,15] },
                Ranger: { "Chance to cast Venom Rain when attacking monster": [15,25] },
                "Dark Knight": { "Chance to cast Poison Fang when attacking monster": [15,25] },
            }
        },
        Darkness: {
            fixed: {
                "Damage given by ignoring monster's defense": [30, 50],
                "Attack": [11, 23],
                "Increase Damage given to monster": [20, 35],
            },
            classes: {
                Berserker: { "Chance to cast Dark Fissure when attacking monster": [15,25] },
                Paladin: { "Chance to cast Dark Lightning when attacking monster": [15,25] },
                Sorcerer: { "Chance to cast Soul Eater when attacking monster": [25,35] },
                Ranger: { "Chance to cast Feather Shot when attacking monster": [15,25] },
                "Dark Knight": { "Chance to cast Curse Aura when attacking monster": [15,25] },
            }
        }
    },
    twb: {
        Venom: {
            fixed: {
                "Damage given by ignoring monster's defense": [35, 55],
                "Attack": [14, 26],
                "Increase Damage given to monster": [25, 40],
                "Critical Hit Damage": [25, 40]
            },
            classes: {
                Berserker: { "Chance to 3x damage when attacking monster": [15,30] },
                Paladin: { "Chance to cast Poison Aura when attacking monster": [15,25] },
                Sorcerer: { "Chance to cast Devour when attacking monster": [5,15] },
                Ranger: { "Chance to cast Venom Rain when attacking monster": [15,25] },
                "Dark Knight": { "Chance to cast Poison Fang when attacking monster": [15,25] },
            }
        },
        Darkness: {
            fixed: {
                "Damage given by ignoring monster's defense": [35, 55],
                "Attack": [14, 26],
                "Increase Damage given to monster": [25, 40],
                "Critical Hit Damage": [25, 40]
            },
            classes: {
                Berserker: { "Chance to cast Dark Fissure when attacking monster": [15,25] },
                Paladin: { "Chance to cast Dark Lightning when attacking monster": [15,25] },
                Sorcerer: { "Chance to cast Soul Eater when attacking monster": [15,25] },
                Ranger: { "Chance to cast Feather Shot when attacking monster": [15,25] },
                "Dark Knight": { "Chance to cast Curse Aura when attacking monster": [15,25] },
            }
        }
    },
    vwb: {
        Glacial: {
            fixed: {
                "Damage given by ignoring monster's defense": [35, 55],
                "Attack": [14, 26],
                "Increase Damage given to monster": [25, 40],
                "Critical Hit Damage": [25, 40]
            },
            classes: {
                Berserker: { "Chance to cast Rampage when attacking monster": [15,25] },
                Paladin: { "Chance to cast ???": [0,0] }, // fill skill
                Sorcerer: { "Chance to cast ???": [0,0] }, // fill skill
                Ranger: { "Chance to cast Frozen soul when attacking monster": [15,25] },
                "Dark Knight": { "Chance to cast Frozen Heart when attacking monster": [15,25] },
            }
        },
        Blaze: {
            fixed: {
                "Damage given by ignoring monster's defense": [35, 55],
                "Attack": [14, 26],
                "Increase Damage given to monster": [25, 40],
                "Critical Hit Damage": [25, 40]
            },
            classes: {
                Berserker: { "Chance to cast ???": [0,0] }, // fill skill
                Paladin: { "Chance to cast Dragon's Rage when attacking monster": [15,25] },
                Sorcerer: { "Chance to cast Primodial Power when attacking monster": [15,25] },
                Ranger: { "Chance to cast ???": [0,0] }, // fill skill
                "Dark Knight": { "Chance to cast ???": [0,0] }, // fill skill
            }
        }
    }
};

