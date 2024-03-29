import style from "./Button.module.css"

function Button(props) {
    const { children, disabled = false} = props
    return (
    <button
        {...props}
        className={style.button} 
        disabled={disabled}
    >
        {children}
    </button>
    )
}

export default Button;