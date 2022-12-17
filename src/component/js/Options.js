import React, {useEffect, useState} from "react";

import Checkbox from "./Checkbox";
import TextInput from "./TextInput";

const LINE = "line";
const WIDTH = "width";
const CUBE = "cube";

const Options = () => {
    const [type, setType] = useState(LINE);
    const [magnitude, setMagnitude] = useState(null);
    const [cumulativeProbability, setCumulativeProbability] = useState(false);
    const [steps, setSteps] = useState(null);

    useEffect(() => {
        try {
            if (magnitude == null || steps == null) {
                return;
            }

            // TODO: Handle err message duplication
            setMagnitude(parseInt(magnitude));
            setSteps(parseInt(steps));
            if (magnitude < 1 || steps < 0 || steps > 20) {
                throw "Invalid parameter(s) entered. Magnitude must be an integer greater than or equal to 1 \
                    and steps must be a positive integer no larger than 20.";
            } 

            if (type === LINE && !(magnitude && !(magnitude & (magnitude - 1)) === 0)) {
                throw "Invalid magnitude entered. Magnitude must be a power of 2.";
            }

            let magnitude_squared = Math.pow(magnitude, 2);
            if (type === WIDTH && !(magnitude_squared && !(magnitude_squared & (magnitude_squared - 1)) === 0)) {
                throw "Invalid magnitude entered. Squared magnitude must be a power of 2.";
            }

            let magnitude_cubed = Math.pow(magnitude, 3);
            if (type === CUBE && !(magnitude_cubed && !(magnitude_cubed & (magnitude_cubed - 1)) === 0)) {
                throw "Invalid magnitude entered. Cubed magnitude must be a power of 2.";
            }

        } catch (e) {
            console.error(e)
        }
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
            {/* TODO: Convert to css modules */}
            <div className="dimensions-container">
                <TextInput label="Magnitude" onChangeFunction={event => setMagnitude(event.target.value)}/>
            </div>
            <h2>Cumulative probability?</h2>
            <div className="cumulative-container">
                <Checkbox label="Y/N" onChangeFunction={event => setCumulativeProbability(event.target.value)}/>
            </div>
            <h2>Number of steps</h2>
            <div className="steps-container">
                <TextInput label="step(s)" onChangeFunction={event => setSteps(event.target.value)}/>
            </div>
        </div>
    );
}

export default Options;