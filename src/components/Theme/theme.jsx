import { useEffect, useState } from "react";
import DarkTheme from "./_icons/DarkTheme";
import LightTheme from "./_icons/LightTheme";
import "./style.css";

export default function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div>
      <button onClick={toggleTheme} className="themeBtn">
        {theme === "dark" ? <DarkTheme /> : <LightTheme />}
      </button>
    </div>
  );
}
