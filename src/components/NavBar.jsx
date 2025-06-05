import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBurger } from '@fortawesome/free-solid-svg-icons';

import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import styles from './NavBar.module.css'
import { useContext, useState } from 'react';
import appContext from '../context/AppContext';


function NavBar(){
    
    const {cartItems, cartVisible, setCartVisible } = useContext(appContext)

    const handleCart = () =>{
    setCartVisible(!cartVisible)
    }
    return(

        <div className={styles.container}>
            <div className= {styles.containerIcon}>
            <FontAwesomeIcon icon={faBurger} className={styles.icon}/> 
            <span>DevBurg</span>
            </div>
            <div className={styles.containerButtons}>
            <button className={styles.button}>Inicio</button>
            <button className={styles.button}>Contato</button>
            <button className={styles.button}>Sobre</button>
            <button className={styles.button}>Produtos</button>

            <div className={styles.containerCart}>
            <button className={styles.button}>
            <FontAwesomeIcon icon={faCartShopping} className={styles.cart} onClick={handleCart}/>

            </button>
            {cartItems.length > 0 ? <p className={styles.countItemCar}>{cartItems.length}</p> : <span></span> }  
            </div>
            </div>
        </div>

        
    )
}
export default NavBar