// contexts
import { createContext } from "react";
// themes
import StyleDark from "../styles/themes/dark"
import StyleLight from "../styles/themes/light"

export const ThemeContext = createContext('');
ThemeContext.displayName = 'ThemeContext'


function ThemeProvider({ children, value }) {

    function Theme() {
        return value == 'dark' ? <StyleDark /> : <StyleLight />
    }

    return (
        <ThemeContext.Provider value={value}>
            <Theme />
            {children}
        </ThemeContext.Provider>)
}

export { ThemeProvider }