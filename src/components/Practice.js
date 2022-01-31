import React from "react";
import styles from "./Practice.module.css"
import DeviceItem from "./DeviceItem"; 
import {devices} from "../api/data";

function Practice () {

     const deviceItems = devices.map(
       (device) => 
         ( <DeviceItem key={device.id} device={device} />));

 
    return (
        <div className={styles.practice_container}>
            <div className={styles.practice_instructions}>        
                <h1>Practice</h1>
                <h3>Consider the device on the left. 
                <br></br>
                Use the form to guess two inputs and two outputs of the device. 
                <br></br>
                Check your work using the 'check' button.</h3>
                <h3>When you are done, go to the <a href="./Gallery">Gallery</a> to post your own computing device.</h3>
            </div>
            <div>
                {deviceItems}
      </div>
        </div>
    )
}

export default Practice;