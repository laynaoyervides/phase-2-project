import React, {useState} from "react";

function ImagePost() {
    
    const [image, setImage] = useState({ preview: "", raw: "" });
    
    const handleChange = e => {
        if (e.target.files.length) {
          setImage({
            preview: URL.createObjectURL(e.target.files[0]),
            raw: e.target.files[0]
          });
        }
      };
    return (
        <div>
            <label>
            {image.preview ? (
                  <img src={image.preview} alt="dummy" width="300" height="300" />
                 ) : (
                    <>
                <span className="fa-stack fa-2x mt-3 mb-2">
                    <i className="fas fa-circle fa-stack-2x" />
                    <i className="fas fa-store fa-stack-1x fa-inverse" />
                </span>
                 <h5 className="text-center">Upload your photo</h5>
            </>
            )}

            </label>
            <input type="file"
                    id="upload-button"
                    style={{ display: "none" }}
                     onChange={handleChange}>
            </input>
            <button >
                Upload
            </button>
        </div>
    );
}
export default ImagePost;