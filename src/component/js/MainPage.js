import React from "react";
//import PropTypes from "prop-types";

import "../css/MainPage.css";
import GraphDisplay from "./GraphDisplay";
import Options from "./Options";

export default class MainPage extends React.Component {
//  static propTypes = {
//    value: PropTypes.string,
//  };

    render() {
        return (
            <div className="container">
                <GraphDisplay steps={0}/>
                <Options/>
            </div>
        );
    }
}