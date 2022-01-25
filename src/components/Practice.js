import React from "react";
import styles from "./Practice.module.css"
import DeviceItem from "./DeviceItem"; 
import {devices} from "../api/data";

function Practice (){
   const deviceItems = devices.map(
       (device) => 
         ( <DeviceItem key={device} device={device} />));

    return (
        <div className={styles.practice_container}>
            <h1>Practice</h1>
            <h2>Use the word bank to choose at least three inputs and outputs of the computing device in the middle</h2>
            <div>
                {deviceItems}
      </div>
        </div>
    )
}

export default Practice;