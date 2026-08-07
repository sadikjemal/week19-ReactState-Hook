import { useState } from "react";
import "./ThemeToggle.css";

function ThemeToggle() {

    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    return (

        <div className={isDarkMode ? "dark" : "light"}>

            <h1>Theme Toggle App</h1>

            <button onClick={toggleTheme}>

                {
                    isDarkMode
                    ? "Switch to light mode"
                    : "Switch to dark mode"
                }

            </button>

        </div>

    );
}

export default ThemeToggle;