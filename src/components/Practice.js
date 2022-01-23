import React from "react";
import styles from "./Practice.module.css"

function Practice (){
    return (
        <div className={styles.practice_container}>
            <h1>Practice</h1>
            <h2>Use the word bank to choose at least three inputs and outputs of the computing device in the middle</h2>
            <div className="styles.input_check"></div>
            <div className="styles.device_image_render"></div>
            <div className="styles.output_check"></div>
        </div>
    )
}

export default Practice;