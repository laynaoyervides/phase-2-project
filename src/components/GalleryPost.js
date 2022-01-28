import React from "react";
import styles from "./GalleryPost.module.css"

function GalleryPost({galleryItem}) {
    const{name, inputs, outputs} = galleryItem;
    
    return (
        <div className={styles.gallery_post}>
            <h2 className={styles.device_name}>{name}</h2>
            {/* <img src={image} alt={name}></img>  */}
            <h3>Inputs: {inputs}</h3>
            <h3>Outputs: {outputs}</h3>
        </div>
    );
}

export default GalleryPost;