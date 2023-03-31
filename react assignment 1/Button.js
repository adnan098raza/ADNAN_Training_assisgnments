import React from 'react';function Button() 
{
    return (
      <button className="btn" onClick={() => window.open("https://www.google.com")}>
      hit me up </button>
       );
    }export default Button;