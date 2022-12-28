// styles
import styles from "./Input.module.scss"

function Input({ label, icon, onInput, type, placeholder, title, autocomplete }) {
    return (
        <div className={styles.input}>
            <label>{label}</label>
            <div className={styles.icon}>
                {icon}
            </div>
            <input
                autoComplete={autocomplete}
                onInput={onInput}
                type={type}
                placeholder={placeholder}
                alt={title}
                title={title}
            />
        </div>
    )
}

export default Input