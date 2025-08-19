
import { weaponLines, weaponLineGroups } from './data/weaponLines';

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

                                    return (
                                        <li key={line} className="stat-stat">
                                        {line} : {gearValue > 0 ? `${gearValue}%` : ''}
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

