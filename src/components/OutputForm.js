import React from "react";
import styles from "./OutputForm.module.css"
function OutputForm ({formData, handleSubmit, onChange}) {
    return (
       <div className={styles.output_form_container}>
           <h2>
            List at least two outputs for your device:
            </h2>
       <form onSubmit={handleSubmit}>
       <input type="text" name="outputs" value={formData.outputs} onChange={onChange}></input>
        </form>
        </div>
    );
}
export default OutputForm;