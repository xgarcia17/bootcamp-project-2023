"use client"
import emailjs from '@emailjs/browser';
import { useState } from "react";

export default function ContactUs() {
  const [from_name, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  let success = true;

  const sendEmail = (event: any) => {
    if (from_name === "" || email === "" || message === "") {
        alert('Must fill all fields before submitting');
        success = false;
    }
    console.log("sendEmail");
    event.preventDefault();
    const params = {
        from_name: from_name,
        email: email,
        to_name: "Xavier",
        message: message
    };
    console.log(params);
    if (success) {
        emailjs.send('service_8a8amx8', 'template_vnvnbec', params, '5D4T4q9kQsRghYvkH')
        .then((result) => {
            setEmail("");
            setFromName("");
            setMessage("");
            alert("Successfully sent your message!");
        }, (error) => {
            alert("Could not submit your entries.");
        });
    }
    
  };
  const handleFromName = (event:any) => { setFromName(event.target.value); }
  const handleEmail = (event:any) => { setEmail(event.target.value); }
  const handleMessage = (event:any) => { setMessage(event.target.value); }

  return (
    <form id="contact-form" onSubmit={sendEmail}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={from_name} onChange={handleFromName}/>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={handleEmail}/>
        <label type-type="message">Message:</label>
        <textarea type-type="message" id="message" className="contactTextArea" value={message} onChange={handleMessage}></textarea>
        <input type="submit" id="submit"/>
    </form>
  );
};