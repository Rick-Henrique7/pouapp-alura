import styles from './dailybudget.module.css';

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });

const DailyBudget = ( {value} ) => {
    return (
        <p className={styles.dailyBudget}>
            {formatter.format(value)}
        </p>
    )
}
export default DailyBudget;