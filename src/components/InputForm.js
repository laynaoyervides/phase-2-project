import React from "react";
import styles from "./ImagePost.module.css"

function InputForm () {
    return (
        <div className={styles.input_form_container}>
             <h2>
                 List at least two inputs for your device:
             </h2>
             <form>
                <input type="text"></input>
                <br></br>
                <input type="text"></input>

            </form>
        </div>
    );
}
export default InputForm;