import { IconSavings } from '../icons';
import { ProgressBar } from '../ProgressBar';
import styles from './savingsstatus.module.css';;

const SavingsStatus = ({ percent }) => {
    return (
        <div className={styles.container}>
            <p > <IconSavings/> Economizar</p>
            <ProgressBar percent={percent} bg={'#fff'}/>
        </div>
    )
}
export default SavingsStatus;