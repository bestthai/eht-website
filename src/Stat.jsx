
import { weaponLines, weaponLineGroups } from './data/weaponLines';
import { chaosUniquePercent, abyssUniquePercent } from './data/uniqueGears';
import { pvpNoPercent } from './data/pvpLines';

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
                                            const isPercent = uniqueGear.type === "chaos unique"
                                                ? chaosUniquePercent[uniqueGear.uniqueSubType]
                                                : abyssUniquePercent[uniqueGear.uniqueSubType];
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

                                    return (
                                        <li key={line} className="stat-stat">
                                            {line} : {displayValue}
                                            {gearValue > 0 && runeValue > 0 ? ' + ' : ''}
                                            {runeValue > 0 ? `${runeValue}% (rune)` : ''}
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

