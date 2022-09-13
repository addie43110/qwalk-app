import React from "react";

import Checkbox from "./Checkbox";
import TextInput from "./TextInput";

export default class Options extends React.Component {


    render() {
        return (
            <div className="options-container">
                <h1>Options</h1>
                <h2>Type</h2>
                <div className="type-container">
                    <Checkbox label="line"/>
                    <Checkbox label="grid"/>
                    <Checkbox label="cube"/>
                </div>
                <h2>Dimensions</h2>
                <div className="dimensions-container">
                    <TextInput label="length"/>
                    <TextInput label="width"/>
                    <TextInput label="height"/>
                </div>
                <h2>Cumulative probability?</h2>
                <div className="cumulative-container">
                    <Checkbox label="Y/N"/>
                </div>
                <h2>Number of steps</h2>
                <div className="steps-container">
                    <TextInput label="step(s)"/>
                </div>
            </div>
        );
    }
}