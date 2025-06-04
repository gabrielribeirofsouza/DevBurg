import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

import styles from './CartItem.module.css'
import formatCurrency from '../utils/formartCurreny'
import { useContext } from 'react'
import appContext from '../context/AppContext'

function CartItem ({ data, index }){
    const {img, nome, preco} = data;

    const {cartItems, setCartItems} = useContext(appContext)

    const handleRemoveItem = () => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
  }

    return(
       <div className={styles.containerItems}>
            <div className={styles.containerImageItem}>
            <img src={img} alt=""/>
            </div>
            <div className={styles.containerInfoItem}>
                <span className={styles.nomeItem}>{nome}</span>
                <span className={styles.precoItem}>{formatCurrency(preco, 'BRL')}</span>
            </div>
            <FontAwesomeIcon  icon={faTrash} className={styles.trashItem}
             onClick={handleRemoveItem}/>
       </div>
    )
}
export default CartItem