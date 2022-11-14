import React from "react";

export default class RadioButton extends React.Component {

    render () {
        return (
            <div>
                <input type="radio" defaultChecked={this.props.defaultChecked} value={this.props.value} name={this.props.name}/> {this.props.label}
            </div>
        );
    }
}