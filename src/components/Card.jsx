import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import hmaburgCardImage from '../assets/cardimg.png'

import styles from './Card.module.css'

function Card({nome, preco}){
    return(
        <div className={styles.card}>
            <FontAwesomeIcon icon={faHeart} className={styles.like}/>
            <img src={hmaburgCardImage} alt="Hamburguer" className={styles.imgCard}/>
            <span className={styles.nome}>{nome}</span>
            <div className={styles.infoCard}>
            <span className={styles.preco}>{preco}</span>
            <FontAwesomeIcon icon={faCartShopping} className={styles.carrinho}/>
            </div>
        </div>
    )
}
export default Card