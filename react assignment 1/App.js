
/*import Greeting from './components/greating';
import Counter from './components/counter';
import LoginForm from './components/loginform';
function App() 
{ return ( <div class= "container">
   <div class="greeting">
    <center>
    <h1>WELCOME</h1>
    <Greeting/>
    </center>
    </div>
    <br></br>
    <br></br>
    <hr></hr>
     <div class="Counter">
     <center>
       <h1> Counter</h1>
       <Counter/>
       </center>
    </div>
    <br></br>
    <hr></hr>
    <div class="loginform">
    <center>
         <h1>LoginForm</h1>
         <LoginForm/>
         </center>    
         </div>
         </div> 
         );}*/
/*
import React from 'react';
import Router from './components/Routter';
function App() 
        { return (
           <div>
            <center>
              <h1>pageees</h1>
              <Router/>
            </center>
            </div>
             );}
export default App;
*/

/*import React, { useState } from "react";

function PasswordChecklist() {
  const [password, setPassword] = useState("");
  const [isValidLength, setIsValidLength] = useState(false);
  const [hasUpperCase, setHasUpperCase] = useState(false);
  const [hasLowerCase, setHasLowerCase] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    setPassword(password);
    setIsValidLength(password.length >= 8);
    setHasUpperCase(/[A-Z]/.test(password));
    setHasLowerCase(/[a-z]/.test(password));
    setHasNumber(/[0-9]/.test(password));
  };

  return (
    <div>
      <label>
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <ul>
        <li className={isValidLength ? "valid" : "invalid"}>
          At least 8 characters
        </li>
        <li className={hasUpperCase ? "valid" : "invalid"}>
          Contains an uppercase letter
        </li>
        <li className={hasLowerCase ? "valid" : "invalid"}>
          Contains a lowercase letter
        </li>
        <li className={hasNumber ? "valid" : "invalid"}>
          Contains a number
        </li>
      </ul>
    </div>
  );
}

export default PasswordChecklist;
*/
//<----------- 1st qn assessment ---------------->
//main password text 
/*import React, { Component } from 'react';

class App extends Component {
    
    constructor(){
        super();
        this.state={
            value1:"",
            value2:""
        }
        
        this.handleChange1=(event)=>{
            this.setState({
                value1:event.target.value
            })
        }
        
        this.handleChange2=(event)=>{
            this.setState({
                value2:event.target.value
            })              
        }
    }
     
  render() {
      
      let colour1="red",colour2="red",colour3="red",colour4="red",colour5="red";
      if(this.state.value1.length >= "8")
      {
          colour1="green";    
      }
      if(this.state.value1.match(/[A-Z]/))
      {
          colour2="green";    
      }
      if(this.state.value1.match(/[a-z]/))
      {
          colour3="green";    
      }
      if(this.state.value1.match(/[\d`~!@#$%\^&*()+=|;:'",.<>\/?\\\-]/))
      {
          colour4="green";    
      }
      if(this.state.value1 === this.state.value2 && this.state.value1!=="" )
      {
          colour5="green";    
      }
      
      const style={
          //boxShadow:"2px 2px 3px 3px #ccc",
          border:"2px #eee",
          padding:"20px",
          //marginTop:"25px"
      }
           
    return (
        
    <div className="container"> 
    <div className="row">
    <div className="col-md-4"></div>
        
    
    <div className="col-md-4">
    <div style={style}>
    <center>
    <form> 
          <p style={{fontWeight:"bold"}}>All checkmarks must turn green, password must have:</p>
          <p><i style={{color:colour1,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 8 characters</p>
          <p><i style={{color:colour2,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 uppercase letter</p>
          <p><i style={{color:colour3,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 lowercase letter</p>
          <p><i style={{color:colour4,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> At least 1 number or special character</p>
          <p><i style={{color:colour5,fontSize:"20px"}} class="fa fa-check-circle" aria-hidden="true"></i> Password === Confirm Password</p>
        <br></br>
        <br></br>
          <div class="form-group">
            <label for="password">Password</label>
            <input type="text" class="form-control" value={this.state.value1} onChange={this.handleChange1} placeholder="Password"/>
          </div>
          <br></br>
          <div class="form-group">
            <label for="password">Confirm Password</label>
            <input type="text" class="form-control" value={this.state.value2} onChange={this.handleChange2} placeholder="Confirm Password"/>
          </div> 
          <br></br>
         {this.state.value2 === "" ? "" :
         (this.state.value1 === this.state.value2  ? <p style={{color:"green",fontWeight:"bold"}}> Passwords match </p> :
         <p style={{color:"red",fontWeight:"bold"}}> Passwords not match </p>
          )}
    </form>
    </center>
    </div>
    </div>
   
        
    <div className="col-md-4"></div>
    </div>
    </div>
    );
  }
}

export default App;
*/
//<----------- end 1st prog ---------------->
//<----------- 3rd prog ----------------->
/*import React, { useState } from "react";
import ReactDOM from "react-dom";


function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "user2",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;*/
//<----------- 3rd prog end----------------->
//<--------------- start 2nd prog ------------>
/*
import { useState } from "react";
import "./App.css";

function App() {
  // This variable determines whether password is shown or not
  const [isShown, setIsSHown] = useState(false);

  // This function is called when the checkbox is checked or unchecked
  const togglePassword = () => {
    setIsSHown((isShown) => !isShown);
  };

  return (
    <div className="App"><center>
      <form className="form" onSubmit={(e) => e.preventDefault()}>
        <input
          type={isShown ? "text" : "password"}
          placeholder="Password"
          className="input"
        />

        <div className="checkbox-container">
          <label htmlFor="checkbox">Show password?</label>
          <input
            id="checkbox"
            type="checkbox"
            checked={isShown}
            onChange={togglePassword}
          />
        </div>
        <button
          className="button"
          onClick={() => {
            
          }}
        >
          Sign In
        </button>
      </form></center>
    </div>
  );
}

export default App;
*/
//<--------------- end 2nd prog 7/3/2023------------>

