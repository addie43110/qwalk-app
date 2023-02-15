import React, {useState, useEffect} from "react";
import classes from "../css/GraphDisplay.module.css"
import StepSlider from "./StepSlider";
import LoadingIcons from 'react-loading-icons'

export const GraphDisplay=(props)=>{
    const {steps} = props;

    const [currentTime, setCurrentTime] = useState(0);
    const [graph, setGraph] = useState("");
    const [loadingGraph, setLoadingGraph] = useState(false);

    const getGraph = () => {
        setLoadingGraph(true);
        fetchGraphs({dimensions:3,iterations:2,num_states:8}).then(urls => {
            setGraph(urls[1]);
        });
        setLoadingGraph(false);
    }

    useEffect(() => {
        getGraph();
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

export const fetchGraph = () => {
    return fetch('http://localhost:8000/api/get_qw_test')
        .then(res => decodeImage(res))
        .then((url) => {
            return url;
        })
        .catch(function(err) {
            throw new Error(err);
        });
}

export const fetchGraphs = (jsonOptions) => {
    return fetch('http://localhost:8000/api/get_qw_multiple', { 
      method: 'POST', 
      mode: 'cors', 
      body: JSON.stringify(jsonOptions) // body data type must match "Content-Type" header
    }).then(response => response.json())
    .then(data => {
        var urls = []
        for (var key in data) {
            if (data.hasOwnProperty(key)) {
                urls.push(`data:image/jpeg;base64,${data[key]}`);

            }
        }
        return urls;
    }).catch(function(err) {
        throw new Error(err);
    });
}

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
