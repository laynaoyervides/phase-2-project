import React, { useState} from "react";
import styles from "./ImagePost.module.css"

function ImagePost({formData}) {
    
    const [image, setImage] = useState({ preview: "", raw: "" });
    
    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };

     const handleUpload = async e => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("image", image.raw); }
    
         
          fetch("http://localhost:8000/gallery", {
          method: "POST",
          headers: {
            "Content-Type": "multipart/form-data"
          },
          body: formData
        })
      
    return (
        <div className={styles.image_upload_container}>
            <label htmlFor="upload-button">
            {image.preview ? (
                  <img src={image.preview} alt="dummy" width="300" height="300" />
                 ) : (
                    <>
          
                 <h5 className="text-center">Upload your photo</h5>
            </>
            )}

            </label>
            <input type="file"
                    id="upload-button"
                     onChange={handleChange}>
            </input>
            <button onClick={handleUpload} className={styles.upload_button}>
                Upload
            </button>
        </div>
    );
                 };
export default ImagePost;