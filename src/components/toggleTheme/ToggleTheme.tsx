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
                background: '#2e2e2d',
                position: "fixed",
                zIndex: 100,
                border: 'none',
                cursor: "pointer",
                borderRadius: '0 0 10px 0',
                margin: '0px'
            }}>
            {theme == 'dark' ? <BiSun /> : <BiMoon />}
        </button>
    )
}

export default ToggleTheme