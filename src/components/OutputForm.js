import React from "react";
import styles from "./OutputForm.module.css"
function OutputForm ({formData, onChange}) {
    return (
       <div className={styles.output_form_container}>
           <label> 
            List at least two outputs for your device :
            </label>
      
       <input type="text" name="outputs" value={formData.outputs} onChange={onChange}></input>
       
        </div>
    );
}
export default OutputForm;