import React from "react";

function GalleryPost({galleryItem}) {
    const{name, inputs, outputs} = galleryItem;
    
    return (
        <div>
            <h2>{name}</h2>
            {/* <img src={image} alt={name}></img>  */}
            <h3>Inputs: {inputs}</h3>
            <h3>Outputs: {outputs}</h3>
        </div>
    );
}

export default GalleryPost;