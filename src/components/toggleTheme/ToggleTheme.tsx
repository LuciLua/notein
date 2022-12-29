// icons
import { BiMoon, BiSun } from "react-icons/bi"

function ToggleTheme({ theme, onClick }) {
    return (
        <button
            onClick={() => onClick()}
            style={{
                width: '30px',
                height: '30px',
                color: '#000',
                background: '#fff4',
                borderRadius: "60%",
                position: "fixed",
                zIndex: 100,
                border: 'none',
                cursor: "pointer",
                margin: '9px'
            }}>
            {theme == 'dark' ? <BiSun /> : <BiMoon />}
        </button>
    )
}

export default ToggleTheme