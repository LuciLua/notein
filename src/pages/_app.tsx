// styles
import { useEffect, useState } from 'react'
import ToggleTheme from '../components/toggleTheme/ToggleTheme'
import '../styles/globals.scss'
import StyleDark from "../styles/themes/dark"
import StyleLight from "../styles/themes/light"

function App({ Component, pageProps }) {
    const [theme, setTheme] = useState('dark')

    function onClickToggle() {
        if (theme == 'dark') {
            setTheme('light')

        } else {
            setTheme('dark')
        }
    }

    return (
        <>
            {theme == 'dark' ? <StyleLight/> : <StyleDark/>}
            <ToggleTheme onClick={onClickToggle} theme={theme} />
            <Component {...pageProps} />
        </>
    )
}

export default App