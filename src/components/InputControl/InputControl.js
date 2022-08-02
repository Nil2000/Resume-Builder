import React from "react";
import './input-control.css';
export default function InputControl({label,...props}){
    return (
        <div className="input-container">
            {label && <label>{label}</label>}
            <input type="text" {...props} />
        </div>
    )
}