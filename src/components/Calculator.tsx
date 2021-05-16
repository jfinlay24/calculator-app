import React, { useState } from "react";
import "../style.css";
import CalcButton from "./CalcButton";
import DisplayPanel from "./DisplayPanel";
//import clearButton from "../modules/calculatorMethods";

interface CalculatorProps {
    message: string;
}
const Calculator: React.FC<CalculatorProps> = (mes) => {
    const [calcText, setCalcText] = useState('');
    const [sum, setSum] = useState('0');
    const [operand, setOperand] = useState('');

    const onClick = (calcInput: string) => {
        setCalcText(prevState => {
            return prevState + calcInput ;
        });
        if (operands.includes(calcInput)) {
            if (calcInput === 'C') {
                setCalcText('');
                setSum('');
                setOperand('');
            }
            else if (operand === '') {
                setOperand(calcInput);
                setSum(calcText);
            }
            else {
                const [, num2] = calcText.split(/[\+||\-||\*||\/]/);
                let res: number|string = '';
                if (sum && num2) {
                    console.log(operand);
                    switch(operand) {
                        case '+':
                                console.log("add")
                                res = (parseFloat(sum) + parseFloat(num2));
                                setCalcText(res.toString());
                                setSum(res.toString());
                                setOperand('');                            
                                break;
                        case '-':
                                console.log("minus")
                                res = (parseFloat(sum) - parseFloat(num2));
                                setCalcText(res.toString());
                                setSum(res.toString());
                                setOperand('');
                                break;
                        case '*':
                                console.log("multiply")
                                res = (parseFloat(sum) * parseFloat(num2));
                                setCalcText(res.toString());
                                setSum(res.toString());
                                setOperand('');
                                break;
                        case '/':
                                console.log("divide")
                                res = (parseFloat(sum) / parseFloat(num2));
                                setCalcText(res.toString());
                                setSum(res.toString());
                                setOperand('');
                                break;
                        default:
                            break;
                    }
                }                
            }
        }
        else {
            console.log("a number");
        }
    }

    const operands = ["+", "-", "*", "/", "=", "C"];
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, ...operands];
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

