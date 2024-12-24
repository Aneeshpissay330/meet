import React from "react";
import "./button.css";

interface OutlinedButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<OutlinedButtonProps> = ({
  label,
  onClick,
}) => {
  return (
    <div className="button-container">
      <button className="button" onClick={onClick}>
        {label}
      </button>
    </div>
  );
};

export default Button;