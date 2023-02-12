import styles from './button.module.scss';

const Button = ({onClick = null, type = "button", children}) => {
    return (
        <>
            {Boolean(onClick) && <button className={styles.button} onClick={onClick} type={type}>{children}</button>}
            {!Boolean(onClick) && <button className={styles.button} type={type}>{children}</button>}
        </>
    )
}

export default Button;