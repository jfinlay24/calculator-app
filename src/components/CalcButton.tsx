import React from "react";
import "../style.css";
interface CalcButtonProps {
  buttonNumber: string;
}

const CalcButton: React.FC<CalcButtonProps> = ({ buttonNumber }) => {
  const buttonClick = () => {
    alert(buttonNumber);
    console.log(buttonNumber);
  }
  return (
    <button className="button" type="button" onClick={buttonClick}>
      {buttonNumber}
    </button>
  );
};

export default CalcButton;

