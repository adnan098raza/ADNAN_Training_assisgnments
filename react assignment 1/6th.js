import React, { useState } from 'react';

function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ name, email, message });
  };

  return (
    <center>
   <form onSubmit={handleSubmit}>
      <center>
      <div>
        <label htmlFor="name-input">Name:</label>
        <input
          id="name-input"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </div>
      </center>
      <center>
      <div>
        <label htmlFor="email-input">Email:</label>
        <input
          id="email-input"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      </center>
      <center>
      <div>
        <label htmlFor="message-input">Message:</label>
        <textarea
          id="message-input"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </div>
      <button class = "ab" type="submit">Submit</button>
      </center>
    </form>
    </center>
  );
}

export default ContactForm;
