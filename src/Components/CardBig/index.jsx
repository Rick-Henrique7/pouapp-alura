import styles from './cardbig.module.css';

const CardBig = ({children}) => {
    return (
        <div className={styles.cardBig}>
            {children}
        </div>
    )
}

const CardBigHeader = ({ children }) => {
    return (
        <div className={styles.header}>
            {children}
        </div>
    )
}

const CardBigBody = ({ children }) => {
    return (
        <div className={styles.body}>
            {children}
        </div>
    )
}

CardBig.Header = CardBigHeader;
CardBig.Body = CardBigBody;

export default CardBig;