//<---------- 1st prog 8/3/2023------------->
/*
import React from 'react';
import ItemList from './components/1st';
import ListForm from './components/2nd';

const items = [
  { id: 1, name: 'Lionel Messi 10' },
  { id: 2, name: 'Cristiano Ronaldo 7' },
  { id: 3, name: 'Diego Maradona 10' },
];

function App() {
  return (
    <div>
      <h1 >GREATEST OF ALL Time (GOAT)</h1>
      <ItemList items={items} />
      <ListForm />
    </div>
  );
}

export default App; 
*/
//<---------- 2nd end -------------->
/*
import React from 'react';
import ListForm from './components/2nd';

function App() {
  return (
    <div>
      <ListForm />
    </div>
  );
}

export default App;
*/
//<--------------- 3rd ---------------->
/*import React from 'react';
import CountdownTimer from './components/3rd';

function ParentComponent() {
  return (
    <div>
      <CountdownTimer seconds={30} />
    </div>
  );
}

export default ParentComponent;*/

//<-------------- 4th -------------->
/*
import React from 'react';
import ExampleComponent from './components/4th';

const App = () => {
  return (
    <div className="App">
      <ExampleComponent />
    </div>
  );
};

export default App;
*/
//<----------5th-------------->
/*
import React from 'react';
import Slideshow from './components/5th';

const App = () => {
  const images = [
    'https://racer.com/wp-content/uploads/sites/85/2021/01/75BMWIMSACSL_exterior_StratasAuctions-3_1605143846.jpeg?w=1000&h=600&crop=1',
    'https://cdn.shopify.com/s/files/1/0256/3031/0455/products/15202ST.OO.1240ST.01_820f2284-907e-4efd-8cc7-74847a6f73fd.jpg?v=1617661240',
    'https://www.europeanwatch.com/blog/wp-content/uploads/2022/01/Rolex-Rainbow-Daytona-116595RBOW-31-1024x683.jpg',
  ];

  const duration = 5000; // 5 seconds

  return (
    <div className="App">
      <Slideshow images={images} duration={duration} />
    </div>
  );
};

export default App;

*/
//<-------------- 6th --------------->
/*
import React from 'react';
import ContactForm from './components/6th';

function App() {
  return (
    <div>
      <h1>Contact Us</h1>
      <ContactForm />
    </div>
  );
}

export default App;
*/
//<---------- 7th -------------->
/*import React from "react";
import Modal from "./components/7th";

function App() {
  return (
    <div>
      <h1>WHAT DOES RONALDO SAY .......!!</h1>
      <Modal />
    </div>
  );
}

export default App;*/
/*import React from 'react';
import DataFetcher from './components/8th';

function App() {
  return (
    <div>
      <DataFetcher />
    </div>
  );
}

export default App;*/
//<----------- 9th ------------>
/*import React from 'react';
import Header from './components/9th';

function App() {
  return (
    <div>
      <Header title="My App" subtitle="Welcome to my app!" />
    </div>
  );
}

export default App;*/
//<---------- 10th --------------->
/*import React from 'react';
import Counter from './components/10th';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;*/


