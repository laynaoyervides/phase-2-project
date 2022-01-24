import React from "react";
import styles from "./Gallery.module.css"
import ImagePost from "./ImagePost";
import InputForm from "./InputForm";
import OutputForm from "./OutputForm";

function Gallery () {
    return (
    <div className={styles.gallery_container}>
       <h1>Gallery</h1> 
       <h2>Add your own device to our class gallery</h2>
        <div className={styles.device_container}>
            <div className="styles.device_image_upload">
                <ImagePost />
             <div className="styles.input_form">
                <InputForm />
            </div>
            <div className="styles.output_form">
                <OutputForm />
            </div>
        </div>
    </div>
    </div>
    );
}

export default Gallery;