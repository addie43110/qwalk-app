import React from "react";

export default class Checkbox extends React.Component {

    render () {
        return (
            <div className="checkbox-container">
                <input type="checkbox"/>
                {this.props.label}
            </div>
        );
    }
}