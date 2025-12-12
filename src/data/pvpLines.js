export const PVP_TYPES = [ "2v2" , "champion", "challenger"];

export const FIXED_PVP_DPS_WEAPON_LINES = {
    1 : "Ignore enemy's defense and inflict pure damage",
    3 : "Attack",
    4 : "Increase Critical Hit Damage to Primate",
    5 : "Increase damage dealt to hunter",
}

export const FIXED_PVP_TANK_WEAPON_LINES = {
    1 : "Chance to cast level 1 Evasion",
    2 : "Decrease damage taken during barrier skill",
    3 : "HP",
    4 : "Decrease damage taken from Critical Hit Damage",
    5 : "Decrease damage taken from hunter",
}

export const LINE2_WEAPON_MAPS = {
    Berserker: {
        "2v2": {
            "Valhalla" : "Increase Damage Against Primate",
            "Ultimate Valhalla" : "Increase Damage Against Primate",
        },
        "champion" : {
            "Valhalla" : "Increase Damage Against Primate",
            "Ferrir" : "Increase damage against enemy with HP below 50%",
        },
        "challenger" : {
            "Ares" : "Berserker's Wrath is active at all times at level",
            "Ferrir" : "Increase damage against enemy with HP below 50%",
        }
    },

    Paladin: {
        "2v2": {
            "Mjolnir" : "Chance to cast level 1 Thunderbolt when attacking", 
            "Ultimate Mjolnir" : "Chance to cast level 1 Thunderbolt when attacking", 
        },
        "champion" : {
            "Mjolnir" : "Chance to cast level 1 Thunderbolt when attacking",
            "Mahes" : "",
        },
        "challenger" : {
            "Helios" : "Chance to cast Sun's Aura at",
            "Mahes" : "",
        }
    },

    Sorcerer: {
        "2v2": {
            "Immortal" : "Chance to cast level 1 Fury when attacking",
            "Ultimate Immortal" : "Chance of casting level 1 Fury when attacking",
        },
        "champion" : {
            "Immortal" : "Chance to cast level 1 Fury when attacking",
            "Isis" : "Decrease skill cooldown by",
        },
        "challenger" : {
            "Uranus" : "Ruler of the sky is active at all times at level",
            "Isis" : "Decrease skill cooldown by",
        }
    },

    Ranger: {
        "2v2": {
            "Vijaya" : "Chance to inflict 3x damage",
            "Ultimate Vijaya" : "Chance to inflict 3x damage",
        },
        "champion" : {
            "Vijaya" : "Chance to inflict 3x damage",
            "Gandiva" : "Chance to cast Firestorm when attacking",
        },
        "challenger" : {
            "Artemis" : "Chance to cast Replication when the ranger cast a skill",
            "Gandiva" : "Chance to cast Firestorm when attacking",
        }
    },

    "Dark Knight": {
        "2v2": {
            "Trishula" : "Chance to cast Strike of Destruction",
            "Ultimate Trishula" : "Chance to cast Strike of Destruction",
        },
        "champion" : {
            "Trishula" : "Chance to cast Strike of Destruction",
            "Gungnir" : "Ignore enemy's evasion by",
        },
        "challenger" : {
            "Poseidon Spear" : "Chance to cast Hydro Pillar when attacking",
            "Gungnir" : "Ignore enemy's evasion by",
        }
    },
}

