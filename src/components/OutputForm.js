import React from "react";
import styles from "./OutputForm.module.css"
function OutputForm () {
    return (
       <div className={styles.output_form_container}>
           <h2>
            List at least two outputs for your device:
            </h2>
       <form>
       <input type="text"></input>
                <br></br>
                <input type="text"></input>
        </form>
        </div>
    );
}
export default OutputForm;