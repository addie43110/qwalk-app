import React from "react";
import Slider from '@mui/material/Slider';
import classes from "../css/GraphDisplay.module.css"

const SLIDER_NODE_STEP_SIZE = 1;
const DEFAULT_SLIDER_VALUE = 1;
const MIN_SLIDER_NODE_COUNT = 1;

const GraphDisplay=(props)=> {
    const {steps} = props;

    return (
        <div className={classes["display-container"]}>
            <div className={classes.display}>

            </div>
            <div className={classes["slider-container"]}>
                <Slider 
                    defaultValue={DEFAULT_SLIDER_VALUE} 
                    step={SLIDER_NODE_STEP_SIZE} 
                    marks={steps > 0? true: false}
                    min={MIN_SLIDER_NODE_COUNT} 
                    max={steps > 0? steps + SLIDER_NODE_STEP_SIZE: steps} 
                    disabled={steps === null? true: false}
                />
            </div>
        </div>
    );
}


export default GraphDisplay;