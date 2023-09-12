// Coding Steps:
// Using Create-React-App or Vite, create a new React project. Create a LoginForm component that contains the following:
// Username and password input fields, an h3 that says Log In, with a border. Style the component using the default generated CSS file.
import React from 'react'; //this is us importing our react
import "./login.css";   //this is us importing the css files

// react component is the class that comes with react that we can extend to create the components that we're working on 
class Login extends React.Component {
    // create a render method that Defines what the component will look like 
    //what HTML will be rendered to the application screen 
  render() {
    return (
        //JSX uses className not class
      <div className="login"> 
        <h3>Log In</h3>
        <form>
          <div className="text_area">
            <input
              type="text"
              id="username"
              name="username"
              defaultValue="username"
              className="text_input"

            />
          </div>
          <div className="text_area">
            <input
              type="text"
              id="password"
              name="password"
              defaultValue="password"
              className="text_input"

            />
          </div>
          <input
            type="submit"
            value="LOGIN"
            className="btn"

          />
        </form>
        <a className="link" href="/signin">Sign Up</a>
      </div>
    );
  }
}

export default Login; // lets us make this class accessible outside of this file when webpack is bundled

