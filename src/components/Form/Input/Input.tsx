// styles
import styles from "./Input.module.scss"

function Input({ label, icon, onChange, type, placeholder, autocomplete, value }) {
    return (
        <div className={styles.input}>
            <label>{label}</label>
            <div className={styles.icon}>{icon}</div>
            <input
                required
                autoComplete={autocomplete}
                onChange={onChange}
                type={type}
                placeholder={placeholder}
                alt={placeholder}
                title={placeholder}
                value={value}
            />
        </div>
    )
}

export default Input