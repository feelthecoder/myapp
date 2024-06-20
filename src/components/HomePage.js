import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";

function Home() {

    const themeObject = useTheme();

    return (
            <div style={{background:themeObject.bgColor,'min-height': '100vh'}}>
                <button onClick={themeObject.toggleTheme}>
                    {themeObject.theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </button>
             <h1>Welcome to Home Page - Available Menu</h1>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/project">Project</Link></li>
                        <li><Link to="/client">Client</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                        <li><Link to="/flipgame">Flip Game</Link></li>
                    </ul>
                </div> 
            </div>
    );
}

export default Home;