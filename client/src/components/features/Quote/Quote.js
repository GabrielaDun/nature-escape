import styles from './Quote.module.scss'

const Quote = props => {
    return (
        <div className={styles.quote} style={{ backgroundImage: `url(${props.image})` } }>
            <h1>{props.title}</h1>
            <h3>{props.subtitle}</h3>
        </div>
    );
};

export default Quote;