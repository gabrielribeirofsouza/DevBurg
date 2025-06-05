import { faHamburger } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import styles from './Footer.module.css'

function Footer(){
    return(
       <footer>
        <div className={styles.containerApresent}>
            <div className={styles.containerIcon}>
        <FontAwesomeIcon icon={faHamburger} />
                <span>DevBurg</span>
            </div>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus quae obcaecati excepturi, assumenda amet repellat, corrupti tempore sed ullam possimus debitis eaque voluptatibus dolorum iste, facilis laborum repudiandae esse praesentium.</p>

        <div className={styles.containerContact}>

        <span className="contact">
            +55 5555-5555
        </span>
        <span className="contact">
            mail@gmail.com
        </span>
        <span className="contact">
            Rua da Alegria 06, Cidade do Paraiso, Felicade
        </span>
        </div>
        </div>
        <div className={styles.containerSocialService}>
            <div className={styles.containerService}>
            <h2>Serviços</h2>
            <div className={styles.containerOptionsService}>
                <span className="optionService">
                    Burger
                </span>
                <span className="optionService">
                    Menu
                </span>
                <span className="optionService">
                    Queridinhos
                </span>
                <span className="optionService">
                    Sobre
                </span>
            </div>
            </div>
            <div className={styles.containerSocial}>
            <h2>Siga-nos</h2>
            <div className={styles.containerOptionsSocial}>
                <span className="optionSocial">
                    Facebook
                </span>
                <span className="optionSocial">
                    Instagram
                </span>
                <span className="optionSocial">
                    Linkedin
                </span>
                <span className="option-social">
                    Whatsapp
                </span>
            </div>
            </div>
        </div>
        <div className={styles.containerNewLester}>
        <h2>Se inscreva para novas atualizações</h2>
        <div className={styles.containerInput}>
        <input type="email" name="" id=""  placeholder="Digite seu e-mail" className={styles.Input}/>
        <button className={styles.checkButton}> <FontAwesomeIcon icon={faCheck}/></button>
        </div>

        </div>
       </footer>
    )
}
export default Footer