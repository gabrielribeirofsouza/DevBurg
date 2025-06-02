import styles from './Sobre.module.css'
import imgSobre from '../assets/cara-segurando-hamburguer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
function Sobre(){
    return (
           <div className={styles.containerSobre}>
                <div className="styles.infoContainer">
                <p className={styles.pApresentacao}>
                    <FontAwesomeIcon icon={faBurger} className={styles.icon}/>
                    Na DevBurg, acreditamos que um bom hambúrguer vai muito além dos ingredientes — ele é feito com paixão, criatividade e sabor de verdade.
                    <br /><br />
                    Nossa missão é oferecer uma experiência única, com receitas artesanais, ingredientes frescos e um ambiente acolhedor. Seja para matar a fome ou celebrar bons momentos, estamos aqui para servir com qualidade e autenticidade.
                    <br /><br />
                    DevBurg — Feito com paixão, servido com sabor.
                </p>
                </div>
                <div className={styles.imgSobre}>
                    <img src={imgSobre} alt="" />
                </div>
           </div>
    )
}
export default Sobre