import React from "react";
import { createContext,useContext,useState } from "react";

const ThemeContext = createContext();

export const useTheme = ()=> useContext(ThemeContext);

export const ThemeProvider = ({children}) => {

    const [theme,setTheme] = useState('light');
    const bgColor = theme==='light'?'#ffffff':'#333333'
    const toggleTheme = ()=>{
        setTheme(prevTheme => (prevTheme === 'light'?'dark':'light'));
    }

    return (
        <ThemeContext.Provider value={{theme,toggleTheme,bgColor}}>
            {children}
        </ThemeContext.Provider>
    );
};
