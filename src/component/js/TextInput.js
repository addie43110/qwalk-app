import React from "react";

const TextInput = (props) => {
    const {label} = props;
    
    return (
        <div className="textinput-container">
            <input type="text"/>
            {label}
        </div>
    );
}

export default TextInput;