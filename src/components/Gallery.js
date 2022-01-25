import React, {useState} from "react";
import styles from "./Gallery.module.css"
import ImagePost from "./ImagePost";
import InputForm from "./InputForm";
import OutputForm from "./OutputForm";

function Gallery () {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        inputs: [],
        outputs: []
    })

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:3000/gallery.json", {
          method: "POST", 
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(
            {
              name: formData.name, 
              image: formData.image,
              inputs: formData.inputs,
              outputs: formData.outputs
            
            }),
          });
        }
  
  
  
  
    return (
    <div className={styles.gallery_container}>
       <h1>Gallery</h1> 
       <h2>Add your own device to our class gallery</h2>
        <div className={styles.device_container}>
           <form onSubmit={handleSubmit}>
            <div className="styles.device_image_upload">
                <ImagePost formData={formData} handleSubmit={handleSubmit} />
             <div className="styles.input_form">
                <InputForm formData={formData} handleSubmit={handleSubmit} onChange={handleChange}/>
            </div>
            <div className="styles.output_form">
                <OutputForm formData={formData} handleSubmit={handleSubmit} onChange={handleChange}/>
            </div>
            </div>
            <br></br>
            <button type="submit" className={styles.add2_gallery}>Add to Gallery</button>
            </form>
    </div>
    </div>
    );
}

export default Gallery;