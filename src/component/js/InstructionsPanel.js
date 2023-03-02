import React, {forwardRef} from "react";

import classes from "../css/InstructionsPanel.module.css"
import styles from "../css/InstructionsPanel.module.css"

const InstructionsPanel = forwardRef((props, ref) => {

    return (
        <div ref={ref} className={classes.container}>
            <div className={classes.gifContainer}>
                <img id={styles.instgif} src={require("../../walker.gif")}></img>
            </div>
            <div className={classes.textContainer}>
                <div className={classes.textblock}>
                    <h1 id={styles.intro}>What are quantum walks?</h1>
                    <p>Imagine you are lost in a foreign city where you don't speak the language. You are trying to find your
                        way home, but you can't read any of the street signs. You decide to toss a coin every time you come
                        to a fork in the road; if the coin lands heads you'll go right and if it lands tails you'll go left.
                        Given enough time, you <em>should</em> eventually find your home. This is the regular (or <em>classical</em>)
                        solution.
                    </p>
                    <p>The quantum solution, however, allows you to make use of a quantum property called <em>superposition</em>.
                        Superposition allows a quantum element to exist in multiple discrete states at once. In other words, when
                        you toss a quantum coin, it can land with both heads and tails facing up! And a quantum walker can take
                        a step both left and right at the same time to end up in two different locations.
                    </p>
                </div>
                <div className={classes.textblock}>
                    <h1 id={styles.inst}>Instructions</h1>
                    <p>Here's what you need to know in order to start simulating your own quantum walks!</p>
                    <ul>
                        <li>choose whether you want the walker to walk on a line, grid, or cube</li>
                        <li>set the number of states the walker can walk to</li>
                        <li>set the number of steps you want the walker to take</li>
                        <li>click submit and wait for the visualizations to be prepared (this can take a while
                            if you have many states and steps)
                        </li>
                    </ul>
                </div>
                <div className={classes.textblock}>
                    <h1 id={styles.dev}>Development</h1>
                    <p>Research on quantum walks and their implementations is currently in developement. As a result, the 
                        probabilities given for quantum walks on a cube by the simulator <b>are not correct</b>. Please
                        note this when viewing the graphs created.
                    </p>
                </div>
            </div>
        </div>
    );
});

export default InstructionsPanel;