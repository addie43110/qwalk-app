import React from "react";
import Slider from '@mui/material/Slider';
import classes from "../css/GraphDisplay.module.css"

const SLIDER_NODE_STEP_SIZE = 1;
const DEFAULT_SLIDER_VALUE = 1;
const MIN_SLIDER_NODE_COUNT = 1;

const GraphDisplay=(props)=> {
    const {steps} = props;
    const sliderNodeCount = steps+SLIDER_NODE_STEP_SIZE;
    
    return (
        <div className={classes["display-container"]}>
            <div className={classes.display}>

            </div>
            <div className={classes["slider-container"]}>
                <Slider 
                    defaultValue={DEFAULT_SLIDER_VALUE} 
                    step={SLIDER_NODE_STEP_SIZE} 
                    marks 
                    min={0} 
                    max={sliderNodeCount} 
                    disabled={sliderNodeCount === MIN_SLIDER_NODE_COUNT}
                />
            </div>
        </div>
    );
}


export default GraphDisplay;