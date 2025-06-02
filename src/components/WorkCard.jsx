import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styles from './WorkCard.module.css'
function WorkCard({iconWork, iconButton, msg}){
    return(
        <div className={styles.card}>
            <div className={styles.containerIcon}>
            <FontAwesomeIcon icon={iconWork} className={styles.icon}/>
            </div>
            <p className={styles.pCard}>
            {msg}
            </p>
            <button className={styles.buttonIcon}>
            <FontAwesomeIcon icon={iconButton} className={styles.iconBtn}/>
            </button>
        </div>
    )
}
export default WorkCard