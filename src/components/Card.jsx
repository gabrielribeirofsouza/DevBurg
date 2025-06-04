import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


import styles from './Card.module.css'
import { useState } from 'react';

function Card({nome, preco, img}){
    const [fav, setfav] = useState(false)
    
    function favoritar(){
        setfav(true)
    }
    function deslike(){
        setfav(false)
    }
    return(
        <div className={styles.card}>
            {fav ? <FontAwesomeIcon icon={faHeart} className={styles.fav} onClick={deslike}/> : <FontAwesomeIcon icon={faHeartRegular} className={styles.like} onClick={favoritar}/> }
            <img src={img} alt="Hamburguer" className={styles.imgCard}/>
            <span className={styles.nome}>{nome}</span>
            <div className={styles.infoCard}>
            <span className={styles.preco}>{preco}</span>
            <FontAwesomeIcon icon={faCartPlus} className={styles.carrinho}/>
            </div>
        </div>
    )
}
export default Card