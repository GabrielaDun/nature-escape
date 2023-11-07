import styles from './Button.module.scss'

const Button = props => {
    return (
    <div className={styles.root}>
        <button className={styles.button}>
            {props.children}
        </button>
    </div>
    )

}
export default Button;