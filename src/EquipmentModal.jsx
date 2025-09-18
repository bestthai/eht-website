import React, { useState, useEffect } from 'react';
import getImageUrl from './utils/getImageUrl';

import { gearLines, gearValuesByType } from './data/gearLines';
import { weaponLines, weaponValuesByType } from './data/weaponLines';
import { DefSpecialLines, DefChaosValues, DefAbyssValues,
         HpSpecialLines, HpChaosValues, HpAbyssValues,
         HelmBeltSpecialLines, HelmBeltChaosValues, HelmBeltAbyssValues,
         WeaponSpecialLines, WeaponChaosValues, WeaponAbyssValues } from './data/specialLines';
import { runeLines, runeValues } from './data/runeLines';
import { WB_TYPES, FIXED_WB_LINES, LINE2_MAPS, wbLineValues } from './data/wbWeapons';
import { chaosUniqueLines, chaosUniqueLineValues, chaosUniqueFixedLine, chaosUniqueFixedLineValue,
         abyssUniqueLines, abyssUniqueLineValues, abyssUniqueFixedLine, abyssUniqueFixedLineValue,} from './data/uniqueGears';
import { PVP_TYPES, 
         FIXED_PVP_DPS_WEAPON_LINES, FIXED_PVP_TANK_WEAPON_LINES, LINE2_WEAPON_MAPS, 
         FIXED_PVP_DPS_WEAPON_LINE_VALUE, FIXED_PVP_TANK_WEAPON_LINE_VALUE,
         FIXED_PVP_TANK_HELMET_LINE_VALUE, FIXED_PVP_DPS_HELMET_LINE_VALUE,
         pvpNoPercent } from './data/pvpLines';

