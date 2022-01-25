import React, {useEffect} from "react";
import styles from "./DeviceItem.module.css";

function DeviceItem({device}){
    const{ id, name, image, inputs, outputs} = device;
    
    useEffect (function checkAnswer(event) {
      event.preventDefault();
      let answer = answerTxt.value;
      return (
      <h3>Here is your answer: {answer}
      <br></br>
      Here are possible correct answers: INPUTS:{inputs} OUTPUTS: {outputs}</h3> 
      );
        })

    return (
        <div className={styles.device_container}>
          <div className={styles.device_image_render}>
                <h2>{id}. {name}</h2>
                <img src={image}></img>
          </div>
          <div className="styles.answers">
              <form onSubmit={checkAnswer}>
                <label>Write your answer here:</label>
                <textarea id="answerTxt" name="answerArea" type="textarea" placeholder="type here"></textarea>
                <button className="btn" form="guess" type="submit" value="submit">Check your answer!</button>
              </form>
          </div>
           
        </div>
    );
}
export default DeviceItem;