// styles
import '../styles/globals.scss'
// components
import ToggleTheme from '../components/toggleTheme/ToggleTheme'
// react hooks
import { useEffect, useState } from 'react'
// contexts
import { ThemeProvider } from '../contexts/ThemeContext'
import { UserProvider } from '../contexts/UserContext'

function App({ Component, pageProps }) {

    const [theme, setTheme] = useState('dark')
    const [dataForContext, setDataForContext] = useState({})

    function onClickToggle() {
        if (theme == 'dark') {
            setTheme('light')
            console.log(theme)
        } else {
            setTheme('dark')
            console.log(theme)
        }
    }

    return (
        <ThemeProvider value={theme}>
            <ToggleTheme onClick={onClickToggle} theme={theme} />
            <UserProvider value={[dataForContext, setDataForContext]}>
                <Component {...pageProps} />
            </UserProvider>
        </ThemeProvider>
    )
}

export default App