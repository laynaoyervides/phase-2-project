import React from "react";
import styles from "./ImagePost.module.css"

function InputForm ({formData, onChange, onSubmit}) {
    return (
        <div className={styles.input_form_container}>
             <label>
                 List at least two inputs for your device:
             </label>
           
                <input type="text" name="inputs" value={formData.inputs} onChange={onChange}></input>
        
        </div>
    );
}
export default InputForm;