import React from "react";
import "../style.css";

interface DisplayPanelProps {
    text: string;
}

const DisplayPanel: React.FC<DisplayPanelProps> = ({text}) => {
    return (
        <button className="button" type="button">
      {text}
    </button>
    )
};




export default DisplayPanel;