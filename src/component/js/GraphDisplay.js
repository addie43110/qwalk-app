import React from "react";
import Slider from '@mui/material/Slider';
import "../css/GraphDisplay.css";

export default class GraphDisplay extends React.Component {
    render() {
        return (
            <div className="display-container">
                <div className="display">

                </div>
                <div className="slider-container">
                    <Slider defaultValue={30} step={10} marks min={10} max={110}/>
                </div>
            </div>
        );
    }
}