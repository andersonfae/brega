import { Navbar } from "./components/Navbar";
import style from "./style.css";
import { Button } from "./components/Button/jinoteste.js";
import { useState } from "react";
import Cantores from "desafio/src/components/Main/Cantores/index.js";

function App() {
  const [themeColor, setThemeColor] = useState("light");

  function changeTheme() {
    if (themeColor === "light") {
      setThemeColor("dark");
    } else {
      setThemeColor("light");
    }

    return (
      <div className="App">
        <div className="Navbar">
          <Button themeColor="light" themeChange={changeTheme}>
            Claro/Escuro
          </Button>
          <Cantores />
        </div>
      </div>
    );
  }
}
export default App;
