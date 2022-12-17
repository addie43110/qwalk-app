import React from "react";

const TextInput = (props) => {
    const {label, onChangeFunction} = props;
    
    return (
        <div className="textinput-container">
            <input type="text" onChange={onChangeFunction}/>
            {label}
        </div>
    );
}

export default TextInput;