import React, {useState, useRef} from "react";

import classes from "../css/MainPage.module.css";
import GraphDisplay from "./GraphDisplay";
import InstructionsPanel from "./InstructionsPanel";
import LandingPage from "./LandingPage";
import Options from "./Options";
import QuantumResources from "./QuantumResources";

const MainPage = (props) => {
    const [urls, setUrls] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errorLoading, setErrorLoading] = useState(false);
    const [steps, setSteps] = useState(null);

    const {isMobile} = props;

    const instructionsRef = useRef(null);
    const graphDisplayRef = useRef(null);

    const fetchGraphs = (jsonOptions) => {
        if(isMobile) scrollIntoViewGraphSubmit();
        setLoading(true);
        setSteps(jsonOptions['iterations']);
        fetch('http://localhost:8000/api/get_qw_multiple', { 
          method: 'POST', 
          mode: 'cors', 
          body: JSON.stringify(jsonOptions) 
        }).then(response => response.json())
        .then(data => {
            var urls = []
            for (var key in data) {
                if (data.hasOwnProperty(key)) {
                    urls.push(`data:image/jpeg;base64,${data[key]}`);
    
                }
            }
            setUrls(urls);
            setErrorLoading(false);
            setLoading(false);
        }).catch(function(err) {
            setLoading(false);
            setErrorLoading(true);
            throw new Error(err);
        });
    }

    const scrollIntoView = () => {
        instructionsRef.current.scrollIntoView({block: 'start', inline: 'nearest', behavior: 'smooth'});
    }

    const scrollIntoViewGraphSubmit = () => {
        graphDisplayRef.current.scrollIntoView({block: 'center', inline: 'center', behaviour: 'smooth'});
    }

    if (isMobile) {
        return (
            <div className={classes.container}>
                <LandingPage scrollIntoView={scrollIntoView} isMobile={isMobile}/>
                <InstructionsPanel ref={instructionsRef} isMobile={isMobile}/>
                <div className={classes.visualizationContainer}>
                    <Options graphHandler={fetchGraphs}/>
                    <GraphDisplay ref={graphDisplayRef} steps={steps} loading={loading} error={errorLoading} urls={urls}/>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <LandingPage scrollIntoView={scrollIntoView} isMobile={isMobile}/>
            <InstructionsPanel ref={instructionsRef} isMobile={isMobile}/>
            <QuantumResources isMobile={isMobile}/>
            <div className={classes.visualizationContainer}>
                <GraphDisplay steps={steps} loading={loading} error={errorLoading} urls={urls}/>
                <Options graphHandler={fetchGraphs}/>
            </div>
        </div>
    );
}

export default MainPage;