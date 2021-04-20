import React from "react";
import "../style.css";
interface CalcButtonProps {
  buttonNumber: any;
  onClick: (text: string) => void;
}

const CalcButton: React.FC<CalcButtonProps> = ({ buttonNumber, onClick }) => {
  const buttonClick = () => {
    alert(buttonNumber);
    console.log(buttonNumber);
    onClick(buttonNumber);
  }



  return (
    <button className="button" type="button" onClick={buttonClick}>
      {buttonNumber}
    </button>
  );
};

export default CalcButton;

