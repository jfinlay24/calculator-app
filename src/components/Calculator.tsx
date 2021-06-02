import React, { useState } from "react";
import "../style.css";
import CalcButton from "./CalcButton";
import DisplayPanel from "./DisplayPanel";
import { parseInput, isOperand, CalculateSum,  } from "../modules/calculatorMethods";

interface CalculatorProps {
    message: string;
}
const Calculator: React.FC<CalculatorProps> = (mes) => {
    const [calcText, setCalcText] = useState('');
    const [sum, setSum] = useState('0');
    const operands = ["+", "-", "*", "/", "=", "C"];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ...operands];

    const onClick = (calcInput: string) => {
        if (isOperand(calcInput)) {
            if (sum === '0') {
                setSum(calcText);
                setCalcText('');
            }
            else if (sum !== '0') {
                let newSum: any = CalculateSum(sum, calcText,  calcInput );
                parseInput(newSum);
                setSum('0');
                setCalcText(newSum);
            }
            else {
                setCalcText("An error has occurred, please press \"C\"");
            }
        }
        else if (calcInput === "C") {
            setSum('0');
            setCalcText('');
        }
        else {
            setCalcText(prevState => {
                return prevState + calcInput ;
            });
        }
    }
    // Down here as onClick function delow doesn't work when above the function where its defined.  
    const listItems = numbers.map((number) =>
        <CalcButton buttonNumber={number} onClick={onClick} />
    );

    return (
        <div className="main">
            <header className="header">
                <h1>CALC-U-LATER</h1>
            </header>
            <div>
                <DisplayPanel 
                    numbers={calcText} 
                />
            </div>
            <div className="number-area">
                {listItems}
            </div>
        </div>
    );
}

export default Calculator
