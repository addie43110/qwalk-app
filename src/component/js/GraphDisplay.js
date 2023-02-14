import React, {useState, useEffect} from "react";
import classes from "../css/GraphDisplay.module.css"
import StepSlider from "./StepSlider";
import LoadingIcons from 'react-loading-icons'

const GraphDisplay=(props)=>{
    const {steps} = props;

    const [currentTime, setCurrentTime] = useState(0);
    const [graph, setGraph] = useState("");
    const [loadingGraph, setLoadingGraph] = useState(false);

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
    const fetchGraph = () => {
        console.log('here');
        setLoadingGraph(true);
        fetch('http://localhost:8000/api/get_qw_test')
            .then(res => decodeImage(res))
            .then((url) => {
                setGraph(url);
                setLoadingGraph(false);
                console.log('done');
            })
            .catch(function(err) {
                setLoadingGraph(false);
                console.log('Failed to fetch page: ', err);
            });
    }

    useEffect(() => {
        fetchGraph();
    }, []);

    return (
        <div className={classes["display-container"]}>
            {loadingGraph ? <LoadingIcons.Grid fill={'#3880ff'} /> :
                <>
                    <div className={classes.display}>
                        <div className="test"></div>
                        <img src={graph} alt="plot"></img>
                    </div>
                    <div className={classes["slider-container"]}>
                        <StepSlider steps={steps}/>
                    </div>
                </>
            }
        </div>
    );
}


export default GraphDisplay;