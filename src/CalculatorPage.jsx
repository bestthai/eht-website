import React from "react";
import { useNavigate } from "react-router-dom";
import CalculatorCard from "./utils/CalculatorCard";

import atkSpdImage from "./assets/calculatorCard/atkspd.png";
import movementImage from "./assets/calculatorCard/movement.png";


function CalculatorPage()
{
    const navigate = useNavigate();

    return (
        <div className="calculator-page">
            <h2 className="calculator-page-title">Choose a Calculator</h2>

            <div className="calculator-card-grid">
                <CalculatorCard
                    img={atkSpdImage}
                    title="ATK SPD Calculator"
                    description="Calculate the attack speed require for your hunter"
                    onClick={(e) => navigate("atkspd")}
                />

                <CalculatorCard 
                    img={movementImage}
                    title="Movement Speed Calculator"
                    description="Calculate the hunter attack amplified by the wind of greaves."
                    onClick={(e) => navigate("movement")}
                />
            </div>

        </div>
    );
}

export default CalculatorPage;