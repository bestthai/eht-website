import HunterHeroicPoints from '../../../../assets/guide/Information/HunterRarities/Hunter_Heroic_Points.png';
import HunterLegendaryPoints from '../../../../assets/guide/Information/HunterRarities/Hunter_Legendary_Points.png';
import HunterUltimatePoints from '../../../../assets/guide/Information/HunterRarities/Hunter_Ultimate_Points.png';

import '../../Guide.css';

function HunterRarities() {

    return (
        <section>
            <h2 className="guide-heading">Hunter Rarities and Hunter Points</h2>
            <p className="guide-paragraph">
            
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
                {/* You can replace this with your custom emoji image later */}
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
                The following are the Minimum and Maximum Points (Oh, I won't mention Superior Rarity because those are too low
                to even use)
                </i>
            </p>

            <ul>
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

            <h2 className="guide-heading">Hunter Rarities</h2>
            
        </section>
    );
}

export default HunterRarities;