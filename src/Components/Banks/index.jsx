import styles from './banks.module.css';
import InconBank from '../icons';

const formatter = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL" });


const Banks = ({nomeBanco, Saldo}) => {
    return (
        <div className={styles.banks}>
           
            <div className={styles.bank}>
                 <h3 className={styles.bank_title}><InconBank/>{nomeBanco}</h3>   
            </div>

            <div className={styles.saldo}>
                <h3>Saldo</h3>
                <h4>{formatter.format(Saldo)}</h4>
                
            </div>
                
        </div>
    )

}

export default Banks;