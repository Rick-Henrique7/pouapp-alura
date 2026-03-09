import styles from './aside.module.css';
import logo from '../../assets/logo.svg';

export const Aside = (props) => {
    return (
        <aside className={styles.aside}>
            <img src={logo} alt="" srcset="" />
            <footer className={styles.footer}>
                <h2>
                    Desenvolvido por Aluno, estudante da alura
                </h2>
            </footer>
        </aside>
    )
}