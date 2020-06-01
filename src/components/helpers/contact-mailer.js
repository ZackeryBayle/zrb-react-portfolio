import React, { Component } from 'react';

export default class ContactMailer extends Component {

    constructor(props) {
        super(props);
    }
    render() {
        return ( null );
    }
}




require('dotenv').config();
const nodemailer = require('nodemailer');

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.PASSWORD
        }
    })

    const mailOption = {
        from: 'zackery@bayle.tech',
        to: 'zackery@bayle.tech',
        subject: 'Thank you for contacting me - I will respond shortly',
        text: `Thank you for your interest in my work. Please allow me some time to reply to your email. Thank you Zackery Bayle`
    };

    transporter.sendMail(mailOption, function(err, data) {
        if (err) {
            console.log("error: ", err);
        }else {
            console.log("Email Sent: ", data);
        }
    });
