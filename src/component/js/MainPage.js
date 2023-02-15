import React, {useState} from "react";
//import PropTypes from "prop-types";

import classes from "../css/MainPage.module.css";
import {GraphDisplay} from "./GraphDisplay";
import InstructionsPanel from "./InstructionsPanel";
import LandingPage from "./LandingPage";
import Options from "./Options";

const MainPage = () => {
    const [urls, setUrls] = useState(null);
    const [loading, setLoading] = useState(false);
    const [steps, setSteps] = useState(null);

    const fetchGraphs = (jsonOptions) => {
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
            setLoading(false);
        }).catch(function(err) {
            throw new Error(err);
        });
    }

    return (
        <div className={classes.container}>
            <LandingPage/>
            <InstructionsPanel/>
            <GraphDisplay steps={steps} loading={loading} urls={urls}/>
            <Options graphHandler={fetchGraphs}/>
        </div>
    );
}

export default MainPage;