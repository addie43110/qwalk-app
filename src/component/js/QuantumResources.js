import React, { useEffect, useRef } from "react";

import classes from "../css/QuantumResources.module.css"
import styles from "../css/QuantumResources.module.css"

const QuantumResources = () => {

    const openInNewTab = (url) => {
        const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
        if (newWindow) newWindow.opener = null
    }

    const onClickUrl = (url) => {
        return () => openInNewTab(url)
    }

    return (
        <div className={classes.resourcesContainer}>
            <h1>Additional Resources</h1>
            <div className={classes.quantumResourcesContainer}>
                <div className={classes.tile} id={styles.tile1} onClick={onClickUrl('https://qiskit.org/learn')}>
                    <h1>Qiskit Textbook</h1>
                    <p>A popular online textbook for learning any topic in quantum computing.</p>
                </div>
                <div className={classes.tile} id={styles.tile2} onClick={onClickUrl('https://codebook.xanadu.ai')}>
                    <h1>Xanadu Codebook</h1>
                    <p>An interactive series of tutorials for learning quantum computing using PennyLane.</p>
                </div>
                <div className={classes.tile} id={styles.tile3} onClick={onClickUrl('https://idp.springer.com/authorize/casa?redirect_uri=https://link.springer.com/article/10.1007/s11128-012-0432-5&casa_token=cVjtzNCu8-oAAAAA:9wWS926xaBfSy3iZU_sVp9MHpFr9UwZFCR25jkKY_gsmyBGfkFuwssTtxvUrgzTUQ4apne2siS6y_-4F')}>
                    <h1>Quantum Walks: A comprehensive review</h1>
                    <p>By SE Venegas-Andraca.</p>
                </div>
                <div className={classes.tile} id={styles.tile4} onClick={onClickUrl('https://quantumai.google/cirq/experiments/quantum_walks')}>
                    <h1>Google Cirq</h1>
                    <p>Implement a quantum walk in Cirq by following this Google AI tutorial.</p>
                </div>
            </div>
        </div>
    );
};

export default QuantumResources;