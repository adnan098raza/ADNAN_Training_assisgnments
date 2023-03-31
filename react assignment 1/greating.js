import React from 'react';

function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

function App() {
  return (
    <div>
        <center>
      <Greeting name="Techno" />
      <Greeting name="Tree" />
      <Greeting name="Trainees" />
      </center>
    </div>
  );
}

export default App;
