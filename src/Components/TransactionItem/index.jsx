import styles from './transactionitem.module.css';

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });


export default function TransactionItem({ transacoes }) {
    return (
        <div>
            <div className={styles.transaction}>
                <p>{transacoes.description}</p>
                <p>{formatter.format(transacoes.value)}</p>
            </div>
            <p className={styles.date}>
                {new Date(transacoes.date).toLocaleDateString('pt-BR')}
            </p>
        </div>
       
    )
}