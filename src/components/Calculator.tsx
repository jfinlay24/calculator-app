import React from "react";
import "../style.css";

function Calculator() {
    return (
        <div className="main">
            <header className="header">
                <h1>CALC-U-LATER</h1>
            </header>
            <div className="number-area">
                <button type="button" value="1"></button>
            </div>
        </div>
    );
}

export default Calculator