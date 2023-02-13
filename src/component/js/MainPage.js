import React from "react";
//import PropTypes from "prop-types";

import classes from "../css/MainPage.module.css";
import GraphDisplay from "./GraphDisplay";
import InstructionsPanel from "./InstructionsPanel";
import Options from "./Options";

export default class MainPage extends React.Component {
//  static propTypes = {
//    value: PropTypes.string,
//  };

    render() {
        return (
            <div className={classes.container}>
                <InstructionsPanel/>
                <GraphDisplay steps={null}/>
                <Options/>
            </div>
        );
    }
}