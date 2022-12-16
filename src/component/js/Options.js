import React, {useEffect, useState} from "react";

import Checkbox from "./Checkbox";
import TextInput from "./TextInput";

const LINE = "line";
const WIDTH = "width";
const CUBE = "cube";

const Options = () => {
    const [type, setType] = useState(null);
    const [magnitude, setMagnitude] = useState(null);
    const [cumulativeProbability, setCumulativeProbability] = useState(false);
    const [steps, setSteps] = useState(null);

    useEffect(() => {
        let errMessage = "";
        if (!Number.isInteger(magnitude)) {
            errMessage += "Invalid magnitude entered. Magnitude must be an integer."
        }
        if (!Number.isInteger(magnitude) && (steps < 0 || steps > 20)) {
            errMessage += "Invalid number of steps entered. Value must be a number between 0 and 20.\n";
        }

        if (errMessage) {
            console.log(errMessage);
            return
        }

        if (type === LINE && !(magnitude && !(magnitude & (magnitude - 1)) === 0)) {
            errMessage += "Invalid magnitude entered. Magnitude must be a power of 2.";

        }
        let magnitude_squared = Math.pow(magnitude, 2);

        if (type === WIDTH && !(magnitude_squared && !(magnitude_squared & (magnitude_squared - 1)) === 0)) {
            errMessage += "Invalid magnitude entered. Squared magnitude must be a power of 2.";

        }
        let magnitude_cubed = Math.pow(magnitude, 3);

        if (type === CUBE && !(magnitude_cubed && !(magnitude_cubed & (magnitude_cubed - 1)) === 0)) {
            errMessage += "Invalid magnitude entered. Cubed magnitude must be a power of 2.";

        }

        console.log(errMessage);
    }, [type, magnitude, cumulativeProbability, steps]);


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
                <TextInput label="Magnitude"/>
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

export default Options;