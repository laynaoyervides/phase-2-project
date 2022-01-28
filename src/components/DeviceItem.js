import React, {useState}from "react";
import styles from "./DeviceItem.module.css";


function DeviceItem({device}){
    const{ id, name, image, inputs, outputs} = device;
    const [body, setBody] = useState ("");
    // const [visibility, setVisibility] = useState("hidden");
/* need to add a style to make it visible or not
*/
    const handleSubmit= (e) => {
      e.preventDefault();
       /* set state  vis*/
      }
    

    return (
        <div className={styles.device_container}>
          <div className={styles.device_image_render}>
                <h2>{id}. {name}</h2>
                <img src={image} alt="device"></img>
          </div>
          <div className="styles.answers">
              <form onSubmit={handleSubmit}>
                <label className="styles.label">
                  <h3>Write your answer here:</h3>
                  <br></br>
                  <br></br>
                </label>
                <textarea  
                  id="answerTxt" 
                  value={body}
                  name="answerArea"
                  onChange={(e) => setBody(e.target.value)} 
                  placeholder="type here">
                </textarea>
                <br></br>
                <button className="btn" form="guess" type="submit" value="submit">Check your answer!</button>
              </form>
            <div className="change to state {visibility}">
              <h4>Here is your answer: {body}
              <br></br>
               Here are possible correct answers:
               <br></br> INPUTS:{inputs} 
               <br></br>OUTPUTS: {outputs}</h4>
           </div>
          </div>
           
        </div>
    );
}
export default DeviceItem;