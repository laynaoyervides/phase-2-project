import React from "react";
import styles from "./Home.module.css"

function Home () {
    return (
        <div className={styles.home_container}>
            <h1>What is a Computer?</h1>
            <h3>A computer is a machine that works with information to help people with thinking tasks</h3>
            <img src="../iosp.png" alt="IOSP diagram"></img>
        </div>
    )
}
export default Home; 