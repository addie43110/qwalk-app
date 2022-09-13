import React from "react";

export default class TextInput extends React.Component {
    
    render () {
        return (
            <div className="textinput-container">
                <input type="text"/>
                {this.props.label}
            </div>
        );
    }
}