import React from 'react';

import Progress from "../helpers/progress";

import AboutPicture from "../../../static/assets/images/desertsky.jpg";
import ProfilePicture from "../../../static/assets/images/round-white.png";

export default function() {
    return(
        <div className="content-page-wrapper">
            <div 
                className="left-column" 
                style={{
                    background: "url("+ AboutPicture + ") no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center"
                }} 
            
            >
                <Progress />
            </div>

            <div className="right-column">
                <img src={ProfilePicture} />
                <p>
                    I'm a Front-End Developer in Phoenix, AZ.<br/>
                    I have a real passion for UI effects, intuitive & dynamic user experiances.<br/>
                    I love projects that push me to learn new ways to think about a problem.
                </p>
            </div>

        </div>
    );
}