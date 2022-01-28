import React from "react";

function Name ({formData, onChange}) {
    return (
        <div>
             <label>
                Name of the device :           
            </label>
            <input type="text" name="name" value={formData.name} onChange={onChange}></input>
        </div>
    );
}
export default Name;