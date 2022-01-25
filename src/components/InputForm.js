import React from "react";
import styles from "./ImagePost.module.css"

function InputForm ({formData, onChange, onSubmit}) {
    return (
        <div className={styles.input_form_container}>
             <h2>
                 List at least two inputs for your device:
             </h2>
             <form onSubmit={onSubmit}>
                <input type="text" name="inputs" value={formData.inputs} onChange={onChange}></input>
            </form>
        </div>
    );
}
export default InputForm;