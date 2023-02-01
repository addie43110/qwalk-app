import React, {useEffect, useState} from "react";
import Checkbox from "./Checkbox";
import RadioButton from "./RadioButton";
import NumberInput from "./NumberInput";
import classes from "../css/Options.module.css";

const LINE = "line";
const GRID = "grid";
const CUBE = "cube";

const Options = () => {
    const [type, setType] = useState(GRID);
    const [magnitude, setMagnitude] = useState(null);
    const [cumulativeProbability, setCumulativeProbability] = useState(false);
    const [steps, setSteps] = useState(null);

    useEffect(() => {
        try {
            if (magnitude === null || steps === null) {
                return;
            }

            if (!Number.isInteger(magnitude) || !Number.isInteger(steps) || magnitude < 1 || steps < 0 || steps > 20) {
                throw new Error("Invalid parameter(s) entered. Magnitude must be an integer greater than or equal to 1 \
                    and steps must be a positive integer no larger than 20.");
            }

            if (type === LINE && !isAPowerOfTwo(magnitude)) {
                throw new Error("Invalid magnitude entered. Magnitude must be a power of 2.");
            }

            let magnitudeSquared = Math.pow(magnitude, 2);
            if (type === GRID && !isAPowerOfTwo(magnitudeSquared)) {
                throw new Error("Invalid magnitude entered. Squared magnitude must be a power of 2.");
            }

            let magnitudeCubed = Math.pow(magnitude, 3);
            if (type === CUBE && !isAPowerOfTwo(magnitudeCubed)) {
                throw new Error("Invalid magnitude entered. Cubed magnitude must be a power of 2.");
            }

            setMagnitude(magnitude);
            setSteps(steps);
        } catch (e) {
            console.error(`${e.message}`)
        }
    }, [type, magnitude, steps]);

    const isAPowerOfTwo = (value) => {
        return ((value & (value-1)) === 0);
    }

    return (
        <div className={classes["options-container"]}>
            <h1>Options</h1>
            <h2>Type</h2>
            <div className={classes["type-container"]}>
                <RadioButton name={'type'} value={LINE} defaultChecked={true} label={'Line'} onChange={event => setType(event.target.value)}/>
                <RadioButton name={'type'} value={GRID} defaultChecked={false} label={'Grid'} onChange={event => setType(event.target.value)}/>
                <RadioButton name={'type'} value={CUBE} defaultChecked={false} label={'Cube'} onChange={event => setType(event.target.value)}/>
            </div>
            <h2>Dimensions</h2>
            <div className={classes["dimensions-container"]}>
                <NumberInput 
                    label="Magnitude" 
                    onBlurEvent={event => setMagnitude(event.target.value.length > 0? Number(event.target.value): null)}
                />
            </div>
            <h2>Cumulative probability?</h2>
            <div className={classes["cumulative-container"]}>
                <Checkbox label="Y/N"/>
            </div>
            <h2>Number of steps</h2>
            <div className={classes["steps-container"]}>
                <NumberInput 
                    label="Step(s)" 
                    onBlurEvent={event => setSteps(event.target.value.length > 0? Number(event.target.value): null)}
                />
            </div>
        </div>
    );
}

export default Options;