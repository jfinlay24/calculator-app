import React from "react";
import "../style.css";
import CalcButton from "./CalcButton"

interface CalculatorProps {
    message: string;
}
const Calculator: React.FC<CalculatorProps> = (mes) => {
    const onClick = (text: string) => {
        alert('in parent: ' + text);
    }
    return (
        <div className="main">
            <header className="header">
                <h1>CALC-U-LATER</h1>
            </header>
            <div className="number-area">
                <CalcButton buttonNumber="1" onClick={onClick}></CalcButton>
                <CalcButton buttonNumber="2" onClick={onClick}></CalcButton> 
                <CalcButton buttonNumber="3" onClick={onClick}></CalcButton>
                <CalcButton buttonNumber="4" onClick={onClick}></CalcButton>
                <CalcButton buttonNumber="5" onClick={onClick}></CalcButton>
                <CalcButton buttonNumber="6" onClick={onClick}></CalcButton>
                <CalcButton buttonNumber="7" onClick={onClick}></CalcButton>
                <CalcButton buttonNumber="8" onClick={onClick}></CalcButton>
                <CalcButton buttonNumber="9" onClick={onClick}></CalcButton>

            </div>
        </div>
    );
}

export default Calculator
