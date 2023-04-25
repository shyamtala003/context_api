import React, { useState } from "react";
import "./main.css";
import Navabr from "./components/Navabr";
import Carosal from "./components/carosal";
import UserForm from "./components/UserForm";
import ThemeContext from "./themeContext/ThemeContext";
import Footer from "./components/Footer";

const App = () => {
  // code for theme toggler
  let [theme, setTheme] = useState("light");
  return (
    <div className={`body ${theme === "light" ? "light" : "dark"}`}>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Navabr></Navabr>
        <Carosal></Carosal>
        <UserForm></UserForm>
        <Footer></Footer>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
