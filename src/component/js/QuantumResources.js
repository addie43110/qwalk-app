import React, { useEffect, useRef } from "react";

import classes from "../css/QuantumResources.module.css"
import styles from "../css/QuantumResources.module.css"

const QuantumResources = (props) => {
    const {isMobile} = props;

    return (
        <div className={classes.resourcesContainer}>
            <h1>Additional Resources</h1>
            <div className={classes.quantumResourcesContainer}>
                <div className={classes.tile} id={styles.tile1}>
                    <h1>Qiskit Textbook</h1>
                    <p>A popular online textbook for learning any topic in quantum computing.</p>
                </div>
                <div className={classes.tile} id={styles.tile2}>
                    <h1>Xanadu Codebook</h1>
                    <p>An interactive series of tutorials for learning quantum computing using PennyLane.</p>
                </div>
                <div className={classes.tile} id={styles.tile3}>
                    <h1>Quantum Walks: A comprehensive review</h1>
                    <p>By SE Venegas-Andraca.</p>
                </div>
                <div className={classes.tile} id={styles.tile4}>
                    <h1>Google Cirq</h1>
                    <p>Implement a quantum walk in Cirq by following this Google AI tutorial.</p>
                </div>
            </div>
        </div>
    );
};

export default QuantumResources;