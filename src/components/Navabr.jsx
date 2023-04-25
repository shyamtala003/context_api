import React from "react";
import ThemeContext from "../themeContext/ThemeContext";
function Navabr() {
  return (
    <>
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <nav
            className={`navbar navbar-expand-lg ${
              theme === "light"
                ? "navbar-light bg-light"
                : "bg-dark navbar-dark"
            }`}
          >
            <div className="container-fluid">
              <a className="navbar-brand" href="#">
                Navbar
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">
                      Home
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Features
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      Pricing
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link disabled"
                      href="#"
                      tabIndex="-1"
                      aria-disabled="true"
                    >
                      Disabled
                    </a>
                  </li>
                </ul>
                <div className="form-check flex form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="flexSwitchCheckDefault"
                    onClick={() => {
                      theme === "light" ? setTheme("dark") : setTheme("light");
                    }}
                  />
                  <label
                    className="form-check-label"
                    htmlFor="flexSwitchCheckDefault"
                    style={{ color: `${theme === "light" ? "#000" : "#fff"}` }}
                  >
                    {theme === "light" ? "Dark" : "Light"}
                  </label>
                </div>
              </div>
            </div>
          </nav>
        )}
      </ThemeContext.Consumer>
    </>
  );
}

export default Navabr;
