import React from "react";
import Slider from '@mui/material/Slider';
import "../css/GraphDisplay.css";

const STEP_SIZE = 1;
const DEFAULT_STEP_VALUE = 0;

export default class GraphDisplay extends React.Component {
    render() {
        return (
            <div className="display-container">
                <div className="display">

                </div>
                <div className="slider-container">
                    <Slider 
                        defaultValue={DEFAULT_STEP_VALUE} 
                        step={STEP_SIZE} 
                        marks 
                        min={0} 
                        max={this.props.steps} 
                        disabled={this.props.steps === 0}
                    />
                </div>
            </div>
        );
    }
}