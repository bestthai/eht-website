import React, {useState} from 'react';

import HunterImage from './assets/hunter/Hunter.png'

import Stat from './Stat';
import EquipmentModal from './EquipmentModal';
import getImageUrl from './utils/getImageUrl';

function HunterBuilder()
{

    const classes = ["Berserker" , "Paladin", "Sorcerer", "Ranger"]
    const squares = Array.from({ length: 8 });

    const [showModal, setShowModal] = useState(false);
    const [selectedGear, setSelectedGear] = useState('');
    const [selectedClass, setSelectedClass] = useState(classes[0]);
    const [saveGearData, setSaveGearData] = useState({});

    function handleButtonClick(gearname) {
        setSelectedGear(gearname); 
        setShowModal(true);
    }

    function closeModal() {
        setShowModal(false);
    }

    function handleSave(data) {
        setSaveGearData(prevData => ({
            ...prevData, [selectedGear]: data
        }));

        setShowModal(false);
        console.log(data);
    }

    function getGearImage(gearName) {
        const saveData = saveGearData[gearName] || {};
        const saveType = saveData.type;
        const wbSubType = saveData.wbSubType || "";
        const vwbSubType = saveData.vwbSubType || "";
        const uniqueSubType = saveData.uniqueSubType || "";

        if (gearName === 'Weapon') {
            if (saveType) {

                if (saveType === 'wb' || saveType === 'twb') 
                {
                    return getImageUrl(`${saveType}${wbSubType}${gearName}${selectedClass}.png`);
                }
               
                else if (saveType === 'vwb') 
                {
                    return getImageUrl(`${saveType}${vwbSubType}${gearName}${selectedClass}.png`);
                }
                
                return getImageUrl(`${saveType}${gearName}${selectedClass}.png`);
            } 
            
            else
            {
                return new URL(`./assets/hunter/${gearName}${selectedClass}.png`, import.meta.url).href;
            }
        }

        // Non-weapon gear
        if (saveType) 
        {
            if (saveType === "chaos unique" || saveType === "abyss unique")
            {
                return getImageUrl(`${saveType}${uniqueSubType}${gearName}.png`);
            }

            return getImageUrl(`${saveType}${gearName}.png`);
        }

        return new URL(`./assets/hunter/${gearName}.png`, import.meta.url).href;
    }


    return(
        <div className="hunter-builder-container"
            style={{
                minHeight: '70vh', 
            }}>

            <div className="hunter-builder-section">
                <div className="squares-container"
                    style={{
                        position: 'relative',
                        width: '80vw',
                        maxWidth: '400px',
                        aspectRatio: '1 / 1',
                        height: '400px', 
                        margin: 'auto',
                        padding: '30px',

                    }}>

                    <img 
                        className='hunter-image' 
                        src={HunterImage} 
                        alt='hunter'
                        style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        width: '25%',
                        height: 'auto',
                        transform: 'translate(-50%, -50%)',
                        }}>
                        </img>

                    {squares.map((_, index) => {
                        const angle = (index / squares.length) * 2 * Math.PI;
                        const x = 150 * Math.cos(angle);
                        const y = 170 * Math.sin(angle);
                        const gearNames = ['Glove', 'Boot', 'Belt', 'Ring', 'Weapon', 'Necklace', 'Helmet', 'Chestplate'];
                        const gearName = gearNames[index];

                        return (
                            <button
                                className='gear-square'
                                key={index}
                                style={{
                                    position: 'absolute',
                                    left: `calc(50% + ${x}px)`,
                                    top: `calc(50% + ${y}px)`,
                                    width: '18%',
                                    aspectRatio: '1/1',
                                    borderRadius: '8px',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundImage: `url(${getGearImage(gearName)})`,
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'center',
                                }}
                                onClick={() => handleButtonClick(gearName)}>
                            </button>
                        );
                    })}

                        <select 
                            className="class-dropdown"
                            onChange={(e) => setSelectedClass(e.target.value)}>
                            {classes.map((cls, index) => (
                                <option key={index} value={cls}>{cls}</option>
                            ))}
                        </select>
                </div>
            </div>

            {showModal && (
                <EquipmentModal 
                gearName={selectedGear} 
                onClose={closeModal} 
                onSave={handleSave}
                selectedClass={selectedClass}
                saveData={saveGearData[selectedGear]}
                saveGearData={saveGearData}
                />
            )}

            <Stat saveGearData={saveGearData}></Stat>

        </div>
    );
}

export default HunterBuilder