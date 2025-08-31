import React, { useState, useEffect } from 'react';
import getImageUrl from './utils/getImageUrl';

import { gearLines, gearValuesByType } from './data/gearLines';
import { weaponLines, weaponValuesByType } from './data/weaponLines';
import { DefSpecialLines, DefChaosValues, DefAbyssValues,
         HpSpecialLines, HpChaosValues, HpAbyssValues,
         HelmBeltSpecialLines, HelmBeltChaosValues, HelmBeltAbyssValues,
         WeaponSpecialLines, WeaponChaosValues, WeaponAbyssValues } from './data/specialLines';
import { runeLines, runeValues } from './data/runeLines';
import { WB_TYPES, FIXED_WB_LINES, LINE2_MAPS, wbLineValues } from './data/specialWeapons';
import { chaosUniqueLines, chaosUniqueLineValues,
         abyssUniqueLines, abyssUniqueLineValues, } from './data/uniqueGears';

function EquipmentModal({ gearName, onClose, onSave, saveData, saveGearData, selectedClass }) {

    const gearLineAmounts = {
        golden: 3,
        ancient: 3,
        hell: 3,
        primal: 3,
        original: 4,
        chaos: 4,
        "chaos unique": 4,
        abyss: 4,
        "abyss unique": 4,
        wb: 4,
        twb: 5,
        vwb: 5,
    };


    const [type, setType] = useState(saveData?.type || '');
    const [wbSubType, setWbSubType] = useState(saveData?.wbSubType || '');
    const [vwbSubType, setVwbSubType] = useState(saveData?.vwbSubType || '');
    const [uniqueSubType, setUniqueSubType] = useState(saveData?.uniqueSubType || '');
    const [runeEffect, setRuneEffect] = useState(saveData?.runeEffect || '');
    const [runeValue, setRuneValue] = useState(saveData?.runeValue || '');
    const [specialLine, setSpecialLine] = useState(saveData?.specialLine || '');
    const [specialLineValue, setSpecialLineValue] = useState(saveData?.specialLineValue || '');
    const [uniqueLine, setUniqueLine] = useState(saveData?.uniqueLine || '');
    const [uniqueLineValue, setUniqueLineValue] = useState(saveData?.uniqueLineValue || '');
   
    const [lines, setLines] = useState(saveData?.lines || [
        { line: "", value: "" },
        { line: "", value: "" },
        { line: "", value: "" },
        { line: "", value: "" },
        { line: "", value: "" },
    ]);

    useEffect(() => {
        if (!saveData) return;

        setType(saveData.type || '');
        setRuneEffect(saveData.runeEffect || '');
        setRuneValue(saveData.runeValue || '');
        setSpecialLine(saveData.specialLine || '');
        setSpecialLineValue(saveData.specialLineValue || '');
        setUniqueSubType(saveData.uniqueSubType || '');
        setLines(saveData.lines || [
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
            ]);

    }, [saveData]);


    let typeOptions = ['ancient', 'primal', 'original', 'chaos', 'chaos unique', 'abyss', 'abyss unique'];
    if (gearName === 'Helmet') 
    {
        typeOptions = ['ancient', 'primal', 'hell', 'original', 'chaos', 'chaos unique', 'abyss', 'abyss unique'];
    } 
    else if (gearName === 'Belt') 
    {
        typeOptions = ['golden', 'hell', 'original', 'chaos', 'chaos unique', 'abyss', 'abyss unique'];
    } 
    else if (gearName === 'Weapon')
    {
        typeOptions = ['ancient', 'primal', 'original', 'chaos', 'wb', 'twb', 'vwb', 'abyss'];
    }

    const hasUnique = Object.values(saveGearData || {}).some(
        gear => gear?.type === "chaos unique" || gear?.type === "abyss unique"
    );

    if (hasUnique)
    {
        typeOptions = typeOptions.filter(t => t !== "chaos unique" && t !== "abyss unique");
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
        try {
            let fileName = "";

            if ((type === 'wb' || type === 'twb') && gearName === 'Weapon') 
            {
                fileName = `${type}${wbSubType}${gearName}${selectedClass}.png`;
            } 
            else if ((type === 'vwb') && gearName === 'Weapon') 
            {
                fileName = `${type}${vwbSubType}${gearName}${selectedClass}.png`;
            } 
            else if (type === 'chaos unique' || type === 'abyss unique')
            {
                fileName = `${type}${uniqueSubType}${gearName}.png`;
            }
            else if (gearName === 'Weapon') 
            {
                fileName = `${type}${gearName}${selectedClass}.png`;
            } 
            else 
            {
                fileName = `${type}${gearName}.png`;
            }

            imageSrc = getImageUrl(fileName);
        } catch {
            imageSrc = '';
        }
    }


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
        if (specialLineValues && specialLineValues.length > 0) 
        {
            setSpecialLineValue(specialLineValues[0]);
        } 
        else 
        {
            setSpecialLineValue('');
        }
    }, [specialLine, specialLineValues]);

    /* 
        Adjust the number of lines based on the gear type
    */
    useEffect(() => {
        if (!type) return;

        const maxLines = gearLineAmounts[type] || 5;

        setLines(prev => {
            // Keep only the first maxLines, fill missing with empty objects
            const newLines = prev.slice(0, maxLines);
            while (newLines.length < maxLines) {
                newLines.push({ line: "", value: "" });
            }
            return newLines;
        });
    }, [type]);


    /*
        auto complete the unique line based on the selected unique gear and type
    */
    useEffect( () => {
        if (type === "chaos unique" && uniqueSubType)
        {
            const line = chaosUniqueLines[gearName]?.[uniqueSubType] || "";
            setUniqueLine(line);

            const value = chaosUniqueLineValues[uniqueSubType];
        }

        else if (type === "abyss unique" && uniqueSubType)
        {
            const line = abyssUniqueLines[gearName]?.[uniqueSubType] || "";
            setUniqueLine(line);

            const value = abyssUniqueLineValues[uniqueSubType];
        }

        else
        {
            setUniqueLine("");
            setUniqueLineValue("")
        }
    }, [type, uniqueSubType, gearName])

    /* 
        Auto select the fixed line for WB weapons
    */
    useEffect(() => {
        if (!gearName || gearName !== 'Weapon' || !WB_TYPES.includes(type)) return;

        const maxLines = gearLineAmounts[type] || 5;

        const newLines = [];

        for (let i = 0; i < maxLines; i++) {
            let lineText = "";

            const subtype = type === 'vwb' ? vwbSubType : wbSubType;

            if (i === 1) {
                lineText = LINE2_MAPS[selectedClass]?.[type]?.[subtype] || "";
            } else if (i <= 3 || (i === 4 && maxLines === 5)) {
                lineText = FIXED_WB_LINES[i + 1] || "";
            }

            if ((type === 'twb' || type === 'vwb') && i === 4) {
                lineText = "Critical Hit Damage";
            }

            newLines.push({ line: lineText, value: "" });
        }

        setLines(newLines);
    }, [gearName, type, wbSubType, vwbSubType, selectedClass]);

    /*
        Helper function to generate value ranges for gear values
    */
    function getGearValues(lineName, type) {
        if (!lineName || !type) return [];

        // Unique line value dropdown (only for the unique line itself)
        if ((type === "chaos unique" || type === "abyss unique") && lineName === uniqueLine) {
            const valueSource = type === "chaos unique" ? chaosUniqueLineValues : abyssUniqueLineValues;
            const values = valueSource[uniqueSubType];
            if (!values) return [];
            if (values.length === 1 && values[0] !== null) {
                return values;
            }
            const [min, max] = values;
            if (min !== undefined && max !== undefined) {
                return Array.from({ length: max - min + 1 }, (_, i) => min + i);
            }
            return [];
        }

        if (type === "chaos unique") {
            const [min, max] = gearValuesByType.chaos[lineName] || [];
            if (min !== undefined && max !== undefined) {
                return Array.from({ length: max - min + 1 }, (_, i) => min + i);
            }
            return [];
        }

        // For abyss unique, use abyss normal line values
        if (type === "abyss unique") {
            const [min, max] = gearValuesByType.abyss[lineName] || [];
            if (min !== undefined && max !== undefined) {
                return Array.from({ length: max - min + 1 }, (_, i) => min + i);
            }
            return [];
        }

        // WB/TWB/VWB weapons
        if (gearName === "Weapon" && WB_TYPES.includes(type)) {
            const subtype = type === 'vwb' ? vwbSubType : wbSubType;
            const wbTypeObj = wbLineValues[type]?.[subtype]; 

            if (wbTypeObj) {
                // Fixed lines
                if (wbTypeObj.fixed?.[lineName]) {
                    const [min, max] = wbTypeObj.fixed[lineName];
                    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
                }

                // Class-specific lines
                if (wbTypeObj.classes?.[selectedClass]?.[lineName]) {
                    const [min, max] = wbTypeObj.classes[selectedClass][lineName];
                    return Array.from({ length: max - min + 1 }, (_, i) => min + i);
                }
            }
            return [];
        }

        // Normal gear (all other cases)
        const valueSource = gearName === "Weapon" ? weaponValuesByType[type] : gearValuesByType[type];
        const [min, max] = valueSource?.[lineName] || [];
        if (min !== undefined && max !== undefined) {
            return Array.from({ length: max - min + 1 }, (_, i) => min + i);
        }
        return [];
    }


    /*
        Helper function to generate value ranges for unique line values
    */
    function getUniqueLineValues(type, uniqueSubType) {
        if (!uniqueSubType) return [];

        let values;

        if (type === "chaos unique") 
        {
            values = chaosUniqueLineValues[uniqueSubType];
        } 
        else if (type === "abyss unique") 
        {
            values = abyssUniqueLineValues[uniqueSubType];
        }

        if (!values) return [];

        if (values.length === 2)
        {
            const [min, max] = values;
            return Array.from({ length: max - min + 1} , (_, i) => min + i); 
        }

        return values || [];
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

        if ((type === 'chaos' || type === 'abyss') && (!specialLine))
        {
            alert(`Please choose the special lines before saving.`);
            return;
        }

        if ((type === "chaos unique" || type === "abyss unique") && (!uniqueSubType || !uniqueLine || !uniqueLineValue))
        {
            alert(`Please choose the unique line value before saving.`);
            return;
        }

        onSave({
            type,
            wbSubType,
            vwbSubType,
            runeEffect,
            runeValue,
            specialLine,
            specialLineValue,
            uniqueSubType,
            uniqueLine,
            uniqueLineValue,
            lines,
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
                            <img src={imageSrc} alt="gear" />
                        ) : (
                            <span>No image</span>
                        )}
                    </div>

                    {/* Gear Info */}
                    <div className="modal-gear-info">
                        <div className="modal-type-subtype-container">
                            <label htmlFor="type-select">Type: </label>
                            <select
                                id="type-select"
                                value={type}
                                onChange={e => setType(e.target.value)}
                            >
                                <option value="">Select type</option>
                                {typeOptions.map(opt => (
                                    <option key={opt} value={opt}>{opt}</option>
                                ))}
                            </select>

                            {/* WB / TWB Subtype */}
                            {(type === "wb" || type === "twb") && (
                                <div className="modal-row" style={{ marginBottom: '0'}}>
                                    <label htmlFor="wb-subtype-select">Subtype:</label>
                                    <select
                                        id="wb-subtype-select"
                                        value={wbSubType}
                                        onChange={e => setWbSubType(e.target.value)}
                                    >
                                        <option value="">subtype</option>
                                        <option value="Venom">Venom</option>
                                        <option value="Darkness">Darkness</option>
                                    </select>
                                </div>
                            )}

                            {/* VWB Subtype */}
                            {type === "vwb" && (
                                <div>
                                    <label htmlFor="vwb-subtype-select">Subtype:</label>
                                    <select
                                        id="vwb-subtype-select"
                                        value={vwbSubType}
                                        onChange={e => setVwbSubType(e.target.value)}
                                    >
                                        <option value="">subtype</option>
                                        <option value="Glacial">Glacial</option>
                                        <option value="Blaze">Blaze</option>
                                    </select>
                                </div>
                            )}

                            {/* Chaos/Abyss Unique Subtype */}
                            {(type === "chaos unique" || type === "abyss unique") && (
                                <div>
                                    <label htmlFor="unique-subtype-select">Gear:</label>
                                    <select
                                        id="unique-subtype-select"
                                        value={uniqueSubType}
                                        onChange={e => setUniqueSubType(e.target.value)}
                                    >
                                        <option value="">gear</option>
                                        {Object.keys(
                                            type === "chaos unique"
                                                ? chaosUniqueLines[gearName] || {}
                                                : abyssUniqueLines[gearName] || {}
                                        ).map(subName => (
                                            <option key={subName} value={subName}>
                                                {subName}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* Rune Selectors */}
                        <div className="modal-rune-selectors">
                            <label htmlFor="rune-line-select">Rune: </label>
                            <select
                                id="rune-line-select"
                                value={runeEffect}
                                onChange={e => setRuneEffect(e.target.value)}
                            >
                                <option value="">Effect</option>
                                {avaliableRunes.map(line => (
                                    <option key={line} value={line}>{line}</option>
                                ))}
                            </select>

                            <select
                                id="rune-value-select"
                                value={runeValue}
                                onChange={e => setRuneValue(e.target.value)}
                            >
                                <option value="">Value</option>
                                {runeEffect && getRuneValues(runeEffect).map(val => (
                                    <option key={val} value={val}>{val}%</option>
                                ))}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Stats Section */}
                <div className="modal-stats-container">
                    {/* Special Line (Chaos/Abyss only) */}
                    {(type === "chaos" || type === "abyss") && (
                        <div className="modal-row">
                            <label htmlFor="special-line">Special Line:</label>
                            <select
                                id="special-line"
                                value={specialLine}
                                onChange={e => setSpecialLine(e.target.value)}
                            >
                                <option value="">Select Special Line</option>
                                {(specialLineOption || []).map((line, index) => (
                                    <option key={index} value={line}>{line}</option>
                                ))}
                            </select>

                            <select
                                id="special-line-value"
                                value={specialLineValue}
                                onChange={e => setSpecialLineValue(e.target.value)}
                            >
                                <option value="">Value</option>
                                {(specialLineValues || []).map((value, index) => (
                                    <option key={index} value={value}>{value}%</option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Unique Line (Chaos Unique / Abyss Unique only) */}
                    {(type === "chaos unique" || type === "abyss unique") && uniqueLine && (
                        <div className="modal-row">
                            <label htmlFor="unique-line">Unique:</label>
                            <select 
                                id="unique-line" 
                                value={uniqueLine}
                                onChange={() => {}}
                            >
                                <option value={uniqueLine}>{uniqueLine}</option>
                            </select>

                            {/* Value Dropdown */}
                            <select
                                id="unique-line-value"
                                value={uniqueLineValue}
                                onChange={e => setUniqueLineValue(e.target.value)}
                            >
                                <option value="">Value</option>
                                {getUniqueLineValues(type, uniqueSubType).map((val, idx) => (
                                    <option key={idx} value={val}>
                                        {val === null ? "-" : val}
                                    </option>
                                ))}
                            </select>
                        </div>
                    )}

                    {/* Attribute Lines */}
                    {lines.slice(0, gearLineAmounts[type]).map((entry, index) => {
                        const isFixedLine =
                            gearName === "Weapon" &&
                            WB_TYPES.includes(type) &&
                            [0, 1, 2, 3, 4].includes(index);

                        return (
                            <div className="modal-row" key={index}>
                                <label htmlFor={`line-${index}`}>Line {index + 1}:</label>
                                <select
                                    id={`line-${index}`}
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
                                    {entry.line && isFixedLine ? (
                                        <option value={entry.line}>{entry.line}</option>
                                    ) : (
                                        <>
                                            <option value="">Select Line</option>
                                            {(gearName === "Weapon" ? weaponLines : gearLines)
                                                .filter(line => {
                                                    const isAlreadySelected = lines.some(
                                                        (l, i) => i !== index && l.line === line
                                                    );
                                                    const specialWeaponSelected = lines.some(
                                                        (l, i) =>
                                                            i !== index &&
                                                            specialWeaponLine.includes(l.line)
                                                    );
                                                    const isSpecialLine = specialWeaponLine.includes(line);
                                                    return (
                                                        !isAlreadySelected &&
                                                        !(specialWeaponSelected &&
                                                            isSpecialLine &&
                                                            line !== entry.line)
                                                    );
                                                })
                                                .map((line, idx) => (
                                                    <option key={idx} value={line}>
                                                        {line}
                                                    </option>
                                                ))}
                                        </>
                                    )}
                                </select>

                                <select
                                    id={`line-${index}-value`}
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
                                    {getGearValues(entry.line, type).map((val, idx) => (
                                        <option key={idx} value={val}>{val}%</option>
                                    ))}
                                </select>
                            </div>
                        );
                    })}
                </div>

                {/* Save Button */}
                <div className="modal-row">
                    <button className="modal-save-btn" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EquipmentModal;
