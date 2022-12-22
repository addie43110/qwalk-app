import React from "react";
import classes from "../css/GraphDisplay.module.css"
import StepSlider from "./StepSlider";

const GraphDisplay=(props)=> {
    const {steps} = props;

    return (
        <div className={classes["display-container"]}>
            <div className={classes.display}>

            </div>
            <div className={classes["slider-container"]}>
                <StepSlider steps={steps}/>
            </div>
        </div>
    );
}


export default GraphDisplay;