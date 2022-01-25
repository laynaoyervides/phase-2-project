import React from "react";
import styles from "./DeviceItem.module.css";

function DeviceItem({device}){
    const{id, name, image, inputs, outputs} = device;

    return (
        <div className={styles.device_container}>
            <div className="styles.wordbank">
              <h3>{inputs}{outputs}</h3>  
            </div>
            <div></div>
            <div className={styles.input_check}>
                
                </div>
            <div className={styles.device_image_render}>
            <h2>{id}{name}</h2>
            {image}
              </div>
            <div className={styles.output_check}>
              </div>
        </div>
    );
}
export default DeviceItem;