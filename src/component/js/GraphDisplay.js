import React, {useState, useEffect, forwardRef} from "react";
import classes from "../css/GraphDisplay.module.css"
import StepSlider from "./StepSlider";
import Alert from '@mui/material/Alert';
import LoadingIcons from 'react-loading-icons'

const GraphDisplay = forwardRef((props, ref) => {
    const {steps} = props;
    const {urls} = props;
    const {loading} = props;
    const {error} = props;

    const [graph, setGraph] = useState("");
    const [loadingGraph, setLoadingGraph] = useState(false);
    const [currPlotNum, setCurrPlotNum] = useState(0);

    const insertUrls = () => {
        if (urls) {
            setGraph(urls[0]);
        }
    }

    const changePlot = (_, plotNum) => {
        if (plotNum >= 0 && plotNum <= steps) {
            setCurrPlotNum(plotNum);
            setGraph(urls[plotNum]);
        }
    }

    useEffect(() => {
        insertUrls();
        setCurrPlotNum(0);
    }, [urls, steps]);

    useEffect(() => {
        setLoadingGraph(loading);
    }, [loading]);

    return (
        <div className={classes["display-container"]} ref={ref}>
            {loadingGraph ? <LoadingIcons.Grid fill={'#3880ff'} /> :
                error ? <Alert severity="error">Error loading image</Alert> :
                <div className={classes.graphSliderContainer}>
                    <div className={classes.display}>
                        {urls ? <img src={graph} alt="plot"></img> : <></>}
                    </div>
                    <div className={classes["slider-container"]}>
                        <StepSlider changePlot={changePlot} value={currPlotNum} steps={steps}/>
                    </div>
                </div>
            }
        </div>
    );
});

export default GraphDisplay;


/* use for debugging single plots 

const decodeImage = async (res) => {
    return new Promise(resolve => {
        const reader = res.body.getReader();
        resolve(new ReadableStream({
            start(controller) {
                return pump();
                function pump() {
                    return reader.read().then(({ done, value }) => {
                        if (done) {
                            controller.close();
                            return;
                        }
                        controller.enqueue(value);
                        return pump();
                    });
                }
            }
        }))
    })
        .then((stream) => new Response(stream))
        .then((response) => response.blob())
        .then((blob) => URL.createObjectURL(blob))
}
 */