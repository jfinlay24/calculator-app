import React from "react";
import "../style.css";
import CalcButton from "./CalcButton"

interface CalculatorProps {
    message: string;
}
const Calculator: React.FC<CalculatorProps> = (mes) => {

    return (
        <div className="main">
            <header className="header">
                <h1>CALC-U-LATER</h1>
            </header>
            <div className="number-area">
                <CalcButton buttonNumber="1"></CalcButton>
                <CalcButton buttonNumber="2"></CalcButton>
                <CalcButton buttonNumber="3"></CalcButton>
                <CalcButton buttonNumber="4"></CalcButton>
                <CalcButton buttonNumber="5"></CalcButton>
                <CalcButton buttonNumber="6"></CalcButton>
                <CalcButton buttonNumber="7"></CalcButton>
                <CalcButton buttonNumber="8"></CalcButton>
                <CalcButton buttonNumber="9"></CalcButton>

            </div>
        </div>
    );
}

export default Calculator
