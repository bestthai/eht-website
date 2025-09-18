import React, { useState, useEffect } from 'react';
import { weaponAtkspd, statColorAtkspd, characteristicAtkspd, quickenAtkspd, furyAtkspd, mountEqAtkspd } from './data/atkspd';

function AtkspdCalc() {
    const targetAtkspd = 0.25;

    const statColorCodes = {
        Grey: "#808080",
        Blue: "#7087d2ff",
        Orange: "#f8b231ff",
        Purple: "#ac23acff",
    };

    const classes = ["Berserker", "Paladin", "Sorcerer", "Ranger"];
    const weaponTypes = ["Ancient", "Primal", "Original", "Chaos", "Abyss", "WB", "VWB", "PvP"];

    const [selectedClass, setSelectedClass] = useState("");
    const [weaponType, setWeaponType] = useState("");

    const [guild, setGuild] = useState(5);
    const [secretTech, setSecretTech] = useState(10);
    const [statColor, setStatColor] = useState(0);
    const [characteristic, setCharacteristic] = useState(0);
    const [quicken, setQuicken] = useState(1.0);
    const [fury, setFury] = useState(0);
    const [gear, setGear] = useState("");
    const [rune, setRune] = useState(0);
    const [mountEq, setMountEq] = useState(0);

    const [atkspd, setAtkspd] = useState(null);
    const [gearRequired, setGearRequired] = useState(null);


    function calculateAtkspd({ cls, weaponType, guild, secretTech, statColor, characteristic, quicken, fury, gear, rune, mountEq }) {
        const numericGear = Number(gear) || 0;
        const numericSecretTech = Number(secretTech) || 0;
        
        const baseAtkspd = weaponAtkspd[weaponType]?.[cls] || 0;
        const additiveBuffs = guild + numericSecretTech + statColor + characteristic + numericGear + rune + mountEq;
        
        let multiplicativeBuffs = quicken;
        if (fury > 0)
        {
            multiplicativeBuffs = (quicken - 1) + fury;
        }

        const atkspdValue = baseAtkspd * ((1 - (additiveBuffs / 100)) / multiplicativeBuffs);

        return atkspdValue.toFixed(2);
    }

    function calculateAtkspdRequired({ cls, weaponType, guild, secretTech, statColor, characteristic, quicken, fury, gear, rune, mountEq, targetAtkspd }) {
        const baseAtkspd = weaponAtkspd[weaponType]?.[cls] || 0;
        
        if (!baseAtkspd || !quicken) return null;   

        const numericSecretTech = Number(secretTech) || 0;
        const numericGear = Number(gear) || 0;

        const additiveBuffs = guild + numericSecretTech + statColor + characteristic + numericGear + rune + mountEq;
        let multiplicativeBuffs = quicken;
        if (fury > 0)
        {
            multiplicativeBuffs = (quicken - 1) + fury;
        }

        const needBuffs = (100 * (1 - ( targetAtkspd * multiplicativeBuffs / baseAtkspd))) - additiveBuffs;

        return needBuffs.toFixed(0);
    }

    /*
        Calculate atkspd whenever any input changes
    */
    useEffect(() => {
        if (!selectedClass || !weaponType) 
        {
            setAtkspd(null);
            setGearRequired(null);
            return;
        }

        const value = calculateAtkspd({
            cls: selectedClass,
            weaponType,
            guild,
            secretTech,
            statColor,
            characteristic,
            quicken,
            fury,
            gear,
            rune,
            mountEq
        });

        const gearNeeded = calculateAtkspdRequired({
            cls: selectedClass,
            weaponType,
            guild,
            secretTech,
            statColor,
            characteristic,
            quicken,
            fury,
            gear,
            rune,
            mountEq,
            targetAtkspd: 0.25,
        });

        setAtkspd(value);
        setGearRequired(gearNeeded);
    }, [selectedClass, weaponType, guild, secretTech, statColor, characteristic, quicken, fury, gear, rune, mountEq]);

    /*
        Clear fury value when class changes
    */
    useEffect(() => {
        if (selectedClass === "Paladin" || selectedClass === "Ranger") {
            setFury(0); 
        } else if (selectedClass === "Sorcerer") {
            setFury(furyAtkspd["Level 0"]); 
        } else if (selectedClass === "Berserker") {
            setFury(furyAtkspd["Level 10"]); 
        } else {
            setFury(0);
        }
    }, [selectedClass]);

    return (
        <div className="atkspd-calc-container">
            <h1 className="atkspd-calc-title">Attack Speed Calculator</h1>

            {/* Class selection */}
            <div>
                <label>Class: </label>
                <select 
                    className = {selectedClass}
                    onChange = {(e) => setSelectedClass(e.target.value)}>
                        <option value="">-- Select Class --</option>
                        {classes.map((cls) => (
                            <option key={cls} value={cls}>{cls}</option>
                        ))}
                </select>
            </div>

            {/* Weapon Selector */}
            <div>
                <label>Weapon: </label>
                <select value={weaponType} onChange={(e) => setWeaponType(e.target.value)}>
                    <option value="">-- Select Weapon --</option>
                    {weaponTypes.map((wp) => (
                        <option key={wp} value={wp}>{wp}</option>
                    ))}
                </select>
            </div>

            {/* Guild (0–5%) */}
            <div>
                <label>Guild Buff: </label>
                <select value={guild} onChange={(e) => setGuild(Number(e.target.value))}>
                    {[0,1,2,3,4,5].map((v) => (
                        <option key={v} value={v}>{v}%</option>
                    ))}
                </select>
            </div>

            {/* Secret Tech */}
            <div>
                <label>Secret Tech (0 - 10%): </label>
                <div className="input-percent-wrapper">
                    <input
                        type="number"
                        value={secretTech}
                        onChange={(e) => setSecretTech(e.target.value)}
                        placeholder="Enter value"
                        max={10}
                        min={0}
                    />
                    <span className="percent-symbol">%</span>
                </div>
            </div>

            {/* Stat Color */}
            <div>
                <label>Stat Color: </label>
                <select value={statColor} onChange={(e) => setStatColor(Number(e.target.value))}>
                    {Object.entries(statColorAtkspd).map(([name, val]) => (
                        <option key={name} value={val} style={{ color: statColorCodes[name] }}>{name}</option>
                    ))}
                </select>
            </div>

            {/* Characteristic */}
            <div>
                <label>Characteristic: </label>
                <select value={characteristic} onChange={(e) => setCharacteristic(Number(e.target.value))}>
                    {Object.entries(characteristicAtkspd).map(([name, val]) => (
                        <option key={name} value={val}>{name}</option>
                    ))}
                </select>
            </div>

            {/* Quicken */}
            <div>
                <label>Quicken: </label>
                <select value={quicken} onChange={(e) => setQuicken(Number(e.target.value))}>
                    {Object.entries(quickenAtkspd).map(([level, mult]) => (
                        <option key={level} value={mult}>Level {level}</option>
                    ))}
                </select>
            </div>

            {/* Fury */}
            {selectedClass !== "Paladin" && selectedClass !== "Ranger" && (
                <div>
                    <label>Fury: </label>
                    <select value={fury} onChange={(e) => setFury(Number(e.target.value))}>
                        {Object.entries(furyAtkspd).filter(([name, _]) => {
                                if (selectedClass === "Sorcerer") 
                                {
                                return ["Level 0", "Level 1"].includes(name); 
                                }
                                if (selectedClass === "Berserker") 
                                {
                                    return ["Level 0", "Level 10", "Level 11", "Level 12", "Level 13"].includes(name);
                                }
                                return true; // fallback (if new classes added later)
                            })
                            .map(([name, val]) => (
                                <option key={name} value={val}>
                                    {name}
                                </option>
                            ))}
                    </select>
                </div>
            )}

            {/* Gear */}
            <div>
                <label>Gear: </label>
                <div className="input-percent-wrapper">
                    <input
                        type="number"
                        value={gear}
                        onChange={(e) => setGear(e.target.value)}
                        placeholder="Enter value"
                    />
                    <span className="percent-symbol">%</span>
                </div>
            </div>

            {/* Rune */}
            <div>
                <label>Rune: </label>
                <select value={rune} onChange={(e) => setRune(Number(e.target.value))}>
                    {[0,1,2,3,4,5,6].map((v) => (
                        <option key={v} value={v}>{v}%</option>
                    ))}
                </select>
            </div>

            {/* Mount Equipment */}
            <div>
                <label>Mount Equipment: </label>
                <select value={mountEq} onChange={(e) => setMountEq(Number(e.target.value))}>
                    {Object.entries(mountEqAtkspd).map(([tier, val]) => (
                        <option key={tier} value={val}>{tier}</option>
                    ))}
                </select>
            </div>

            {/* Result */}
            <div className="result-panel-atkspd">
                <h2 className="main-result">
                    Attack Speed: <span className="result-value">{atkspd ? atkspd : "--"}</span>
                </h2>

                <div className="optional-result">
                    <span className="optional-label">
                    Atkspd Required for {targetAtkspd}:
                    </span>{" "}
                    <span
                    className={
                        gearRequired === null
                        ? "gear-neutral"
                        : gearRequired > 0
                        ? "gear-add"
                        : gearRequired < 0
                        ? "gear-remove"
                        : "gear-balanced"
                    }
                    >
                    {gearRequired === null
                        ? "--"
                        : gearRequired > 0
                        ? `Add ${gearRequired}%`
                        : gearRequired < 0
                        ? `Remove ${Math.abs(gearRequired)}%`
                        : "Perfectly balanced"}
                    </span>
                </div>
            </div>
        </div>
    ); 
}

export default AtkspdCalc;
