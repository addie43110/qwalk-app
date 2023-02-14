import React from "react";
import { SocialIcon } from 'react-social-icons';
import { AwesomeButton } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import classes from "../css/LandingPage.module.css"
import styles from "../css/LandingPage.module.css"

export default class LandingPage extends React.Component {

    render() {
        return (
            <div className={classes.container}>
                <div className={classes.textcontainer}>
                    <div className={classes.title}>
                        <h1>Quantum Walks Visualization Application</h1>
                        <h2><a className={classes.nameLink} id={styles.uvic} data-content="University of Victoria" href="https://www.uvic.ca/ecs/" target="_blank">University of Victoria</a>, BC, Canada</h2>
                        <h3><a className={classes.nameLink} id={styles.addie} data-content="Addie Jordon" href="https://github.com/addie43110" target="_blank">Addie Jordon</a>, 
                            <a className={classes.nameLink} id={styles.samantha} data-content="Samantha Norrie" href="https://github.com/Samantha-norrie" target="_blank">Samantha Norrie</a>, 
                            <a className={classes.nameLink} id={styles.jose} data-content="José Ossorio" href="https://github.com/jmossorio99" target="_blank">José Ossorio</a>, 
                            <a className={classes.nameLink} id={styles.austin} data-content="Austin Hawkins-Seagram" href="https://github.com/T-bop" target="_blank">Austin Hawkins-Seagram</a>
                        </h3>
                    </div>
                    <div className={classes.resources}>
                        <h1>Links</h1>
                        <div className={classes.icons}>
                            <SocialIcon className={classes.scicon} url="https://github.com/addie43110/qwalk-app"/>
                            <SocialIcon className={classes.scicon} url="https://github.com/addie43110/qwalk-app-backend"/>
                            <SocialIcon className={classes.scicon} url="mailto:aedjordon@gmail.com" network="telegram"/>
                        </div>
                    </div>
                </div>
                <div className={classes.rightContainer}>
                    <img src="https://www.delta.tudelft.nl/sites/default/files/images/mechanical_schroedinger_cat.gif"></img>
                    <AwesomeButton type="secondary">Get Started</AwesomeButton>
                </div>
            </div>
        );
    }
}