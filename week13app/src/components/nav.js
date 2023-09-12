// Coding Steps:
// Create a Navigation component that contains links styled like a navbar.
// The links don't have to go anywhere.
// Put the Navigation component at the top of the page and the LoginForm in the center of the page.

import React from "react"; 

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/">
                 Navbar
            </a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNavDropdown"
                aria-controls="navbarNavDropdown"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item active">
                    <a className="nav-link" href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/">
                     Home <span className="sr-only"></span>
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/">
                     Login
                    </a>
                </li>

                <li className="nav-item">
                    <a className="nav-link" href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/">
                     Contact
                    </a>
                </li>
                <li className="nav-item dropdown">
                    <a
                    className="nav-link dropdown-toggle"
                    href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                    >
          Additional Info
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <a className="dropdown-item" href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/">
            Billing
          </a>
          <a className="dropdown-item" href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/">
            Newsfeed
          </a>
          <a className="dropdown-item" href="https://www.linkedin.com/in/brittiney-washington-frontenddevlp/">
            Resources
          </a>
        </div>
      </li>
    </ul>
  </div>
</nav>
    );
}

// lets us make this class accessible outside of this file when webpack is bundled
export default Navbar;




