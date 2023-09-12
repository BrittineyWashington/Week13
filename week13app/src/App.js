// Coding Steps:
// Using Create-React-App or Vite, create a new React project. Create a LoginForm component that contains the following:
// Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
// Create a Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere.
// Put the Navigation component at the top of the page and the LoginForm in the center of the page.

/* eslint-disable no-unused-vars */
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import React from "react";
import Nav from './components/nav';
import Login from './components/login';


function App () {
  return (
    <div className="App">
      {/* These are the JSX components that create our app */}
      <Nav /> 
      <Login />
    </div>
  );
}


export default App;


