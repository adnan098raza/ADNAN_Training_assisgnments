import React, { useState } from 'react';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Username: ${username}`);
    console.log(`Password: ${password}`);
  };

  return (
    <center>
    <form onSubmit={handleSubmit}>
      
      <label>
        Username:
        <input class = "ab" type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <br/>
      <br></br>
      <label>
        Password:
        <input class = "bc" type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <br />
      <br></br>
      <center>      
      <button class = "hr" type="submit">Log In</button>
      <button class = "he" type="submit">Sign Up</button>
      </center>
    </form>
    </center>
  );
}

export default LoginForm;
