import React from "react";

function CalculatorCard({ img, title, description, onClick})
{
    return (
        <div className="calc-card-container" onClick={onClick}>
            <div className="calc-card-image">
                <img src={img} alt={title}></img>
            </div>
            <div className="calc-card-title">
                <h3>{title}</h3>
            </div>
            <div className="calc-card-desc">
                <p>{description}</p>
            </div>
        </div>
    );
}

export default CalculatorCard