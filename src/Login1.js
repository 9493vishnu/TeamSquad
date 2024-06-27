import React, { useState } from "react";


import "./login.css";

function Login() {
  
  
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [user_name, setuser] = useState("");

  const database = [
    {
      username: "user1",
      password: "pass1"
    },
    {
      username: "vishnu",
      password: "password"
    }
  ];

  const errors = {
    uname: "Invalid Username 🤔",
    pass: "Invalid Password 🔑",
    both: "Invalid Username 🤔 or Password 🔑"
  };

  const handleSubmit = (event) => {
  
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    
    const userData = database.find((user) => user.username === uname.value);

   
    if (userData) {
      if (userData.password !== pass.value) {

        setErrorMessages({ name: "pass", message: errors.both });
      } else {
        setIsSubmitted(true);
        setuser(userData.username);
      }
    } else {
  
      setErrorMessages({ name: "uname", message: errors.both });
    }
  };

  
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  
  const renderForm = (
    
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
        <h2 className="h2">Welcome Back!</h2>
       
        <label className="label">Username *</label>
          
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>

        <div className="input-container">
          <label className="label">Password *</label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}
        </div>

        <div className="button-container">
          <button type="submit">Log In</button>
        </div>
        <div className="end">
          <h4 style={{fontWeight:'600',fontFamily: 'roboto'}}>Don't have an account </h4>
        </div>

      </form>
    </div>
  );

  return (
    
    <div className="app">
     
      <div className="login-form">
      
      <div className="title"></div>
        {isSubmitted ? <div>
          Hi {user_name} successfully logged in
          
          </div>  : renderForm}
      </div>
     
    </div>
  );
}

export default Login;