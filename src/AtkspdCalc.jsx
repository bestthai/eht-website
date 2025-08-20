import React, {useState, useEffect} from 'react'

import { weaponAtkspd } from './data/atkspd';


function AtkspdCalc() 
{

    const classes = ["Berserker" , "Paladin", "Sorcerer", "Ranger"]
    const weaponTypes = ["Ancient", "Primal", "Original", "Chaos", "Abyss", "WB", "VWB"];

    const [selectedClass, setSelectedClass] = useState("");
    const [weaponType, setWeaponType] = useState("");

    const [guildBuff, setGuildBuff] = useState("");

    const [atkspd, setAtkspd] = useState(null);

    useEffect(() => {
        if (selectedClass && weaponType)
        {
            const atk = weaponAtkspd[weaponType]?.[selectedClass] ?? null;
            setAtkspd(atk);
        }

        else {
            setAtkspd(null);
        }
    }, [selectedClass, weaponType]);

    return (
        <div className="atkspd-calc-container">
            <h1 className="atkspd-calc-title">Attack Speed Calculator</h1>

            {/* <select 
                className="class-atkspd-dropdown"
                value={selectedClass}
                onChange={(e) => setSelectedClass(e.target.value)}>
                {classes.map((cls, index) => (
                    <option key={index} value={cls}>{cls}</option>
                ))}
            </select>

            <select 
                className='weapon-type-dropdown'
                value={weaponType}
                onChange={(e) => setWeaponType(e.target.value)}
            >
                {weaponTypes.map((type, index) => (
                    <option key={index} value={type}>
                        {type}
                    </option>
                ))}
            </select>

            <select
                className='guild-buff-dropdown'
                value={guildBuff}
                onChange={(e) => setGuildBuff(Number(e.target.value))}>
                    <option value={0}></option>
                    {[1,2,3,4,5].map((buff) => (
                        <option key={buff} value={buff}>{buff}%</option>
                    ))}
            </select>

            {atkspd && (
                <div className='atkspd-result'>
                    <p>Base Attack Speed: <strong>{atkspd.toFixed(2)}</strong></p>
                    <p>
                    Required Atk Speed % to reach <strong>0.25</strong>:{" "}
                    <strong>{(((atkspd / 0.25) - 1) * 10).toFixed(2)}%</strong>
                    </p>
                </div>
            )} */}
        </div>
    );
}

export default AtkspdCalc;