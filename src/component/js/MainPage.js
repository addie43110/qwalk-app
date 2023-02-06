import React, { useState } from "react";
import { Alert} from 'antd';
//import PropTypes from "prop-types";
import classes from "../css/MainPage.module.css";
import GraphDisplay from "./GraphDisplay";
import Options from "./Options";

const MainPage = () => {
    const [errorMessage, setErrorMessage] = useState(null);
//  static propTypes = {
//    value: PropTypes.string,
//  };

    return (
        <>
            {
                errorMessage &&
                <Alert message={errorMessage} 
                type="error" 
                showIcon 
                closable 
                banner
                onClose={() => setErrorMessage(null)}
                />
            }
            <div className={classes["page-container"]}>
                <div className={classes["content-container"]}>
                    <GraphDisplay steps={null}/>
                    <Options setErrorMessage={setErrorMessage}/>
                </div>
            </div>
        </>
    );
}

export default MainPage;