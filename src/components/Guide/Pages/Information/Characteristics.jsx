

import '../../Guide.css';

function Characteristics() {

    return (
        <section>
            <h2 className="guide-heading">Characteristics List and their effect</h2>
            <p className="guide-paragraph">
                Each hunter has a unique characteristic that comes with the hunter. These characteristics help define the hunter's role in building them up and using them in your team.
            </p>

            <h2 className="guide-heading">Characteristics
            </h2>

            <h3 className="guide-subheading">Positive</h3>
                <ul className="text-card">
                    <li className="guide-paragraph"><b><u>Careless</u></b>: Sells their loot at a 20% discount.</li>
                    <li className="guide-paragraph"><b style={{ color:"#DAA520"}}><u>Charismatic</u></b>: Party abilities are strengthened by 5% in PvP/dungeons/world boss.</li>
                    <li className="guide-paragraph"><b><u>Energetic</u></b>: Stamina consumption is reduced by 20%.</li>

                    
                </ul>

            <h3 className="guide-subheading">Neutral</h3>
            
            
            
            <h3 className="guide-subheading">Negative</h3>
        </section>
    );
}

export default Characteristics;