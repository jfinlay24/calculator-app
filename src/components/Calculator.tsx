import React from "react";
import "../style.css";
import CalcButton from "./CalcButton"

interface CalculatorProps {
    message: string;
}
const Calculator: React.FC<CalculatorProps> = (mes) => {
    const onClick = (text: string) => {
        // alert('in parent: ' + text);
    }
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const listItems = numbers.map((number) =>
        <CalcButton buttonNumber={number} onClick={onClick} />
    );

    return (
        <div className="main">
            <header className="header">
                <h1>CALC-U-LATER</h1>
            </header>
            <div className="number-area">
                {listItems}
            </div>
        </div>
    );
}

export default Calculator
