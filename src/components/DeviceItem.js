import React from "react";
import styles from "./DeviceItem.module.css";

function DeviceItem({device}){
    const{ id, name, image, inputs, outputs} = device;

    return (
        <div className={styles.device_container}>
          <div className={styles.device_image_render}>
                <h2>{id}. {name}</h2>
                <img src={image}></img>
          </div>
          <div className="styles.wordbank">
              <h3>INPUTS:{inputs} OUTPUTS: {outputs}</h3>  
              <form>
                <label>post two more</label>
              </form>
          </div>
           
        </div>
    );
}
export default DeviceItem;