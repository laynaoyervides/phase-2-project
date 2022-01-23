import React from "react";
import styles from "./Gallery.module.css"

function Gallery () {
    return (
    <div className={styles.gallery_container}>
       <h1>Gallery</h1> 
       <h2>Add your own device to our class gallery</h2>
       <div className="styles.input_form"></div>
       <div className="styles.device_image_render"></div>
       <div className="styles.output_form"></div>
    </div>
    );
}

export default Gallery;