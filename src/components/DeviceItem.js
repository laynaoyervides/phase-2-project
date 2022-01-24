import React from "react";
import styles from "./DeviceItem.module.css";

function DeviceItem({devices}){
    const{id, name, inputs, outputs} = devices;
    
    return (
        <div className={styles.device_container}>
            <div className={styles.input_check}>{inputs}</div>
            <div className={styles.device_image_render}>{image}</div>
            <div className={styles.output_check}>{outputs}</div>
        </div>
    );
}
export default DeviceItem;