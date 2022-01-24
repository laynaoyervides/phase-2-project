import React from "react";
import styles from "./OutputForm.module.css"
function OutputForm ({formData, handleSubmit}) {
    return (
       <div className={styles.output_form_container}>
           <h2>
            List at least two outputs for your device:
            </h2>
       <form onSubmit={handleSubmit}>
       <input type="text" value={formData.outputs}></input>
                <br></br>
                <input type="text"></input>
        </form>
        </div>
    );
}
export default OutputForm;