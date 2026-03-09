import { IconSearch } from '../icons';
import styles from './searchinput.module.css';

const SearchInput = (props) => {
    return (
        <div className={styles.container}>  
            <IconSearch/>
            <input className={styles.input} {...props} />
        </div>
    )
}

export default SearchInput;