export const FIXED_PVP_DPS_WEAPON_LINE_VALUE = {
    "2v2": {
        classes: {
            Berserker: {
                "Valhalla": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [12, 30],
                        "Attack": [8, 18],
                    },
                    line2: {
                        "Increase Damage Against Primate": [18, 33],
                    }
                },
                "Ultimate Valhalla": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [15, 33],
                        "Attack": [10, 20],
                    },
                    line2: {
                        "Increase Damage Against Primate": [20, 35],
                    }
                }
            },
            Paladin: {
                "Mjolnir": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [12, 30],
                        "Attack": [8, 18],
                    },
                    line2: {
                        "Chance to cast level 1 Thunderbolt when attacking": [13, 23],
                    }
                },
                "Ultimate Mjolnir": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [15, 33],
                        "Attack": [10, 20],
                    },
                    line2: {
                        "Chance to cast level 1 Thunderbolt when attacking": [15, 25],
                    }
                }
            },
            Sorcerer: {
                "Immortal": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [12, 30],
                        "Attack": [8, 18],
                    },
                    line2: {
                        "Chance to cast level 1 Fury when attacking": [11, 21],
                    }
                },
                "Ultimate Immortal": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [15, 33],
                        "Attack": [10, 20],
                    },
                    line2: {
                        "Chance to cast level 1 Fury when attacking": [13, 23],
                    }
                }
            },
            Ranger: {
                "Vijaya": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [12, 30],
                        "Attack": [8, 18],
                    },
                    line2: {
                        "Chance to inflict 3x damage": [13, 28],
                    }
                },
                "Ultimate Vijaya": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [15, 33],
                        "Attack": [10, 20],
                    },
                    line2: {
                        "Chance to inflict 3x damage": [15, 30],
                    }
                }
            },
            "Dark Knight" : {
                "Trishula": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [12, 30],
                        "Attack": [8, 18],
                    },
                    line2: {
                        "Chance to cast Strike of Destruction" : [13, 23]
                    }
                },
                "Ultimate Trishula": {
                    fixed: {
                        "Ignore enemy's defense and inflict pure damage": [15, 33],
                        "Attack": [10, 20],
                    },
                    line2: {
                        "Chance to cast Strike of Destruction" : [15, 25]
                    }
                },
            }
        }
    },

    "champion": {
        fixed: {
            "Ignore enemy's defense and inflict pure damage": [18, 36],
            "Attack": [12, 22],
            "Increase Critical Hit Damage to Primate" : [35, 50],
        },
        classes: {
            Berserker: {
                "Valhalla": { "Increase Damage Against Primate": [20, 35] },
                "Ferrir": { "Increase damage against enemy with HP below 50%": [15, 30] },
            },
            Paladin: {
                "Mjolnir": { "Chance to cast level 1 Thunderbolt when attacking": [15, 25] },
            },
            Sorcerer: {
                "Immortal": { "Chance to cast level 1 Fury when attacking": [13, 23] },
                "Isis": { "Decrease skill cooldown by": [15, 25] },
            },
            Ranger: {
                "Vijaya": { "Chance to inflict 3x damage": [15, 30] },
                "Gandiva": { "Chance to cast Firestorm when attacking": [15, 25] },
            },
            "Dark Knight": {
                "Trishula": { "Chance to cast Strike of Destruction" : [15, 25] },
                "Gungnir": { "Ignore enemy's evasion by" : [10, 20] },
            }
        },
    },

    "challenger": {
        fixed: {
            "Ignore enemy's defense and inflict pure damage": [21, 39],
            "Attack": [16, 26],
            "Increase Critical Hit Damage to Primate" : [40, 55],
            "Increase damage dealt to hunter" : [1, 5],
        },
        classes: {
            Berserker: {
                "Ares": { "Berserker's Wrath is active at all times at level": [1, 3] },
                "Ferrir": { "Increase damage against enemy with HP below 50%": [15, 30] },
            },
            Paladin: {
                "Helios": { "Chance to cast Sun's Aura at": [10, 25] },
            },
            Sorcerer: {
                "Uranus": { "Ruler of the sky is active at all times at level": [1, 3] },
                "Isis": { "Decrease skill cooldown by": [15, 25] },
            },
            Ranger: {
                "Artemis": { "Chance to cast Replication when the ranger cast a skill": [35, 50] },
                "Gandiva": { "Chance to cast Firestorm when attacking": [25, 35] },
            },
            "Dark Knight": {
                "Poseidon Spear" : { "Chance to cast Hydro Pillar when attacking": [15, 25] },
                "Gungnir" : { "Ignore enemy's evasion by" : [10, 20] },
            }
        },
    },
}

export const FIXED_PVP_TANK_WEAPON_LINE_VALUE = {
    "champion": {
        Paladin: {
            fixed: {
                "Chance to cast level 1 Evasion": [10, 20],
                "Decrease damage taken during barrier skill": [10, 20],
                "HP": [10, 25],
                "Decrease damage taken from Critical Hit Damage": [10, 25],
            }
        }
    },
    "challenger": {
        Paladin: {
            fixed: {
                "Chance to cast level 1 Evasion": [15, 25],
                "Decrease damage taken during barrier skill": [10, 20],
                "HP": [15, 30],
                "Decrease damage taken from Critical Hit Damage": [13, 28],
                "Decrease damage taken from hunter": [10, 25],
            }
        }
    }
}

export const FIXED_PVP_DPS_HELMET_LINE_VALUE = {
    "2v2": {
        "Wreath of Destruction": {
            fixed: {
                "Attack": [7, 14],
                "Attack Speed": [7, 14],
                "Critical Hit Chance": [4, 8],
            }
        },
        "Red Arena Helmet": {
            fixed: {
                "Attack": [8, 15],
                "Attack Speed": [8, 15],
                "Critical Hit Chance": [5, 9],
            }
        },
  },
    "champion": {
        "Red Battle Circlet": {
            fixed: {
                "Attack": [9, 16],
                "Critical Hit Chance": [6, 10],
                "Increase Damage Against Primate": [20, 35],
                "Decrease damage taken from Critical Hit Damage": [10, 25],
            }
        }
    },
    "challenger": {
        "Red Diadem": {
            fixed: {
                "Attack": [19, 26],
                "Critical Hit Chance": [10, 14],
                "Increase Damage Against Primate": [25, 40],
                "Decrease damage taken from Critical Hit Damage": [13, 28],
                "Increase damage dealt to hunter": [1, 5],
            }
        }
    }
}

export const FIXED_PVP_TANK_HELMET_LINE_VALUE = {
    "2v2": {
        "Wreath of Protection": {
            fixed: {
                "Defense": [7, 14],
                "Evasion": [5, 8],
                "HP": [7, 14],
            }
        },
        "Blue Arena Helmet": {
            fixed: {
                "Defense": [8, 15],
                "Evasion": [6, 9],
                "HP": [8, 15],
            }
        },
    },
    "champion": {
            "Blue Battle Circlet": {
            fixed: {
                "HP": [9, 16],
                "Evasion": [7, 10],
                "Decrease Damage Taken": [5, 15],
                "Decrease damage taken from Critical Hit Damage": [10, 25],
            }
        }
    },
    "challenger": {
        "Blue Diadem": {
            fixed: {
                "HP": [19, 24],
                "Evasion": [11, 14],
                "Decrease Damage Taken": [9, 19],
                "Decrease damage taken from Critical Hit Damage": [13, 28],
                "Decrease damage taken from hunter": [10, 25],
            }
        }
    }
}

export const pvpNoPercent = [
    "Berserker's Wrath is active at all times at level",
    "Ruler of the sky is active at all times at level",
]



