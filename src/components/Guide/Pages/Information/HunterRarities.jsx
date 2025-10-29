import HunterHeroicPoints from '../../../../assets/guide/Information/HunterRarities/Hunter_Heroic_Points.png';
import HunterLegendaryPoints from '../../../../assets/guide/Information/HunterRarities/Hunter_Legendary_Points.png';
import HunterUltimatePoints from '../../../../assets/guide/Information/HunterRarities/Hunter_Ultimate_Points.png';
import PurpleStat from '../../../../assets/guide/Information/HunterRarities/PurpleStat.png';
import Heroic_Hunter_Buff from '../../../../assets/guide/Information/HunterRarities/Heroic_Hunter_Buff.png';
import Legendary_Hunter_Buff from '../../../../assets/guide/Information/HunterRarities/Legendary_Hunter_Buff.png';
import Ultimate_Hunter_Buff from '../../../../assets/guide/Information/HunterRarities/Ultimate_Hunter_Buff.png';
import AwakeningCrystalAndStone from '../../../../assets/guide/Information/HunterRarities/AwakeningCrystalAndStone.jpg';

import '../../Guide.css';

function HunterRarities() {

    return (
        <section>
            <h2 className="guide-heading">Hunter Rarities and Hunter Points</h2>
            <p className="guide-paragraph">
                In this guide, we'll explore how <b>Hunter Rarities</b> are determined through their <b>stat points</b>,
                what each color of the stat line means, and how you can use <b>Awakening Stones</b> and <b>Crystals</b> to upgrade your hunters. 
            </p>
            {/* Stat Line Points */}
            <h2 className="guide-heading">Hunter Stat Point System</h2>

            <p className="guide-paragraph">
                You might have wondered how the <b>Rarity</b> of your hunter is determined. And what does the colors on each of the stats line mean?
            </p>

            <p className="guide-paragraph">
                Let me enlighten you! Hehe{" "}
                <span role="img" aria-label="hmmm">
                🤔
                </span>{" "}
            </p>

            <ul>
                <li>White = 0 Point</li>
                <li>Blue = 1 Point</li>
                <li>Orange = 2 Points</li>
                <li>Purple = 3 Points</li>
            </ul>

            <p className="guide-paragraph">
                This point will determine the <b>Rarity</b> of your hunter.
            </p>

            <p className="guide-paragraph">
                <i>
                The following are the Minimum and Maximum Points
                </i>
            </p>

            <ul>
                <li>
                    <b>Normal</b> — 0-3 Points
                </li>
                <li>
                    <b>Rare</b> — 4-6 Points
                </li>
                <li>
                    <b>Superior</b> — 7-9 Points
                </li>
                <li>
                    <b>Heroic</b> — 10-13 Points
                </li>
                <li>
                    <b>Legendary</b> — 14-21 Points
                </li>
                <li>
                    <b>Ultimate</b> — 22 and above
                </li>
            </ul>

            <p className="guide-paragraph">
                Let me show you some hunters from those rarity that I mentioned above.
            </p>

            <div className="guide-image-container">
                <img
                    src={HunterHeroicPoints}
                    alt="Hunter Heroic Points"
                    className="three-row-image"
                />

                <img
                    src={HunterLegendaryPoints}
                    alt="Hunter Legendary Points"
                    className="three-row-image"
                />

                <img
                    src={HunterUltimatePoints}
                    alt="Hunter Ultimate Points"
                    className="three-row-image"
                />
            </div>

            {/* Stat Line Color and Value */}
            <h2 className="guide-heading">Stat Line Color and Value</h2>
            <p className="guide-paragraph">
                Well, you might have wondered where to spend this rare and valuable items.
                It's been asked before and will surely be ask again.
            </p>

            <p className="guide-paragraph">
                Before we start, let me first tell you how <b>Stats</b> work in this game.
            </p>

            <h3 className="guide-subheading">White Stat</h3>
            <blockquote>
                <ul>
                    <li>0% Stat</li>
                </ul>
            </blockquote>

            <h3 className="guide-subheading">Blue Stat</h3>
            <blockquote>
                <ul>
                    <li>10% Stat for Atk, Atk Spd, HP, Def, Satiety, Mood and Stamina</li>
                    <li>2% For Evasion & Crit Rate</li>
                </ul>
            </blockquote>

            <h3 className="guide-subheading">Orange Stat</h3>
            <blockquote>
                <ul>
                    <li>20% Stat for Atk, Atk Spd, HP, Def, Satiety, Mood and Stamina</li>
                    <li>4% For Evasion & Crit Rate</li>
                </ul>
            </blockquote>

            <h3 className="guide-subheading">Purple Stat</h3>
            <blockquote>
                <ul>
                    <li>30% Stat for Atk, Atk Spd, HP, Def, Satiety, Mood and Stamina</li>
                    <li>6% For Evasion & Crit Rate</li>
                </ul>
            </blockquote>

            <p className="guide-note">
                <i>
                This is what Purple Stat would look like in your Hunter's Stat Detail tab
                </i>
            </p>

            <div className="guide-image-container">
                <img
                    src={PurpleStat}
                    alt="Purple Stat Example"
                    className="guide-image"
                />    
            </div>

            <p className="guide-paragraph">
                Along with the individual stat increase, having higher rarity hunters also gives overall stats buff. Although these buffs are only from heroic rarity and above.
            </p>

            <div className="guide-image-container">
                <img
                    src={Heroic_Hunter_Buff}
                    alt="Heroic Hunter Buff"
                    className="three-row-image"
                />

                <img
                    src={Legendary_Hunter_Buff}
                    alt="Legendary Hunter Buff"
                    className="three-row-image"
                />

                <img
                    src={Ultimate_Hunter_Buff}
                    alt="Ultimate Hunter Buff"
                    className="three-row-image"
                />
            </div>

            <h2 className="guide-heading">Awakening Stone and Crystal</h2>

            <p className="guide-paragraph">
                As shown in the image — The amount of points they have determines their <b>Rarity</b>. <br />
                I will now be showing you how to <i>increase your hunter's points.</i>
            </p>

            <ul>
                <li>
                    <b>Awakening Stone</b> can only be used <b>4 Times</b>
                </li>
                <li>
                    <b>Awakening Crystal</b> does not have a limit and can be used any number of times.
                </li>
            </ul>

            <p className="guide-paragraph">
                <b>Note:</b> Awakening Crystal/Stone will increase the hunter point by <b>1</b>.
            </p>

            <div className="guide-image-container">
                <img
                    src={AwakeningCrystalAndStone}
                    alt="Awakening Crystal and Stone"
                    className="guide-image"
                    style = {{
                        width: '60%',        
                        borderRadius: '12px',
                        marginTop: '12px',
                    }}
                />    
            </div>

            <p className="guide-paragraph">
                <b>Note:</b> Awakening Crystal is on the <i>left</i> and the (Heroic) Awakening Stone is on the <i>right</i>.
            </p>


            <br />
            <h3 className="guide-subheading">Tips and Tricks</h3>

            <ul>
                <li>
                    <p className="guide-paragraph" style={{ }}>
                        A <b>13 Point Heroic Hunter</b> can be turned into <b>Legendary</b> if you use 
                        an Awakening Stone on it. But which stat, you ask? 
                        <br />
                        <b>Aspd, always upgrade Aspd.</b> If a hunter has an <b>orange stat</b>, then it's even better. You want that hunter
                        to have <b>Purple Aspd</b>. 
                        <br />
                        You'll now have a hunter that requires <b>1 less Aspd line</b>,
                        and that 1 extra line makes a difference — don't underestimate it!
                    </p>
                </li>
                <li>
                    <p className="guide-paragraph" style={{ }}>
                        Any <b>13 Point Heroic-turned-Legendary</b> can be banished and you will gain an <b>Awakening Crystal</b>. Not a bad trade! Basically turning your 
                        <b> Awakening Stone </b> into <b> Awakening Crystal</b>.
                        Now, did you even waste your Awakening Stone? If you followed what I mentioned above,
                        you'll realize that you did not.
                    </p>
                </li>
                <li>
                    <p className="guide-paragraph" style={{ }}>
                        You need to have a mindset that <b>multiple hunters with Purple Aspd</b> are better
                        than a single Ultimate hunter. It's much better to have a few Hunters with Purple Aspd
                        than one Ultimate, because this game can't be done with a single hunter alone
                        — but with multiple hunters working together.
                    </p>
                </li>
            </ul>

            <h2 className="guide-heading">Credit</h2>
            <ul>
                <li>
                    <b>Satursan</b>
                </li>
            </ul>
            
        </section>
    );
}

export default HunterRarities;