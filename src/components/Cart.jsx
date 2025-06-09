import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import styles from './Cart.module.css'
import CartItem from './CartItem'
import { useContext } from 'react'
import appContext from '../context/AppContext'
import formatCurrency from '../utils/formartCurreny'
function Cart(){

    const {cartItems, cartVisible} = useContext(appContext)
    

    const totalPrice = cartItems.reduce((acc, item)=>{
       const precoNumerico = parseFloat(item.preco.replace('R$', '').replace(',', '.').trim());
  return acc + precoNumerico;
    }, 0)
    const totalFormatado = totalPrice.toLocaleString('pt-br',{
        style: 'currency',
        currency: 'BRL'
    })
    return(
        <div className={`${styles.containerCart} ${cartVisible ? styles.cartActive : styles.cartOff}`}>
            <div className={styles.itensCart}>
              {
              cartItems.map((Item, index) =>{
               return <CartItem key={index} data={Item} index={index} />
              })
              }
            </div>
            
             <div className={styles.resumoCart}>
                <span>{totalFormatado}</span>
                <button type='button' className={styles.btnFinalizar}> <FontAwesomeIcon  icon={faCheck} className={styles.iconConfirm}/></button>  
            </div>
        </div>
    )
}
export default Cart