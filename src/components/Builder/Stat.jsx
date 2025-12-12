import { weaponLines, weaponLineGroups } from '../../data/weaponLines';
import { chaosUniqueLineValues, abyssUniqueLineValues,
         chaosUniqueFixedLine, abyssUniqueFixedLine,
         chaosUniqueFixedLineValue, abyssUniqueFixedLineValue,
} from '../../data/uniqueGears';
import { DefChaosValues, DefAbyssValues,
         HpChaosValues, HpAbyssValues,
         HelmBeltChaosValues, HelmBeltAbyssValues,
         WeaponChaosValues, WeaponAbyssValues 
} from '../../data/specialLines';
import { pvpNoPercent } from '../../data/pvpLines';
import { gearValuesByType } from '../../data/gearLines';
import { wbLineValues } from '../../data/wbWeapons';
import { FIXED_PVP_DPS_WEAPON_LINE_VALUE, 
         FIXED_PVP_DPS_HELMET_LINE_VALUE,
         FIXED_PVP_TANK_WEAPON_LINE_VALUE,
         FIXED_PVP_TANK_HELMET_LINE_VALUE,
} from '../../data/pvpLines';

import isUniqueGearPercentage from '../../utils/isUniqueGearPercentage';

function normalizeGearType(type) {
    if (type === "chaos unique") return "chaos";
    if (type === "abyss unique") return "abyss";
    return type;
}

function Stat({ saveGearData = {} }) 
{
    const DefGears = ['Chestplate', 'Glove', 'Boot'];
    const HpGears = ['Ring', 'Necklace'];
    const HelmBeltGears = ['Helmet', 'Belt'];
    const WeaponGears = ['Weapon'];

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

    function computeMaxStat(line) {
        let maxStat = 0;

        Object.values(saveGearData).forEach((gear) => {
            if (!gear || !gear.type) return;

            const gearType = gear.type;
            const gearName = gear.gearName;

            // Does this gear even contain this stat?
            const hasLine =
                gear.lines?.some(l => l.line === line) ||
                gear.specialLine === line ||
                gear.uniqueLine === line;

            if (!hasLine) return;


            // ------------------------------------------------
            // 1. NORMAL STAT RANGE (Attack, HP, Crit, etc.)
            // ------------------------------------------------
            const normalType = normalizeGearType(gearType); // chaos unique → chaos
            const normalValues = gearValuesByType[normalType];

            // TODO: handle unique gear that have own normal line with their own range (juggernaut helm HP% and greaves of wind move speed)

            if (normalValues && normalValues[line]) {
                const arr = normalValues[line];
                maxStat += Number(arr[arr.length - 1]); // take highest
            }


            // ------------------------------------------------
            // 2. UNIQUE LINES (chaos unique / abyss unique)
            // ------------------------------------------------
            if ((gearType === "chaos unique" || gearType === "abyss unique") && gear.uniqueLine === line) {
                const map = gearType === "chaos unique"
                    ? chaosUniqueLineValues
                    : abyssUniqueLineValues;

                const arr = map[gear.specialLine];
                if (arr) maxStat += Number(arr[arr.length - 1]); // last element = max
            }


            // ------------------------------------------------
            // 3. UNIQUE FIXED STAT LINES
            // ------------------------------------------------
            if ((gearType === "chaos unique" || gearType === "abyss unique") && gear.specialLine === line) {
                const fixedMap = gearType === "chaos unique"
                    ? chaosUniqueFixedLineValue
                    : abyssUniqueFixedLineValue;

                const arr = fixedMap[gear.uniqueSubType];
                if (arr) maxStat += Number(arr[arr.length - 1]);
            }


            // ------------------------------------------------
            // 4. SPECIAL CHAOS / ABYSS (DEF, HP, HELM, WEAPON)
            // ------------------------------------------------
            if ((gearType === "chaos" || gearType === "abyss") && gear.specialLine === line) {
                const isChaos = gearType === "chaos";

                const table =
                    DefGears.includes(gearName) ? (isChaos ? DefChaosValues : DefAbyssValues) :
                    HpGears.includes(gearName) ? (isChaos ? HpChaosValues : HpAbyssValues) :
                    HelmBeltGears.includes(gearName) ? (isChaos ? HelmBeltChaosValues : HelmBeltAbyssValues) :
                    WeaponGears.includes(gearName) ? (isChaos ? WeaponChaosValues : WeaponAbyssValues) :
                    null;

                if (table && table[line]) {
                    const arr = table[line];
                    maxStat += Number(arr[arr.length - 1]);
                }
            }


            // ------------------------------------------------
            // 5. WORLD BOSS (WB / TWB / VWB)
            // ------------------------------------------------
            if (gearType === "wb" || gearType === "twb" || gearType === "vwb") {
                const wbType = gearType;
                const sub = wbType === "vwb" ? gear.vwbSubType : gear.wbSubType;
                const wbData = wbLineValues[wbType]?.[sub];

                if (wbData) {
                    if (wbData.fixed?.[line]) {
                        const arr = wbData.fixed[line];
                        maxStat += Number(arr[arr.length - 1]);
                    }
                    if (wbData.classes?.[gear.selectedClass]?.[line]) {
                        const arr = wbData.classes[gear.selectedClass][line];
                        maxStat += Number(arr[arr.length - 1]);
                    }
                }
            }


            // ------------------------------------------------
            // 6. PvP (2v2 / champion / challenger)
            // ------------------------------------------------
            if (gearType === "2v2" || gearType === "champion" || gearType === "challenger") {
                // WEAPON
                if (gearName === "Weapon") {
                    const isTankPaladin = gear.selectedClass === "Paladin" && gear.pvpWeaponSubType === "Mahes";

                    if (isTankPaladin) {
                        const map = FIXED_PVP_TANK_WEAPON_LINE_VALUE[gearType]?.Paladin?.fixed;
                        if (map?.[line]) maxStat += Number(map[line][1]);
                    } else {
                        const dps = FIXED_PVP_DPS_WEAPON_LINE_VALUE[gearType];
                        if (dps) {
                            if (dps.fixed?.[line]) maxStat += Number(dps.fixed[line][1]);

                            const classData = dps.classes?.[gear.selectedClass]?.[gear.pvpWeaponSubType];
                            if (classData?.fixed?.[line]) maxStat += Number(classData.fixed[line][1]);
                            if (classData?.line2?.[line]) maxStat += Number(classData.line2[line][1]);
                        }
                    }
                }

                // HELMET
                if (gearName === "Helmet") {
                    const dps = FIXED_PVP_DPS_HELMET_LINE_VALUE[gearType]?.[gear.pvpHelmetSubType];
                    const tank = FIXED_PVP_TANK_HELMET_LINE_VALUE[gearType]?.[gear.pvpHelmetSubType];
                    const map = dps || tank;

                    if (map?.fixed?.[line]) maxStat += Number(map.fixed[line][1]);
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

