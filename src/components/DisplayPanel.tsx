import React from "react";
import "../style.css";

interface DisplayPanelProps {
    numbers: string;
    //onNumbersChanged: string
}

const DisplayPanel: React.FC<DisplayPanelProps> = ({numbers}) => {
    return (
        <div> 
            <h2 className="output-box">
                <div>
                    {numbers}
                    {/* onChange={(e) => onNumbersChanged(e.target.value)} */}
                </div>
            </h2>
        </div>
    )
};




export default DisplayPanel;