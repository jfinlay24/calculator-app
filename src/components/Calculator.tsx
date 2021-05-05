import React, { useState } from "react";
import "../style.css";
import CalcButton from "./CalcButton";
import DisplayPanel from "./DisplayPanel";

interface CalculatorProps {
    message: string;
}
const Calculator: React.FC<CalculatorProps> = (mes) => {
    const [buttonClicked, setButtonClicked] = useState('');
    const [ num, setNum] = useState<string>('');
    const [calcText, setCalcText] = useState('');
    const onClick = (text: string) => {
        //setButtonClicked(text);
        setCalcText(prevState => {
            return { prevState + text };
        });
    }

    const numbers = [1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", "C", 0, "=", "/"];
    const listItems = numbers.map((number) =>
        <CalcButton buttonNumber={number} onClick={onClick} />
    );

    // const [state, setState] = useState({});
    //     setState(prevState => {
    //     // Object.assign would also work
    //     return {...prevState, ...updatedValues};
    // });

    return (
        <div className="main">
            <header className="header">
                <h1>CALC-U-LATER</h1>
            </header>
            <div>
                {buttonClicked}
            </div>
            <div className="number-area">
                {listItems}
            </div>
        </div>
    );
}

export default Calculator
