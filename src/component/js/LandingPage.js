import { requirePropFactory } from "@mui/material";
import React from "react";
import { AwesomeButton, AwesomeButtonSocial } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';

import classes from "../css/LandingPage.module.css"
import styles from "../css/LandingPage.module.css"

const LandingPage = (props) => {
    const {scrollIntoView} = props;
    const {isMobile} = props;

    if (isMobile) {
        return (
            <div className={classes.container}>
                <img id={styles.qwgif} src={require("../../qw-gif.gif")}></img>
                <div className={classes.textcontainer}>
                    <div className={classes.title}>
                        <h1>Quantum Walks Visualization Application</h1>
                        <h2><a className={classes.nameLink} id={styles.uvic} data-content="University of Victoria" href="https://www.uvic.ca/ecs/" target="_blank">University of Victoria</a>, BC, Canada</h2>
                        <h3><a className={classes.nameLink} id={styles.addie} data-content="Addie Jordon" href="https://github.com/addie43110" target="_blank">Addie Jordon</a>,&nbsp;
                            <a className={classes.nameLink} id={styles.samantha} data-content="Samantha Norrie" href="https://github.com/Samantha-norrie" target="_blank">Samantha Norrie</a>,&nbsp;
                            <a className={classes.nameLink} id={styles.jose} data-content="José Ossorio" href="https://github.com/jmossorio99" target="_blank">José Ossorio</a>,&nbsp;
                            <a className={classes.nameLink} id={styles.austin} data-content="Austin Hawkins-Seagram" href="https://github.com/T-bop" target="_blank">Austin Hawkins-Seagram</a>
                        </h3>
                    </div>
                    <div className={classes.rightContainer}>
                        <AwesomeButton
                            type="secondary"
                            onMouseUp={scrollIntoView}
                            className={classes.awsbtn}
                            >Get Started</AwesomeButton>
                    </div>
                    <div className={classes.resources}>
                        <h1>Links</h1>
                        <div className={classes.icons}>
                            <AwesomeButtonSocial type="github" className={classes.scicon} href="https://github.com/addie43110/qwalk-app" target="_blank">Frontend</AwesomeButtonSocial>
                            <AwesomeButtonSocial type="github" className={classes.scicon} href="https://github.com/addie43110/qwalk-app-backend" target="_blank">Backend</AwesomeButtonSocial>
                            <AwesomeButtonSocial type="messenger" className={classes.scicon} href="mailto:aedjordon@gmail.com" target="_blank">Contact</AwesomeButtonSocial>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className={classes.container}>
            <div className={classes.textcontainer}>
                <div className={classes.title}>
                    <h1>Quantum Walks Visualization Application</h1>
                    <h2><a className={classes.nameLink} id={styles.uvic} data-content="University of Victoria" href="https://www.uvic.ca/ecs/" target="_blank">University of Victoria</a>, BC, Canada</h2>
                    <h3><a className={classes.nameLink} id={styles.addie} data-content="Addie Jordon" href="https://github.com/addie43110" target="_blank">Addie Jordon</a>,&nbsp;
                        <a className={classes.nameLink} id={styles.samantha} data-content="Samantha Norrie" href="https://github.com/Samantha-norrie" target="_blank">Samantha Norrie</a>,&nbsp;
                        <a className={classes.nameLink} id={styles.jose} data-content="José Ossorio" href="https://github.com/jmossorio99" target="_blank">José Ossorio</a>,&nbsp;
                        <a className={classes.nameLink} id={styles.austin} data-content="Austin Hawkins-Seagram" href="https://github.com/T-bop" target="_blank">Austin Hawkins-Seagram</a>
                    </h3>
                </div>
                <div className={classes.resources}>
                    <h1>Links</h1>
                    <div className={classes.icons}>
                        <AwesomeButtonSocial type="github" className={classes.scicon} href="https://github.com/addie43110/qwalk-app" target="_blank">Frontend</AwesomeButtonSocial>
                        <AwesomeButtonSocial type="github" className={classes.scicon} href="https://github.com/addie43110/qwalk-app-backend" target="_blank">Backend</AwesomeButtonSocial>
                        <AwesomeButtonSocial type="messenger" className={classes.scicon} href="mailto:aedjordon@gmail.com" target="_blank">Contact</AwesomeButtonSocial>
                    </div>
                </div>
            </div>
            <div className={classes.rightContainer}>
                <img id={styles.qwgif} src={require("../../qw-gif.gif")}></img>
                <AwesomeButton
                    type="secondary"
                    onMouseUp={scrollIntoView}
                    className={classes.awsbtn}
                    >Get Started</AwesomeButton>
            </div>
        </div>
    );
}

export default LandingPage;