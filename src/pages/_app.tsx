// styles
import { useEffect, useState } from 'react'
import ToggleTheme from '../components/toggleTheme/ToggleTheme'
import '../styles/globals.scss'
import StyleDark from "../styles/themes/dark"
import StyleLight from "../styles/themes/light"

function App({ Component, pageProps }) {

    const [theme, setTheme] = useState('light')

    function onClickToggle() {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <>
            {theme == 'light' ? <StyleDark /> : <StyleLight />}
            <ToggleTheme onClick={onClickToggle} theme={theme} />
            <Component {...pageProps} />
        </>
    )
}

export default App