function EquipmentModal({ gearName, onClose, onSave, saveData, saveGearData, selectedClass }) {

    const gearLineAmounts = {
        golden: 3,
        ancient: 3,
        hell: 3,
        primal: 3,
        "2v2": 3,
        original: 4,
        chaos: 4,
        "chaos unique": 4,
        "champion": 4,
        abyss: 4,
        "abyss unique": 4,
        wb: 4,
        "challenger": 5,
        twb: 5,
        vwb: 5,
    };


    const [type, setType] = useState(saveData?.type || '');
    const [wbSubType, setWbSubType] = useState(saveData?.wbSubType || '');
    const [vwbSubType, setVwbSubType] = useState(saveData?.vwbSubType || '');
    const [uniqueSubType, setUniqueSubType] = useState(saveData?.uniqueSubType || '');
    const [pvpWeaponSubType, setpvpWeaponSubType] = useState(saveData?.pvpWeaponSubType || '');
    const [pvpHelmetSubType, setPvpHelmetSubType] = useState(saveData?.pvpHelmetSubType || '');
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
        setpvpWeaponSubType(saveData.pvpWeaponSubType || '');
        setPvpHelmetSubType(saveData.pvpHelmetSubType || '');
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
        typeOptions = ['ancient', 'primal', 'hell', 'original', 'chaos', 'chaos unique', 'abyss', 'abyss unique', '2v2', 'champion', 'challenger',];
    } 
    else if (gearName === 'Belt') 
    {
        typeOptions = ['golden', 'hell', 'original', 'chaos', 'chaos unique', 'abyss', 'abyss unique'];
    } 
    else if (gearName === 'Weapon')
    {
        typeOptions = ['ancient', 'primal', 'original', 'chaos', 'wb', 'twb', 'vwb', 'abyss', '2v2', 'champion', 'challenger',];
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
            else if ((PVP_TYPES.includes(type)) && gearName === 'Weapon')
            {
                fileName = `${type}${pvpWeaponSubType}${gearName}${selectedClass}.png`;
            }
            else if ((PVP_TYPES.includes(type)) && gearName === 'Helmet')
            {
                fileName = `${type}${pvpHelmetSubType}${gearName}.png`;
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
        Auto reset line when changing type
    */
    const [prevType, setPrevType] = useState(type);
    useEffect(() => {
        if (prevType !== type) {
            if (!["chaos", "abyss"].includes(type)) {
                setSpecialLine("");
                setSpecialLineValue("");
            }
            if (!["chaos unique", "abyss unique"].includes(type)) {
                setUniqueSubType("");
                setUniqueLine("");
                setUniqueLineValue("");
            }
            if (!WB_TYPES.includes(type)) {
                setWbSubType("");
                setVwbSubType("");
                setLines([
                    { line: "", value: "" },
                    { line: "", value: "" },
                    { line: "", value: "" },
                    { line: "", value: "" },
                    { line: "", value: "" },
                ]);
            }
            if (!PVP_TYPES.includes(type)) {
                setpvpWeaponSubType("");
                setPvpHelmetSubType("");
                setLines([
                    { line: "", value: "" },
                    { line: "", value: "" },
                    { line: "", value: "" },
                    { line: "", value: "" },
                    { line: "", value: "" },
                ]);
            }
            setPrevType(type);
        }
    }, [type, prevType]);

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
    }, [type, gearName]);

    /*
        Autoset the unique and fixed line
    */
    useEffect(() => {
        let fixedLine = "";
        let fixedLineValues = [];
        let fixedLineObj = {};
        let fixedLineValueObj = {};

        // set the unique fixed line if they have one
        if (type === "chaos unique" && uniqueSubType)
        {
            fixedLineObj = chaosUniqueFixedLine[uniqueSubType];
            fixedLineValueObj = chaosUniqueFixedLineValue[uniqueSubType];
        } 
        else if (type === "abyss unique" && uniqueSubType)
        {
            fixedLineObj = abyssUniqueFixedLine[uniqueSubType];
            fixedLineValueObj = abyssUniqueFixedLineValue[uniqueSubType];
        }

        if (fixedLineObj && fixedLineObj[0])
        {
            fixedLine = fixedLineObj[0];
            fixedLineValues = fixedLineValueObj || [];
        }

        if (type === "chaos unique" && uniqueSubType)
        {
            const line = chaosUniqueLines[gearName]?.[uniqueSubType];
            setUniqueLine(line);
        } 
        else if (type === "abyss unique" && uniqueSubType)
        {
            const line = abyssUniqueLines[gearName]?.[uniqueSubType];
            setUniqueLine(line);
        }
        else 
        {
            setUniqueLine("");
            setUniqueLineValue("");
        }

        setLines(prev => {
            let newLines = [...prev];

            if (fixedLine)
            {
                const [min, max] = fixedLineValues;
                const valueRange = Array.from({ length: max - min + 1 }, (_, i) => min + i);

                newLines[0] = {
                    line: fixedLine,
                    value: prev[0]?.value ? prev[0].value : valueRange,
                };
            }
            
            return newLines;
        })


    }, [type, uniqueSubType])

    /* 
        Auto select the fixed line for WB weapons
    */
    useEffect(() => {
        if (gearName === "Weapon" && WB_TYPES.includes(type) && (wbSubType || vwbSubType))
        {
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
        }

    }, [gearName, type, wbSubType, vwbSubType, selectedClass]);

    /*
        auto-set PvP weapon lines
    */
    useEffect(() => {
        if (gearName === "Weapon" && PVP_TYPES.includes(type) && pvpWeaponSubType)
        {
            const maxLines = gearLineAmounts[type] || 5;
            let newLines = [];

            const isTank = selectedClass === "Paladin" && pvpWeaponSubType === "Mahes"
            const fixedLine = isTank ? FIXED_PVP_TANK_WEAPON_LINES : FIXED_PVP_DPS_WEAPON_LINES;

            for (let i = 0; i < maxLines; i++)
            {
                let lineText = fixedLine[i + 1] || "";

                if (!isTank && i === 1)
                {
                    lineText = LINE2_WEAPON_MAPS[selectedClass]?.[type]?.[pvpWeaponSubType] || "";
                }

                const savedValue = saveData?.lines?.[i]?.value;
                const value = savedValue && savedValue.length > 0 ? savedValue : [];

                newLines.push({ line: lineText, value });
            }

            setLines(newLines);
        }

        // PvP Helmet
        if (gearName === "Helmet" && PVP_TYPES.includes(type) && pvpHelmetSubType) 
        {
            const maxLines = gearLineAmounts[type] || 5;
            let newLines = [];
            let fixedLines = [];

            // Find lines for selected subtype in either DPS or Tank
            if (type && pvpHelmetSubType) { 
                if (
                    FIXED_PVP_TANK_HELMET_LINE_VALUE[type] &&
                    FIXED_PVP_TANK_HELMET_LINE_VALUE[type][pvpHelmetSubType]
                ) {
                    fixedLines = Object.keys(
                        FIXED_PVP_TANK_HELMET_LINE_VALUE[type][pvpHelmetSubType].fixed || {}
                    );
                } else if (
                    FIXED_PVP_DPS_HELMET_LINE_VALUE[type] &&
                    FIXED_PVP_DPS_HELMET_LINE_VALUE[type][pvpHelmetSubType]
                ) {
                    fixedLines = Object.keys(
                        FIXED_PVP_DPS_HELMET_LINE_VALUE[type][pvpHelmetSubType].fixed || {}
                    );
                }
            }

            for (let i = 0; i < maxLines; i++) {
                const savedValue = saveData?.lines?.[i]?.value;
                const value = savedValue && savedValue.length > 0 ? savedValue : [];
                newLines.push({ line: fixedLines[i], value });
            }
            setLines(newLines);
        }
    }, [gearName, type, pvpWeaponSubType, selectedClass, pvpHelmetSubType]);

    /*
        Preserve the data when reopening the modal if there is saveData
    */
    useEffect(() => {
        if (gearName && saveGearData[gearName]) {
            const saved = saveGearData[gearName];

            setType(saved.type || '');
            setWbSubType(saved.wbSubType || '');
            setVwbSubType(saved.vwbSubType || '');
            setUniqueSubType(saved.uniqueSubType || '');
            setpvpWeaponSubType(saved.pvpWeaponSubType || '');
            setPvpHelmetSubType(saved.pvpHelmetSubType || '');
            setRuneEffect(saved.runeEffect || '');
            setRuneValue(saved.runeValue || '');
            setSpecialLine(saved.specialLine || '');
            setSpecialLineValue(saved.specialLineValue || '');
            setUniqueLine(saved.uniqueLine || '');
            setUniqueLineValue(saved.uniqueLineValue || '');
            setLines(saved.lines || [
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
                { line: "", value: "" },
            ]);
        }
    }, [gearName, saveGearData]);
    

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

        // PvP Weapon 
        if (gearName === "Weapon" && PVP_TYPES.includes(type))
        {
            const isTank = selectedClass === "Paladin" && pvpWeaponSubType === "Mahes"

            if (isTank)
            {
                const tankObj = FIXED_PVP_TANK_WEAPON_LINE_VALUE[type]?.Paladin?.fixed;
                if (tankObj && tankObj[lineName])
                {
                    const [min, max] = tankObj[lineName];
                    return Array.from({ length: max - min + 1}, (_, i) => min + i);
                }
            }
            else 
            {
                if (type === "2v2" && pvpWeaponSubType)
                {
                    const classObj = FIXED_PVP_DPS_WEAPON_LINE_VALUE[type]?.classes?.[selectedClass]?.[pvpWeaponSubType];
                    if (classObj?.fixed?.[lineName])
                    {
                        const [min, max] = classObj.fixed[lineName];
                        return Array.from({ length: max - min + 1}, (_, i) => min + i);
                    }
                    if (classObj?.line2?.[lineName])
                    {
                        const [min, max] = classObj.line2[lineName];
                        return Array.from({ length: max - min + 1}, (_, i) => min + i);
                    }
                }

                const fixedObj = FIXED_PVP_DPS_WEAPON_LINE_VALUE[type]?.fixed;
                if (fixedObj && fixedObj[lineName])
                {
                    const [min, max] = fixedObj[lineName];
                    return Array.from({ length: max - min + 1}, (_, i) => min + i);
                }

                const classObj = FIXED_PVP_DPS_WEAPON_LINE_VALUE[type]?.classes?.[selectedClass]?.[pvpWeaponSubType];
                if (classObj && classObj[lineName])
                {
                    const [min, max] = classObj[lineName];
                    return Array.from({ length: max - min + 1}, (_, i) => min + i);
                }
            }
            return [];
        }

        // PvP Helmet
        if (gearName === "Helmet" && PVP_TYPES.includes(type)) {
            if (type && pvpHelmetSubType) {
                let obj = FIXED_PVP_TANK_HELMET_LINE_VALUE[type]?.[pvpHelmetSubType]
                    || FIXED_PVP_DPS_HELMET_LINE_VALUE[type]?.[pvpHelmetSubType];
                if (obj && obj.fixed && obj.fixed[lineName]) {
                    const [min, max] = obj.fixed[lineName];
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

    function getAllPossibleLines(gearName)
    {
        switch (gearName)
        {
            case "Weapon":
                return weaponLines;
            default:
                return gearLines;
        }
    }

    /* 
        Function to check for rune duplication between all of the gear
    */
    const selectedRunes = Object.entries(saveGearData || {})
        .filter(([gear, data]) => gear !== gearName && data?.runeEffect)
        .map(([gear, data]) => data.runeEffect);

    const availableRunes = runeLines.filter(r => !selectedRunes.includes(r));

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
            pvpWeaponSubType,
            pvpHelmetSubType,
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
                                <div>
                                    <label htmlFor="wb-subtype-select">Subtype: </label>
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
                                    <label htmlFor="vwb-subtype-select">Subtype: </label>
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
                                    <label htmlFor="unique-subtype-select">Gear: </label>
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

                            {/* PvP Weapon Subtype */}
                            {gearName === "Weapon" && PVP_TYPES.includes(type) && (
                                <div>
                                    <label htmlFor="pvp-weapon-subtype-select">Subtype: </label>
                                    <select
                                        id="pvp-weapon-subtype-select"
                                        value={pvpWeaponSubType}
                                        onChange={e => setpvpWeaponSubType(e.target.value)}
                                    >
                                        <option value="">subtype</option>
                                        {selectedClass === "Paladin"
                                            ? Object.keys(LINE2_WEAPON_MAPS.Paladin?.[type] || {}).map(sub => (
                                                <option key={sub} value={sub}>{sub}</option>
                                            ))
                                            : Object.keys(LINE2_WEAPON_MAPS[selectedClass]?.[type] || {}).map(sub => (
                                                <option key={sub} value={sub}>{sub}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            )}

                            {/* PvP Helmet Subtype */}
                            {gearName === "Helmet" && PVP_TYPES.includes(type) && (
                                <div>
                                    <label htmlFor="pvp-helmet-subtype-select">Subtype: </label>
                                    <select
                                        id="pvp-helmet-subtype-select"
                                        value={pvpHelmetSubType}
                                        onChange={e => setPvpHelmetSubType(e.target.value)}
                                    >
                                        <option value="">subtype</option>
                                        {Object.keys(
                                            type === "2v2"
                                                ? { ...FIXED_PVP_DPS_HELMET_LINE_VALUE["2v2"], ...FIXED_PVP_TANK_HELMET_LINE_VALUE["2v2"] }
                                                : type === "champion"
                                                    ? { ...FIXED_PVP_DPS_HELMET_LINE_VALUE["champion"], ...FIXED_PVP_TANK_HELMET_LINE_VALUE["champion"] }
                                                    : type === "challenger"
                                                        ? { ...FIXED_PVP_DPS_HELMET_LINE_VALUE["challenger"], ...FIXED_PVP_TANK_HELMET_LINE_VALUE["challenger"] }
                                                        : {}
                                        ).map(sub => (
                                            <option key={sub} value={sub}>{sub}</option>
                                        ))}
                                    </select>
                                </div>
                            )}
                        </div>

                        {/* Rune Selectors */}
                        <div className="modal-rune-selectors">
                            <label htmlFor="rune-line-select">Rune: </label>
                            <select
                                className='rune-line-selector'
                                id="rune-line-select"
                                value={runeEffect}
                                onChange={e => setRuneEffect(e.target.value)}
                            >
                                <option value="">Effect</option>
                                {availableRunes.map(line => (
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
                            <label htmlFor="unique-line">Unique: </label>
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
                        const allLines = getAllPossibleLines(gearName);

                        // --- Unique Fixed Line ---
                        if ((type === "chaos unique" || type === "abyss unique") && index === 0 && uniqueSubType) {
                            const uniqueFixedLine = type === "chaos unique"
                                ? chaosUniqueFixedLine[uniqueSubType]?.[0]
                                : abyssUniqueFixedLine[uniqueSubType]?.[0];

                            const uniqueFixedValues = type === "chaos unique"
                                ? chaosUniqueFixedLineValue[uniqueSubType] || []
                                : abyssUniqueFixedLineValue[uniqueSubType] || [];

                            if (uniqueFixedLine) {
                                return (
                                    <div className="modal-row" key={index}>
                                        <label>Line 1:</label>
                                        <select value={entry.line} onChange={() => {}}>
                                            <option value={entry.line}>{entry.line}</option>
                                        </select>
                                        <select
                                            value={entry.value}
                                            onChange={e => {
                                                const newValue = e.target.value;
                                                setLines(prev =>
                                                    prev.map((l, i) =>
                                                        i === 0 ? { ...l, value: newValue } : l
                                                    )
                                                );
                                            }}
                                        >
                                            <option value="">Value</option>
                                            {uniqueFixedValues.length === 2
                                                ? Array.from({ length: uniqueFixedValues[1] - uniqueFixedValues[0] + 1 },
                                                            (_, i) => uniqueFixedValues[0] + i)
                                                    .map(val => <option key={val} value={val}>{val}%</option>)
                                                : uniqueFixedValues.map(val => <option key={val} value={val}>{val}%</option>)}
                                        </select>
                                    </div>
                                );
                            }
                        }

                        // --- WB Weapon Fixed Lines ---
                        if (gearName === "Weapon" && WB_TYPES.includes(type) && entry.line) {
                            return (
                                <div className="modal-row" key={index}>
                                    <label htmlFor={`line-${index}`}>Line {index + 1}:</label>
                                    <select value={entry.line} onChange={() => {}}>
                                        <option value={entry.line}>{entry.line}</option>
                                    </select>
                                    <select
                                        id={`line-${index}-value`}
                                        value={entry.value}
                                        onChange={e => {
                                            const newValue = e.target.value;
                                            setLines(prev =>
                                                prev.map((l, i) => i === index ? { ...l, value: newValue } : l)
                                            );
                                        }}
                                    >
                                        <option value="">Value</option>
                                        {getGearValues(entry.line, type).map(val => (
                                            <option key={val} value={val}>{val}%</option>
                                        ))}
                                    </select>
                                </div>
                            );
                        }

                        // --- PvP Weapon Fixed Lines ---
                        if (gearName === "Weapon" && PVP_TYPES.includes(type) && entry.line) {
                            return (
                                <div className="modal-row" key={index}>
                                    <label htmlFor={`line-${index}`}>Line {index + 1}:</label>
                                    <select value={entry.line} onChange={() => {}}>
                                        <option value={entry.line}>{entry.line}</option>
                                    </select>
                                    <select
                                        id={`line-${index}-value`}
                                        value={entry.value}
                                        onChange={e => {
                                            const newValue = e.target.value;
                                            setLines(prev =>
                                                prev.map((l, i) => i === index ? { ...l, value: newValue } : l)
                                            );
                                        }}
                                    >
                                        <option value="">Value</option>
                                        {getGearValues(entry.line, type).map(val => {
                                            const noPercent = pvpNoPercent.includes(entry.line);
                                            const displayVal = noPercent ? val : `${val}%`;
                                            return <option key={val} value={val}>{displayVal}</option>;
                                        })}
                                    </select>
                                </div>
                            );
                        }

                        // --- PvP Helmet Fixed Lines ---
                        if (gearName === "Helmet" && PVP_TYPES.includes(type) && entry.line) {
                            return (
                                <div className="modal-row" key={index}>
                                    <label htmlFor={`line-${index}`}>Line {index + 1}:</label>
                                    <select value={entry.line} onChange={() => {}}>
                                        <option value={entry.line}>{entry.line}</option>
                                    </select>
                                    <select
                                        id={`line-${index}-value`}
                                        value={entry.value}
                                        onChange={e => {
                                            const newValue = e.target.value;
                                            setLines(prev =>
                                                prev.map((l, i) => i === index ? { ...l, value: newValue } : l)
                                            );
                                        }}
                                    >
                                        <option value="">Value</option>
                                        {getGearValues(entry.line, type).map(val => (
                                            <option key={val} value={val}>{val}%</option>
                                        ))}
                                    </select>
                                </div>
                            );
                        }
                        
                        // --- All other lines ---
                        const isUniqueWithFixedLine = (type === "chaos unique" || type === "abyss unique") && uniqueSubType;
                        const fixedLine = isUniqueWithFixedLine
                            ? (type === "chaos unique"
                                ? chaosUniqueFixedLine[uniqueSubType]?.[0]
                                : abyssUniqueFixedLine[uniqueSubType]?.[0])
                            : null;

                        // Count occurrences of the fixed line
                        const fixedLineCount = lines.filter(l => l.line === fixedLine).length;
                        const allowFixedLine = entry.line === fixedLine || fixedLineCount < 2;

                        // Other selected lines (normal lines cannot duplicate)
                        const selectedLines = lines
                            .map((l, i) => {
                                if (i === index) return null;
                                if (isUniqueWithFixedLine && l.line === fixedLine) return null; // allow duplicate fixed line
                                return l.line;
                            })
                            .filter(Boolean);

                        const selectedSpecialWeaponLines = lines
                            .map(l => l.line)
                            .filter(l => specialWeaponLine.includes(l) && l);

                        // Build available lines
                        const availableLines = allLines.filter(line => {  
                            // Exclude WB fixed lines for non-WB weapons
                            if (gearName === "Weapon" && !WB_TYPES.includes(type) && Object.values(FIXED_WB_LINES && line !== "Attack").includes(line)) {
                                return false;
                            }

                            // Special weapon lines logic (for PvP)
                            if (gearName === "Weapon" && !WB_TYPES.includes(type) && specialWeaponLine.includes(line)) {
                                return lines[index].line === line || selectedSpecialWeaponLines.length === 0;
                            }

                            // Unique fixed line logic
                            if (line === fixedLine) return allowFixedLine;

                            // Normal duplicate prevention
                            return !selectedLines.includes(line);
                        });

                        return (
                            <div className="modal-row" key={index}>
                                <label htmlFor={`line-${index}`}>Line {index + 1}:</label>
                                <select
                                    id={`line-${index}`}
                                    value={entry.line || ""}
                                    onChange={e => {
                                        const newLine = e.target.value;
                                        setLines(prev =>
                                            prev.map((l, i) => i === index ? { ...l, line: newLine, value: "" } : l)
                                        );
                                    }}
                                >
                                    <option value="">Select Line</option>
                                    {availableLines.map(line => (
                                        <option key={line} value={line}>{line}</option>
                                    ))}
                                </select>

                                <select
                                    id={`line-${index}-value`}
                                    value={entry.value}
                                    onChange={e => {
                                        const newValue = e.target.value;
                                        setLines(prev =>
                                            prev.map((l, i) => i === index ? { ...l, value: newValue } : l)
                                        );
                                    }}
                                >
                                    <option value="">Value</option>
                                    {getGearValues(entry.line, type).map(val => (
                                        <option key={val} value={val}>{val}%</option>
                                    ))}
                                </select>
                            </div>
                        );
                    })}
                </div>

                {/* Action Buttons */}
                <div className="modal-actions">
                    <button
                        className="modal-btn modal-reset-btn"
                        onClick={() => {
                            if (window.confirm(`Reset all data for ${gearName}?`)) {
                                setType('');
                                setWbSubType('');
                                setVwbSubType('');
                                setUniqueSubType('');
                                setpvpWeaponSubType('');
                                setPvpHelmetSubType('');
                                setRuneEffect('');
                                setRuneValue('');
                                setSpecialLine('');
                                setSpecialLineValue('');
                                setUniqueLine('');
                                setUniqueLineValue('');
                                setSpecialLineOption([]);
                                setSpecialLineValues([]);
                                setLines([        
                                    { line: "", value: "" },
                                    { line: "", value: "" },
                                    { line: "", value: "" },
                                    { line: "", value: "" },
                                    { line: "", value: "" },
                                ]);
                            }
                        }}
                    >
                        Reset
                    </button>

                    <button className="modal-btn modal-save-btn" onClick={handleSave}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}

export default EquipmentModal;
