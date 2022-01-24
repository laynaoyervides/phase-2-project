import React, {useState, useEffect} from "react";
import styles from "./Practice.module.css"
import DeviceItem from "./DeviceItem"; 

function Practice (){
    //set up varibale in state
    const [devices, setDevices] = useState([]);
    //fetch the devices and then assign them to the state variable after the page has loaded
    useEffect(
        () =>
        fetch("http://localhost:3000/devices")
        .then (res => res.json())
        .then ((devices) => {
                setDevices(devices);
            })
    );

    const devicePractice = devices.map( (device) => (
        <DeviceItem key={device.id} device={device.name} image={device.image} inputs={device.inputs} outputs={device.outputs}/>
      ));

    return (
        <div className={styles.practice_container}>
            <h1>Practice</h1>
            <h2>Use the word bank to choose at least three inputs and outputs of the computing device in the middle</h2>
            {devicePractice}
            
        </div>
    )
}

export default Practice;