import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css'
import Cart from './Cart';

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

            <div className={styles.containerCart}>
            <button className={styles.button}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.cart}/>
            <p className={styles.countItemCar}>1</p>    
            </button>
            </div>
            </div>
        </div>

        
    )
}
export default NavBar