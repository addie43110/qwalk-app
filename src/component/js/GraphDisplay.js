import React from "react";
import Slider from '@mui/material/Slider';
import "../css/GraphDisplay.css";

const SLIDER_NODE_STEP_SIZE = 1;
const DEFAULT_SLIDER_VALUE = 1;
const MIN_SLIDER_NODE_COUNT = 1;

const GraphDisplay=(props)=> {
    const {steps} = props;
    const sliderNodeCount = steps+SLIDER_NODE_STEP_SIZE;
    
    return (
        <div className="display-container">
            <div className="display">

            </div>
            <div className="slider-container">
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