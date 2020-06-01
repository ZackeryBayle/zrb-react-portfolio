import React from 'react';
import ContactForm from "../forms/contact-form";
import SocialFooter from "../helpers/social-footer";

import loginImg from "../../../static/assets/images/auth/login.jpg"
import ProfilePicture from "../../../static/assets/images/round-white.png";

export default function() {
    return(
        <div className="content-page-wrapper">
            <div className="center-content">            
                <div className="img-wrapper">
                    <img src={ProfilePicture} />
                </div>
                <div className="contactForm-about-wrapper">
                    <ContactForm />
                </div>

                <SocialFooter />

            </div>


        </div>
    )
}