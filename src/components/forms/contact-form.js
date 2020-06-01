


// const nodemailer = require("nodemailer");
import React, { Component } from 'react';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import axios from "axios";



export default class ContactForm extends Component {
    constructor(props){
        super(props);

        this.state = {
            name: "",
            email: "",
            message: "",
            errorText: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {

        this.setState({
            [event.target.name]: event.target.value,
            errorText: ""
        })
    }

    handleSubmit(e) {
        const { name, email, message } = this.state   
        //Mailer


        e.preventDefault();


        axios({
            method: "POST", 
            url:"http://localhost:3002/", 
            data: {
                name: e.name,   
                email: e.email,  
                messsage: e.message
            }
        }).then((response)=>{
            if (response.data.msg === 'success'){
                alert("Message Sent."); 
                this.resetForm()
            }else if(response.data.msg === 'fail'){
                alert("Message failed to send.")
            }
        });
    }

    resetForm(){
        document.getElementById('contact-form').reset();
    }



    render() {
        return (
            <div className="Contact-Form">
                <Form onSubmit={this.handleSubmit} className="contact-form">
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input 
                            type="text" 
                            name="name" 
                            placeholder="Your Name"
                            value={this.state.name}
                            autoComplete="on"
                            onChange={this.handleChange} 
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input 
                            type="email"
                            name="email"
                            placeholder="Your Email*"
                            value={this.state.email}
                            autoComplete="on"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="message">Message</Label>
                        <Input 
                            type="textarea" 
                            name="message"
                            id="Message"
                            placeholder="Your Message"
                            onChange={this.handleChange}
                        />

                        <Button>Submit</Button>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}