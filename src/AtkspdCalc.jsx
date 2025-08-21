import React, { useState, useEffect } from 'react';
import { weaponAtkspd, statColorAtkspd, characteristicAtkspd, furyAtkspd, mountEqAtkspd } from './data/atkspd';

function AtkspdCalc() {
    const classes = ["Berserker", "Paladin", "Sorcerer", "Ranger"];
    const weaponTypes = ["Ancient", "Primal", "Original", "Chaos", "Abyss", "WB", "VWB"];

    // Selected class and weapon
    const [selectedClass, setSelectedClass] = useState("");
    const [weaponType, setWeaponType] = useState("");

    // Individual buffs
    const [guild, setGuild] = useState(0);
    const [secretTech, setSecretTech] = useState(0);
    const [statColor, setStatColor] = useState(0);
    const [characteristic, setCharacteristic] = useState(0);
    const [quicken, setQuicken] = useState(0);
    const [fury, setFury] = useState(0);
    const [gear, setGear] = useState(0);
    const [rune, setRune] = useState(0);
    const [mountEq, setMountEq] = useState(0);

    const [atkspd, setAtkspd] = useState(null);

    useEffect(() => {
        
    })

    return (
        <div className="atkspd-calc-container">
        <h1 className="atkspd-calc-title">Attack Speed Calculator</h1>

        </div>
    ); 
}

export default AtkspdCalc;
