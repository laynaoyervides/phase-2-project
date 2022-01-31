import React from "react";
import styles from "./Home.module.css"

function Home () {
    return (
        <div className={styles.home_container}>
            <h1>What is a Computer?</h1>
            <h3>A computer is a machine that works with information to help people with thinking tasks; all computers input, output, process, and store information. Input and output devices are designed for the computer to receive and communicate information to and from the environment around them.</h3>
            <img src="./iosp.png" alt="IOSP diagram"></img>
            <h3>Use the <a href="./Practice">Practice</a> page to test your knowledge of inputs and outputs on common computing devices, then, add your own device to the <a href="./Gallery"> Gallery</a> page.</h3>
        </div>
    )
}
export default Home; 