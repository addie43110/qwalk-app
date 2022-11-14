import React from "react";

import RadioButton from "./RadioButton";
import TextInput from "./TextInput";

export default class Options extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            type: 'line',
        }
    }

    types = ['line', 'grid', 'cube'];

    onTypeChange = (event) => {
        this.setState(prevState => ({
          ...prevState,
          type: event.target.value,
        }));
    }

    render() {
        return (
            <div className="options-container">
                <h1>Options</h1>
                <h2>Type</h2>
                <div className="type-container" onChange={this.onTypeChange}>
                    {this.types.map(type => <RadioButton defaultChecked={type === 'line'} value={type} name={'type'} label={type.charAt(0).toUpperCase() + type.slice(1)} />)}
                </div>
                <h2>Dimensions</h2>
                <div className="dimensions-container">
                    <TextInput label="length"/>
                    <TextInput label="width"/>
                    <TextInput label="height"/>
                </div>
                <h2>Cumulative probability?</h2>
                <div className="cumulative-container">
                    <RadioButton label="Y/N"/>
                </div>
                <h2>Number of steps</h2>
                <div className="steps-container">
                    <TextInput label="step(s)"/>
                </div>
            </div>
        );
    }
}