// icons
import { BiMoon, BiSun } from "react-icons/bi"

function ToggleTheme({ theme, onClick }) {
    return (
        <button
            onClick={() => onClick()}
            style={{
                width: '23px',
                height: '23px',
                color: '#fff',
                background: '#1f1f1e',
                position: "fixed",
                zIndex: 100,
                border: 'none',
                cursor: "pointer",
                margin: '0px'
            }}>
            {theme == 'dark' ? <BiSun /> : <BiMoon />}
        </button>
    )
}

export default ToggleTheme