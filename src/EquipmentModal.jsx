import React, { useState, useEffect } from 'react';
import getImageUrl from './utils/getImageUrl';

import { gearLines, gearValuesByType } from './data/gearLines';
import { weaponLines, weaponValuesByType } from './data/weaponLines';
import { DefSpecialLines, DefChaosValues, DefAbyssValues,
         HpSpecialLines, HpChaosValues, HpAbyssValues,
         HelmBeltSpecialLines, HelmBeltChaosValues, HelmBeltAbyssValues,
         WeaponSpecialLines, WeaponChaosValues, WeaponAbyssValues
       } from './data/specialLines';
import { runeLines, runeValues } from './data/runeLines';

function EquipmentModal({ gearName, onClose, onSave, saveData, saveGearData, selectedClass }) {

    const gearLineAmounts = {
        golden: 3,
        ancient: 3,
        hell: 3,
        primal: 3,
        original: 4,
        chaos: 4,
        abyss: 4,
    };


    const [type, setType] = useState(saveData?.type || '');
    const [runeEffect, setRuneEffect] = useState(saveData?.runeEffect || '');
    const [runeValue, setRuneValue] = useState(saveData?.runeValue || '');

    const [specialLine, setSpecialLine] = useState(saveData?.specialLine || '');
    const [specialLineValue, setSpecialLineValue] = useState(saveData?.specialLineValue || '');
   
    const [lines, setLines] = useState(saveData?.lines || [
        { line: "", value: "" },
        { line: "", value: "" },
        { line: "", value: "" },
        { line: "", value: "" },
    ]);

    useEffect(() => {
        if (saveData) {
            setType(saveData.type || '');
            setRuneEffect(saveData.runeEffect || '');
            setRuneValue(saveData.runeValue || '');
            setSpecialLine(saveData.specialLine || '');
            setSpecialLineValue(saveData.specialLineValue || '');
            setLines(saveData.lines || [
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
            ]);
        }

        console.log(saveData);
    }, [saveData]);


    let typeOptions = ['ancient', 'primal', 'original', 'chaos', 'abyss'];
    if (gearName === 'Helmet') {
        typeOptions = ['ancient', 'primal', 'hell', 'original', 'chaos', 'abyss'];
    } else if (gearName === 'Belt') {
        typeOptions = ['golden', 'hell', 'original', 'chaos', 'abyss'];
    } 

    const DefGears = ['Chestplate', 'Glove', 'Boot']
    const HpGears = ['Ring', 'Necklace'];
    const HelmBeltGears = ['Helmet', 'Belt'];
    const WeaponGears = ['Weapon'];

    const specialWeaponLine = [ 
        "Chance to cast level 1 Evasion",
        "Chance to cast level 1 Barrier",
        "Chance to cast level 1 Curse",
        "Chance to transform into Archangel",
        "Chance to transform into Demon Lord",
        "Additional Damage"
    ];


    let imageSrc = '';
    if (type && gearName) 
    {
        try
        {

            if (type && gearName === 'Weapon')
            {
                const fileName = `${type}${gearName}${selectedClass}.png`;
                imageSrc = getImageUrl(fileName)
            }

            else if (type)
            {
                const fileName = `${type}${gearName}.png`;
                imageSrc = getImageUrl(fileName);
            }
        }

        catch
        {
            imageSrc = '';
        }
    };

    /* 
       Auto complete the special line value based on the selected special line and type. 
    */
    const [specialLineOption, setSpecialLineOption] = useState([]);
    const [specialLineValues, setSpecialLineValues] = useState([]);

    useEffect(() => {
        if (type === 'chaos' || type === 'abyss')
        {
            if (DefGears.includes(gearName))
            {
                setSpecialLineOption(DefSpecialLines);
                setSpecialLineValues(type === 'chaos' ? DefChaosValues[specialLine] : DefAbyssValues[specialLine]);
            }

            else if (HpGears.includes(gearName))
            {
                setSpecialLineOption(HpSpecialLines);
                setSpecialLineValues(type === 'chaos' ? HpChaosValues[specialLine] : HpAbyssValues[specialLine]);
            }

            else if (HelmBeltGears.includes(gearName))
            {
                setSpecialLineOption(HelmBeltSpecialLines);
                setSpecialLineValues(type === 'chaos' ? HelmBeltChaosValues[specialLine] : HelmBeltAbyssValues[specialLine]);
            }

            else if (WeaponGears.includes(gearName))
            {
                setSpecialLineOption(WeaponSpecialLines);
                setSpecialLineValues(type === 'chaos' ? WeaponChaosValues[specialLine] : WeaponAbyssValues[specialLine]);
            }

            else {
                setSpecialLineOption([]);
                setSpecialLineValues([]);
            }
        }
    }, [gearName, type, specialLine]);

    useEffect(() => {
        if ((specialLineValues || []).length > 0)
        {
            setSpecialLineValue(prev => prev || specialLineValues[0]);
        }
        else {
            setSpecialLineValue('');
        }
    }, [specialLineValues]);

    /* 
       Auto complete each normal line's value based on its min value.
    */
    useEffect(() => {
        setLines(prev =>
            prev.map(entry => {
                if (entry.line && type) {

                    const validValues = getGearValues(entry.line);

                    if (validValues.length && !validValues.includes(entry.value))
                    {
                        return { ...entry, value: entry.value || validValues[0] };
                    }
                }
                return entry;
            })
        );
    }, [lines.map(l => l.line).join(","), type, gearName]);

    
    /*
        Helper function to generate value ranges for gear values
    */
    function getGearValues(lineName) {
        if (!lineName || !type) return [];

        const valueSource = gearName === "Weapon" ? weaponValuesByType[type] : gearValuesByType[type];

        const [min, max] = valueSource?.[lineName] || [];
        return min !== undefined && max !== undefined
            ? Array.from({ length: max - min + 1 }, (_, i) => min + i)
            : [];
    }

    /* 
        Function to check for rune duplication between all of the gear
    */
    const selectedRunes = Object.entries(saveGearData || {})
        .filter(([gear, data]) => gear !== gearName && data?.runeEffect)
        .map(([gear, data]) => data.runeEffect);

    const avaliableRunes = runeLines.filter(r => !selectedRunes.includes(r));

    /* 
        Helper function to generate value ranges for rune values
    */
    function getRuneValues(runeName)
    {
        if (!runeName) return;

        const [min, max, step] = runeValues[runeName] || [];
        if (min === undefined || max === undefined || step === undefined) return [];

        return Array.from( { length: Math.floor((max - min) / step) + 1}, (_, i) => min + i * step);
    }


    /*
        Function to check if all lines have been passed and save the value
    */
    function handleSave()
    {
        const requiredLines = gearLineAmounts[type];
        const filledLines = lines.filter(line => line.line && line.value);

        if (runeEffect && (!runeValue))
        {
            alert(`Please choose the rune value before saving`);
            return;
        }

        if (filledLines.length < requiredLines) {
            alert(`Please choose all ${requiredLines} lines before saving.`);
            return;
        }

        if (!lines.value)

        if ((type === 'chaos' || type === 'abyss') && (!specialLine))
        {
            alert(`Please choose the special lines before saving.`);
            return;
        }

        onSave({
            type,
            runeEffect,
            runeValue,
            specialLine,
            specialLineValue,
            lines
        });

        onClose();
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={event => event.stopPropagation()}>
                <button className="modal-back-btn" onClick={onClose}>
                    Back
                </button>
                <h1 className="modal-title">{gearName}'s Equipment</h1>
                <div className="modal-first-squares-container">
                    <div className="modal-gear-image">
                        {imageSrc ? (
                            <img src={imageSrc} alt={`${type}${gearName}`} ></img>
                        ) : (
                            <span>No image</span>
                        )}
                    </div>
                    <div className="modal-gear-info">
                        <div>
                            <label htmlFor='type-select'>Type: </label>
                            <select
                                id="type-select"
                                value={type}
                                onChange={e => setType(e.target.value)}
                            >
                                <option value="" style={{ textAlign: 'center'}}>Select type</option>
                                {typeOptions.map(opt => (
                                    <option key={opt} value={opt} style={{ textAlign: 'center'}}>{opt}</option>
                                ))}
                            </select>
                        </div>

                        <div className="modal-rune-selectors">
                            <label htmlFor='rune-line-select'>Rune: </label>
                            <select
                                id="rune-line-select"
                                className="modal-rune-effect-select"
                                value={runeEffect}
                                onChange={e => setRuneEffect(e.target.value)}
                            >
                                <option value="" style={{ textAlign: 'center'}}>Effect</option>
                                {avaliableRunes.map(line => (
                                    <option key={line} value={line}>{line}</option>
                                ))}
                            </select>
                        
                            <div>
                                <label htmlFor='rune-value-select'></label>
                                <select
                                    id="rune-value-select"
                                    className="modal-rune-value-select"
                                    value={runeValue}
                                    onChange={e => setRuneValue(e.target.value)}
                                >
                                    <option value="" style={{ textAlign: 'center'}}>Value</option>
                                    {runeEffect && getRuneValues(runeEffect).map(val => (
                                        <option key={val} value={val}>{val}%</option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='modal-stats-container'>
                    <div className='modal-stat'>

                        {/* Special Line Dropdown */}
                        {(type === 'chaos' || type === 'abyss') && (
                        <div className="modal-row">
                            <label htmlFor='special-line'>Special Line:</label>
                            <select
                            id='special-line'
                            className="modal-special-line-select"
                            value={specialLine}
                            onChange={e => setSpecialLine(e.target.value)}>
                            <option value="">Select Special Line</option>
                            {(specialLineOption || []).map((line, index) => (
                                <option key={index} value={line}>{line}</option>
                            ))}
                            </select>

                            <label htmlFor='special-line-value'></label>
                            <select
                            id='special-line-value'
                            className="modal-special-line-value"
                            value={specialLineValue}>
                            <option value="">Value</option>
                            {(specialLineValues || []).map((value, index) => (
                                <option key={index} value={value}>{value}%</option>
                            ))}                                        
                            </select>
                        </div>
                        )}

                        {/* Attribute Lines */}
                        {lines.slice(0, gearLineAmounts[type]).map((entry, index) => (
                        <div className="modal-row" key={index}>
                            <label htmlFor={`line-${index}`}>Line {index + 1}:</label>
                            <select
                            id={`line-${index}`}
                            className='modal-line-select'
                            value={entry.line}
                            onChange={e => {
                                const newLine = e.target.value;
                                setLines(prev =>
                                prev.map((l, i) =>
                                    i === index ? { line: newLine, value: "" } : l
                                )
                                );
                            }}
                            >
                            <option value="">Select Line</option>
                            {(gearName === "Weapon" ? weaponLines : gearLines)
                                .filter(line => {
                                    const isAlreadySelected = lines.some((l,i) => i !== index && l.line === line);
                                    const specialWeaponSelected = lines.some((l,i) => i !== index && specialWeaponLine.includes(l.line));
                                    const isSpecialLine = specialWeaponLine.includes(line);

                                    return !isAlreadySelected && !(specialWeaponSelected && isSpecialLine && line !== entry.line);
                                }).map((line, idx) => (
                                    <option key={idx} value={line}>{line}</option>
                                ))
                            }
                            </select>

                            <label htmlFor={`line-${index}-value`}></label>
                            <select
                            id={`line-${index}-value`}
                            className='modal-value-select'
                            value={entry.value}
                            onChange={e => {
                                const newValue = e.target.value;
                                setLines(prev =>
                                prev.map((l, i) =>
                                    i === index ? { ...l, value: newValue } : l
                                )
                                );
                            }}
                            disabled={!entry.line}
                            >
                            <option value="">Value</option>
                            {getGearValues(entry.line).map((val, idx) => (
                                <option key={idx} value={val}>{val}%</option>
                            ))}
                            </select>
                        </div>
                        ))}
                    </div>
                    </div>


                <div className="modal-row">
                    <button 
                        className="modal-save-btn"
                        onClick={handleSave}
                        >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EquipmentModal;
