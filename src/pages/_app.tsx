import Menu from '../components/Menu/Menu'
import '../styles/globals.scss'

function App({ Component, pageProps }) {
    
    return (
        <>
            <Menu />
            <Component {...pageProps} />
        </>
    )
}

export default App