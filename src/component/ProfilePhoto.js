import React from "react";
import img from "./cyrine.jpg"

    const Photo = () => {
        return(
            <div>
                <h1 className="image_titre"> Profile picture</h1>
                <img className="photo_img" src={img} alt='0'/>
            </div>
        );
    };
    export default Photo;