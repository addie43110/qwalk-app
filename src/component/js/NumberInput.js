import React from "react";

const NumberInput = (props) => {
    const {label, onBlurEvent} = props;
    
    return (
        <div className="number-input-container">
            <input type="number" onBlur={onBlurEvent}/>
            {label}
        </div>
    );
}

export default NumberInput;