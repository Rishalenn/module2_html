import { useState } from "react";
import Card from "./Card";

function Contact() {

const [name,setName] = useState("");
const [email,setEmail] = useState("");
const [message,setMessage] = useState("");

function handleSubmit(e){
e.preventDefault();
alert(`Thank you ${name}!`);
}

return (

<div className="container">

<Card title="Contact Me">

<form className="contact-form" onSubmit={handleSubmit}>

<input
type="text"
placeholder="Name"
value={name}
onChange={(e)=>setName(e.target.value)}
/>

<input
type="email"
placeholder="Email"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>

<textarea
placeholder="Message"
value={message}
onChange={(e)=>setMessage(e.target.value)}
></textarea>

<button type="submit">
Send
</button>

</form>

</Card>

</div>

);

}

export default Contact;