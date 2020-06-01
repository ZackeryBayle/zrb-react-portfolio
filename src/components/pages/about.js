import React from 'react';

import Progress from "../helpers/progress";

import AboutPicture from "../../../static/assets/images/desertsky.jpg";
import ProfilePicture from "../../../static/assets/images/round-white.png";

export default function() {
    return(
        <div className="content-page-wrapper">

            <div className="center-content">
                <div className="img-wrapper">
                    <img src={ProfilePicture} />
                </div>
                <div className="text-about-wrapper">
                    <p>
                        I'm a Front-End Developer in Phoenix, AZ.
                        I have a real passion for UI effects, intuitive & dynamic user experiances.
                        I love projects that push me to learn new ways to think about a problem.
                    </p>
                </div>

                <Progress />


            </div>

        </div>
    );
}