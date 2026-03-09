import styles from './progressbar.module.css';

export function ProgressBar({percent, bg}) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.filler} style={{ width: `${percent}%` , backgroundColor: bg}}>
                {percent}%
            </div>
        </div>
    )
}