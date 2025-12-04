
import { weaponLines, weaponLineGroups } from '../../data/weaponLines';
import { chaosUniquePercent, abyssUniquePercent } from '../../data/uniqueGears';
import { pvpNoPercent } from '../../data/pvpLines';
import { gearValuesByType } from '../../data/gearLines';
import { wbLineValues } from '../../data/wbWeapons';
import { FIXED_PVP_DPS_WEAPON_LINE_VALUE, 
         FIXED_PVP_DPS_HELMET_LINE_VALUE,
         FIXED_PVP_TANK_WEAPON_LINE_VALUE,
         FIXED_PVP_TANK_HELMET_LINE_VALUE,
} from '../../data/pvpLines';

import isUniqueGearPercentage from '../../utils/isUniqueGearPercentage';

function Stat({ saveGearData = {} }) 
{
    const baseStats = weaponLines.reduce((acc, line) => {
        acc[line] = 0;
        return acc;
    }, {});

    const stats = { ...baseStats };
    const runeStats = {};

    Object.values(saveGearData).forEach((gear) => {
        if (!gear) return;

        gear.lines?.forEach((line) => {
            if (line.line && line.value) 
            {
                stats[line.line] = (stats[line.line] || 0) + Number(line.value);
            }
        });

        if (gear.runeEffect && gear.runeValue) 
        {
            runeStats[gear.runeEffect] = (runeStats[gear.runeEffect] || 0) + Number(gear.runeValue);
        }

        if (gear.specialLine && gear.specialLineValue) 
        {
            stats[gear.specialLine] = (stats[gear.specialLine] || 0) + Number(gear.specialLineValue);
        }

        if (gear.uniqueLine && gear.uniqueLineValue)
        {
            stats[gear.uniqueLine] = (stats[gear.uniqueLine] || 0) + Number(gear.uniqueLineValue);
        }
    });

    // TODO: Fixed VWB progress bar

    function computeMaxStat(line)
    {
        let maxStat = 0;
        Object.values(saveGearData).forEach((gear) => {
            if (!gear || !gear.type) return;

            // Check if this gear actually has the line selected
            const hasLine = gear.lines?.some(l => l.line === line) || 
                           gear.specialLine === line || 
                           gear.uniqueLine === line;
            if (!hasLine) return; // Skip if line is not selected for this gear

            // -----------------------------
            // NORMAL gear values
            // -----------------------------
            const normalTypeValues = gearValuesByType[gear.type];
            if (normalTypeValues && normalTypeValues[line]) {
                const range = normalTypeValues[line];
                if (Array.isArray(range) && range.length >= 2) {
                    maxStat += Number(range[1]);
                }
            }

            // -----------------------------
            // WORLD BOSS (WB / TWB / VWB)
            // -----------------------------
            if (gear.type === "wb" || gear.type === "twb" || gear.type === "vwb") {
                const wbType = gear.type;        // wb / twb / vwb
                const wbSubType = wbType === "vwb" ? gear.vwbSubType : gear.wbSubType;

                const wbData = wbLineValues[wbType]?.[wbSubType];
                if (wbData) {
                    // fixed stats
                    if (wbData.fixed?.[line]) {
                        maxStat += wbData.fixed[line][1];
                    }
                    // class-specific stats
                    if (wbData.classes?.[gear.selectedClass]?.[line]) {
                        maxStat += wbData.classes[gear.selectedClass][line][1];
                    }
                }
            }

            // -----------------------------
            // PVP GEARS (2v2 / champion / challenger)
            // -----------------------------
            if (gear.type === "2v2" || gear.type === "champion" || gear.type === "challenger") {
                const pvpType = gear.type;

                // REFERENCE TABLE
                // For PvP weapons (including special weapon lines)
                if (gear.gearName === "Weapon") {
                    const isTank = gear.selectedClass === "Paladin" && gear.pvpWeaponSubType === "Mahes";
                    
                    if (isTank) {
                        const tankData = FIXED_PVP_TANK_WEAPON_LINE_VALUE[pvpType]?.Paladin?.fixed;
                        if (tankData?.[line]) {
                            maxStat += tankData[line][1];
                        }
                    } else {
                        // DPS weapon
                        const dpsData = FIXED_PVP_DPS_WEAPON_LINE_VALUE[pvpType];
                        if (dpsData) {
                            // fixed stats
                            if (dpsData.fixed?.[line]) {
                                maxStat += dpsData.fixed[line][1];
                            }
                            // class-specific stats including special weapon lines
                            if (gear.pvpWeaponSubType && dpsData.classes?.[gear.selectedClass]?.[gear.pvpWeaponSubType]?.fixed?.[line]) {
                                maxStat += dpsData.classes[gear.selectedClass][gear.pvpWeaponSubType].fixed[line][1];
                            }
                            if (gear.pvpWeaponSubType && dpsData.classes?.[gear.selectedClass]?.[gear.pvpWeaponSubType]?.line2?.[line]) {
                                maxStat += dpsData.classes[gear.selectedClass][gear.pvpWeaponSubType].line2[line][1];
                            }
                        }
                    }
                }
                // For PvP helmets
                else if (gear.gearName === "Helmet") {
                    const dpsHelmData = FIXED_PVP_DPS_HELMET_LINE_VALUE[pvpType]?.[gear.pvpHelmetSubType];
                    const tankHelmData = FIXED_PVP_TANK_HELMET_LINE_VALUE[pvpType]?.[gear.pvpHelmetSubType];
                    const helmData = dpsHelmData || tankHelmData;
                    
                    if (helmData?.fixed?.[line]) {
                        maxStat += helmData.fixed[line][1];
                    }
                }
            }
        });

        return maxStat;
    }

    return (
        <div className='stat-background'>
            <div className="stat-component">
                <h1 className="stat-heading">STATS</h1>
                    <div className="stat-column">
                        {Object.entries(weaponLineGroups).map(([groupName, groupLines]) => (
                            <div key={groupName} className="stat-group">
                            <h3 className="stat-group-heading">{groupName}</h3>
                            <ul>
                                {groupLines.map((line) => {
                                    const gearValue = stats[line] || 0;
                                    const runeValue = runeStats[line] || 0;
                                    if (gearValue === 0 && runeValue === 0) return null;

                                    const uniqueGear = Object.values(saveGearData).find(
                                        gear => (gear.type === "chaos unique" || gear.type === "abyss unique") && gear.uniqueLine === line
                                    );

                                    let displayValue = '';
                                    if (gearValue > 0) 
                                    {
                                        if (uniqueGear) {
                                            const isPercent = isUniqueGearPercentage(uniqueGear);
	                                        displayValue = `${gearValue}${isPercent ? '%' : ''}`;
                                        } 
                                        else if (pvpNoPercent.includes(line)) 
                                        {
                                            displayValue = `${gearValue}`; 
                                        }
                                        else {
                                            displayValue = `${gearValue}%`;
                                        }
                                    }

                                    const maxPossible = computeMaxStat(line);
                                    const percent = maxPossible > 0 ? ((gearValue / maxPossible) * 100).toFixed(1) : 0;
                                    const percentNum = Number(percent);

                                    let barColor = "";
                                    if (percentNum >= 90) barColor = "#10b981"; // green
                                    else if (percentNum >= 70) barColor = "#eab308"; // yellow
                                    else if (percentNum >= 50) barColor = "#f97316"; // orange
                                    else barColor = "#ef4444"; // red

                                    return (
                                        <li key={line} className="stat-stat">
                                            {line} : {displayValue}
                                            {gearValue > 0 && runeValue > 0 ? ' + ' : ''}
                                            {runeValue > 0 ? `${runeValue}% (rune)` : ''}

                                            {/* progress bar */}
                                            {maxPossible > 0 && (
                                                <div className="stat-progress-wrapper" aria-hidden>
                                                    <div className="stat-progress-bar" role="progressbar" aria-valuenow={percent} aria-valuemin="0" aria-valuemax="100">
                                                        <div 
                                                            className="stat-progress-filled"
                                                            style={{ 
                                                                width: `${Math.min(Math.max(percent, 0), 100)}%`,
                                                                backgroundColor: barColor
                                                            }}
                                                        ></div>
                                                    </div>
                                                    <div className="stat-progress-label">{gearValue}% / {maxPossible}%</div>
                                                </div>
                                            )}
                                            
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        ))}
                    </div>
                </div>
            <div className='stat-bottom-bar'></div>
        </div>
    );
}

export default Stat;

