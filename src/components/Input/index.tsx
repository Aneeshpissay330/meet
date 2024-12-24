import React from "react";
import "./input.css";

interface InputProps {
    label: string;
    type?: string;
    value: string;
    setValue: React.Dispatch<React.SetStateAction<string>>; // Function to update the state
}

const Input: React.FC<InputProps> = ({
    label,
    type = "text",
    value,
    setValue,
}) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value); // Update the parent state directly
    };

    return (
        <div className="input-container">
            <input
                type={type}
                className="input-field"
                value={value}
                onChange={handleChange}
                required
            />
            <label className={`floating-label ${value.length > 0 ? "filled" : ""}`}>
                {label}
            </label>
        </div>
    );
};

export default Input;