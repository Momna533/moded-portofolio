// import "./App.css";
import useLocalStorage from "use-local-storage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/Login";
import PopupContact from "./Components/PopupContact";
import Signup from "./Components/Signup";
function App() {
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dark" : "light"
  );
  const switchTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };
  return (
    <BrowserRouter>
      <div className="App" data-theme={theme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/popup-contact" element={<PopupContact />} />
        </Routes>
      </div>
      {/* <button className="toggle_theme" onClick={switchTheme}>
        switch to {theme === "light" ? "dark" : "light"} theme
      </button> */}
    </BrowserRouter>
  );
}

export default App;
