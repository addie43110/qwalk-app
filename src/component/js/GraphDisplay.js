import React, {useState, useEffect} from "react";
import classes from "../css/GraphDisplay.module.css"
import StepSlider from "./StepSlider";

const GraphDisplay=(props)=>{
    const {steps} = props;
    
    const [currentTime, setCurrentTime] = useState(0);
    const [graph, setGraph] = useState();

    /*useEffect(() => {
        fetch('/api/get_graph_test')
            .then(res => res.text())
            .then(html => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, "text/html");
                var docArticle = doc.querySelector('.test').innerHTML;
                console.log(html);
                
        })
        .catch(function(err) {  
            console.log('Failed to fetch page: ', err);  
        });
    }, []);*/

    return (
        <div className={classes["display-container"]}>
            <div className={classes.display}>
                <div className="test"></div>
                <img src="/api/get_qw_test" alt="plot"></img>
            </div>
            <div className={classes["slider-container"]}>
                <StepSlider steps={steps}/>
            </div>
        </div>
    );
}


export default GraphDisplay;