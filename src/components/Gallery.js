import React, {useState, useEffect} from "react";
import styles from "./Gallery.module.css"
import InputForm from "./InputForm";
import OutputForm from "./OutputForm";
import GalleryPost from "./GalleryPost";
import Name from "./Name";


function Gallery () {
    const [formData, setFormData] = useState({
        name: "",
        image: "",
        inputs: "",
        outputs: ""
    })
  const [gallery, setGallery] = useState([]);

  /*const [image, setImage] = useState({ preview: "", raw: "" });
  
 /*  const handleImgChange = e => {
    if (e.target.files.length) {
      setImage({
        preview: URL.createObjectURL(e.target.files[0]),
        raw: e.target.files[0]
      });
    }
  }; */
  /* const handleUpload = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      image: image.preview,
    });} */
  

  useEffect( () =>
      fetch("http://localhost:8000/gallery")
      .then (res => res.json())
      .then ((galleryItem) => {
              setGallery(galleryItem);
      }),[])
  

    function handleChange(event) {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      }
  
      
    function handleSubmit(event) {
        event.preventDefault();
        fetch("http://localhost:8000/gallery", {
          method: "POST", 
          headers: {"Content-Type": "application/json",},
          body: JSON.stringify(
            {
              name: formData.name, 
              image: formData.image.preview,
              inputs: formData.inputs,
              outputs: formData.outputs
            
            }),
          })
          .then (res => res.json())
          .then ((data) =>{
            setGallery([...gallery, data]);
          })
        }

  const galleryView = gallery.map((galleryItem)=> {
    return(
    <GalleryPost key={galleryItem.id} galleryItem={galleryItem}/>
     );
   })
  
  
    return (
     <div className={styles.gallery_container}>
         
         <div className={styles.device_container}>
         <h1>GALLERY</h1> 
         <h2>Add your own device to our class gallery</h2>
           
           <form onSubmit={handleSubmit}>
             <div className="styles.device_image_upload">
                  <div className={styles.image_upload_container}> 
                     {/* <label htmlFor="upload-button">
                         {image.preview ? (
                            <img src={image.preview} name="image" value={formData.image.preview} alt="dummy" width="300" height="300" />
                            ) : (
                             <>
                           <h5 className="text-center">Upload your photo</h5>
                             </>
                           )}
                     </label>
                       <input type="file"
                              id="upload-button"
                               onChange={handleImgChange}>
                       </input>
                   <button onClick={handleUpload} className={styles.upload_button}>
                         Upload
                   </button> */}
              </div>        
            <div>
                <Name formData={formData} onChange={handleChange} />
                </div>     
              <div className="styles.input_form">
                <InputForm formData={formData} onChange={handleChange}/>
              </div>
              <div className="styles.output_form">
                <OutputForm formData={formData} onChange={handleChange}/>
            </div>
           </div>
          <br></br>
        <button type="submit" className={styles.add2_gallery}>Add to Gallery</button>
      </form>
    </div>
        <div className="styles.gallery_render">
         {galleryView}
        </div>
    </div>
    );
}

export default Gallery;