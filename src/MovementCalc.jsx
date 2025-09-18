import React, { useState, useEffect } from 'react';
import { hunterRarityValues, mountEqValues } from './data/movementSpd';
import MovementGraph from './utils/MovementGraph';

function MovementCalc() {
    const [type, setType] = useState(null);
    const [windBootPercent, setwindBootPercent] = useState("");

    const [building, setBuilding] = useState("");
    const [hunterRarity, setHunterRarity] = useState("");
    const [costume, setCostume] = useState(true);
    const [medal, setMedal] = useState(true);
    const [wing, setWing] = useState(true);
    const [secretTech, setSecretTech] = useState(15);
    const [gear, setGear] = useState("15");
    const [rune, setRune] = useState(0);
    const [mount, setMount] = useState(false);
    const [mountEq, setMountEq] = useState("");

    const [GBow, setGBow] = useState(false);
    const [transform, setTransform] = useState(false);

    const [atkAmp, setAtkAmp] = useState(null);
    const [atkAmpWithOptional, setAtkAmpWithOptional] = useState(null);
    const [movementRequire, setMovementRequire] = useState(null);

    const [showGraph, setShowGraph] = useState(false);

    function calculateAtkAmp({ windBootPercent, building, hunterRarity, secretTech, gear, mount, mountEq, costume, medal, wing, rune, GBow, transform }) {
        const numericwindBootPercent = Number(windBootPercent) || 0;
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

        const atkAmpNormal = (total * (numericwindBootPercent / 100)).toFixed(2);
        const atkAmpOptional = ((total + optional) * (numericwindBootPercent / 100)).toFixed(2);

        return { atkAmpNormal, atkAmpOptional, totalWithOptional: total + optional };
    }

     function calculateMovementRequire({ type, windBootPercent, totalWithOptional }) 
     {
        const maxAmp = type === "chaos" ? 30 : type === "abyss" ? 40 : 0;
        const required = maxAmp / (windBootPercent / 100) - totalWithOptional;
        return required.toFixed(1);
    }

    /*
        Recalculate whenever any input changes
    */
    useEffect(() => {
        if (!type || !windBootPercent) {
            setAtkAmp(null);
            setAtkAmpWithOptional(null);
            setMovementRequire(null);
            return;
        }

        const { atkAmpNormal, atkAmpOptional, totalWithOptional } = calculateAtkAmp({
            windBootPercent,
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

        const requiredMovement = calculateMovementRequire({
            type,
            windBootPercent: Number(windBootPercent),
            totalWithOptional
        });

        setAtkAmp(atkAmpNormal);
        setAtkAmpWithOptional(atkAmpOptional);
        setMovementRequire(requiredMovement);
    }, [type, windBootPercent, building, hunterRarity, secretTech, gear, mount, mountEq, costume, medal, wing, rune, GBow, transform]);


    return (
        <div className="movement-calc-container">
            <h1 className="movement-calc-title">Movement Speed Calculator</h1>

            {/* Wind Boot Type */}
            <div>
                <label>Wind Boot Type: </label>
                <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                >
                    <option value="">-- Select Type --</option>
                    <option value="chaos">Chaos (30%)</option>
                    <option value="abyss">Abyss (40%)</option>
                </select>
            </div>

            {/* Wind Boot */}
            <div>
                <label>Wind Boot %: </label>
                <select value={windBootPercent} onChange={(e) => setwindBootPercent(Number(e.target.value))}>
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
                        min={15}
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
            <div className="result-panel-movement">
                <h2>Attack Amp: {atkAmp ? `${atkAmp}%` : "--"}</h2>

                {(GBow || transform) && (
                    <div className="optional-result">
                    Attack Amp with {GBow ? "Glacier Bow" : "Transform"}:{" "}
                    {atkAmpWithOptional ? `${atkAmpWithOptional}%` : "--"}
                    </div>
                )}

                {movementRequire !== null && (
                    <div className="movement-result-text">
                        Movement Required:{" "}
                        {Number(movementRequire) === 0
                            ? <span className="gear-balanced">Perfect Movement</span>
                            : Number(movementRequire) > 0
                            ? <span className="gear-add">Add {movementRequire}%</span>
                            : <span className="gear-remove">Remove {Math.abs(movementRequire)}%</span>
                        }
                    </div>
                )}
            </div>
            
            {/* Show/hide graph */}
            <button
                className='graph-toggle-button'
                onClick={() => setShowGraph(prev => !prev)}
            >
            {showGraph ? "Don't close me, I spent a lot of time on the graph 😭" : "Show Graph"}
            </button>
            {showGraph && <MovementGraph />}
            
        </div>
    );
}

export default MovementCalc;