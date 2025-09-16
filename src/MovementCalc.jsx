import React, { useState, useEffect } from 'react';
import { hunterRarityValues, mountEqValues } from './data/movementSpd';

function MovementCalc() {
    const [windBoot, setWindBoot] = useState("");

    const [building, setBuilding] = useState("");
    const [hunterRarity, setHunterRarity] = useState("");
    const [costume, setCostume] = useState(true);
    const [medal, setMedal] = useState(true);
    const [wing, setWing] = useState(true);
    const [secretTech, setSecretTech] = useState(15);
    const [gear, setGear] = useState("");
    const [rune, setRune] = useState(0);
    const [mount, setMount] = useState(false);
    const [mountEq, setMountEq] = useState("");

    const [GBow, setGBow] = useState(false);
    const [transform, setTransform] = useState(false);

    const [atkAmp, setAtkAmp] = useState(null);
    const [atkAmpWithOptional, setAtkAmpWithOptional] = useState(null);

    function calculateAtkAmp({ windBoot, building, hunterRarity, secretTech, gear, mount, mountEq, costume, medal, wing, rune, GBow, transform }) {
        const numericWindBoot = Number(windBoot) || 0;
        const total = Number(building) 
            + Number(hunterRarity) 
            + (costume ? 40 : 0) 
            + (medal ? 20 : 0) 
            + (wing ? 20 : 0) 
            + Number(secretTech) 
            + Number(gear)
            + Number(rune) 
            + (mount ? 30 : 0) 
            + Number(mountEq);

        const optional = (GBow ? 80 : 0) + (transform ? 200 : 0);

        const atkAmpNormal = (total * (numericWindBoot / 100)).toFixed(2);
        const atkAmpOptional = ((total + optional) * (numericWindBoot / 100)).toFixed(2);

        return { atkAmpNormal, atkAmpOptional };
    }

    /*
        Recalculate whenever any input changes
    */
    useEffect(() => {
        if (!windBoot) {
            setAtkAmp(null);
            setAtkAmpWithOptional(null);
            return;
        }

        const { atkAmpNormal, atkAmpOptional } = calculateAtkAmp({
            windBoot,
            building,
            hunterRarity,
            secretTech,
            gear,
            mount,
            mountEq,
            costume,
            medal,
            wing,
            rune,
            GBow,
            transform
        });

        setAtkAmp(atkAmpNormal);
        setAtkAmpWithOptional(atkAmpOptional);
    }, [windBoot, building, hunterRarity, secretTech, gear, mount, mountEq, costume, medal, wing, rune, GBow, transform]);

    return (
        <div className="movement-calc-container">
            <h1 className="movement-calc-title">Movement Speed Calculator</h1>

            {/* Wind Boot */}
            <div>
                <label>Wind Boot %: </label>
                <select value={windBoot} onChange={(e) => setWindBoot(Number(e.target.value))}>
                    <option value="">-- Select Value --</option>
                    {[3, 4, 5, 6, 7, 8, 9, 10].map((v) => (
                        <option key={v} value={v}>{v}%</option>
                    ))}
                </select>
            </div>

            {/* Building */}
            <div>
                <label>Building Buff (0 - 50%): </label>
                <div className="input-percent-wrapper">
                    <input
                        type="number"
                        value={building}
                        onChange={(e) => setBuilding(Number(e.target.value))}
                        placeholder="Enter Value"
                        max={50}
                        min={0}
                    />
                    <span className="percent-symbol">%</span>
                </div>
            </div>

            {/* Hunter Rarity */}
            <div>
                <label>Hunter Rarity: </label>
                <select value={hunterRarity} onChange={(e) => setHunterRarity(Number(e.target.value))}>
                    <option value="">-- Select Rarity --</option>
                    {Object.entries(hunterRarityValues).map(([rarity, val]) => (
                        <option key={rarity} value={val}>{rarity}</option>
                    ))}
                </select>
            </div>

            {/* Costume */}
            <div className="toggle-wrapper">
                <label>Costume: </label>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={costume}
                        onChange={(e) => setCostume(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

            {/* Medal */}
            <div className="toggle-wrapper">
                <label>Medal: </label>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={medal}
                        onChange={(e) => setMedal(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

            {/* Wing */}
            <div className="toggle-wrapper">
                <label>Wing: </label>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={wing}
                        onChange={(e) => setWing(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

            {/* Secret Tech */}
            <div>
                <label>Secret Tech (0 - 15%): </label>
                <div className="input-percent-wrapper">
                    <input
                        type="number"
                        value={secretTech}
                        onChange={(e) => setSecretTech(Number(e.target.value))}
                        placeholder="Enter value"
                        max={15}
                        min={0}
                    />
                    <span className="percent-symbol">%</span>
                </div>
            </div>

            {/* Gear */}
            <div>
                <label>Gear: </label>
                <div className="input-percent-wrapper">
                    <input
                        type="number"
                        value={gear}
                        onChange={(e) => setGear(Number(e.target.value))}
                        placeholder="Enter Value"
                        min={0}
                    />
                    <span className="percent-symbol">%</span>
                </div>
            </div>

            {/* Rune */}
            <div>
                <label>Rune: </label>
                <select value={rune} onChange={(e) => setRune(Number(e.target.value))}>
                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((v) => (
                        <option key={v} value={v}>{v}%</option>
                    ))}
                </select>
            </div>

            {/* Mount */}
            <div className="toggle-wrapper">
                <label>Mount: </label>
                <label className="switch">
                    <input
                        type="checkbox"
                        checked={mount}
                        onChange={(e) => setMount(e.target.checked)}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

            {/* Mount Equipment */}
            {mount && (
                <div>
                    <label>Mount Equipment: </label>
                    <select value={mountEq} onChange={(e) => setMountEq(Number(e.target.value))}>
                        <option value="">-- Select Tier --</option>
                        {Object.entries(mountEqValues).map(([tier, val]) => (
                            <option key={tier} value={val}>{tier}</option>
                        ))}
                    </select>
                </div>
            )}

            {/* Glacier Bow */}
            {!transform && (
                <div className="toggle-wrapper">
                    <label>Glacier Bow: </label>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={GBow}
                            onChange={(e) => setGBow(e.target.checked)}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            )}

            {/* Transform */}
            {!GBow && (
                <div className="toggle-wrapper">
                    <label>Transform (Demon/Archangel): </label>
                    <label className="switch">
                        <input
                            type="checkbox"
                            checked={transform}
                            onChange={(e) => setTransform(e.target.checked)}
                        />
                        <span className="slider round"></span>
                    </label>
                </div>
            )}

            {/* Result */}
            <>
                {(!GBow && !transform) ? (
                    <h2>Attack Amp: {atkAmp ? `${atkAmp}%` : "--"}</h2>
                ) : (
                    <>
                        <h2>Attack Amp: {atkAmp ? `${atkAmp}%` : "--"}</h2>
                        <h2>
                            Attack Amp with {GBow ? "Glacier Bow" : transform ? "Transform" : ""}:{" "}
                            {atkAmpWithOptional ? `${atkAmpWithOptional}%` : "--"}
                        </h2>
                    </>
                )}
            </>
            
            
        </div>
    );
}

export default MovementCalc;
