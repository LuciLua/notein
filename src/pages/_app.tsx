// styles
import { useEffect, useState } from 'react'
import ToggleTheme from '../components/toggleTheme/ToggleTheme'
import { UserContext } from '../contexts/UserContext'
import '../styles/globals.scss'
import StyleDark from "../styles/themes/dark"
import StyleLight from "../styles/themes/light"

function App({ Component, pageProps }) {

    const [theme, setTheme] = useState('light')
    const [dataForContext, setDataForContext] = useState<any>({})

    function onClickToggle() {
        theme == 'dark' ? setTheme('light') : setTheme('dark')
    }

    return (
        <>
            {theme == 'light' ? <StyleDark /> : <StyleLight />}
            <UserContext.Provider value={[dataForContext, setDataForContext]}>
                <ToggleTheme onClick={onClickToggle} theme={theme} />
                <Component {...pageProps} />
            </UserContext.Provider>
        </>
    )
}

export default App