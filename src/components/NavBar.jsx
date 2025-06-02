import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css'

function NavBar(){
    return(
        <div className={styles.container}>
            <div className= {styles.containerIcon}>
            <FontAwesomeIcon icon={faBurger} className={styles.icon}/> 
            <span>BURGER</span>
            </div>
            <div className={styles.containerButtons}>
            <button className={styles.button}>Inicio</button>
            <button className={styles.button}>Contato</button>
            <button className={styles.button}>Sobre</button>
            <button className={styles.button}>Produtos</button>
            </div>
            <button className={styles.button}>
            <FontAwesomeIcon icon={faBars} className={styles.menu}/>    
            </button>
        </div>
    )
}
export default NavBar