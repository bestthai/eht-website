import {chaosUniquePercent, abyssUniquePercent} from '../data/uniqueGears';

function isUniqueGearPercentage(gear)
{
    if (!gear || !gear.type) return null;

    if (gear.type === "chaos unique")
    {
        return chaosUniquePercent[gear.uniqueSubType] ?? null;
    }

    if (gear.type === "abyss unique")
    {
        return abyssUniquePercent[gear.uniqueSubType] ?? null;
    }

    return null;
}

export default isUniqueGearPercentage;