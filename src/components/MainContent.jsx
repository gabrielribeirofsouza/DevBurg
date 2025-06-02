import hamburguerImg from '../assets/hamburguer-principal.png'
import styles from './MainContent.module.css'
function MainContent(){
    return (
        <div className={styles.containerMain}>
            <div className={styles.containerText}>
                <h1>Descubra o sabor que conquista</h1>
                <p>Na DevBurg, preparamos hambúrgueres frescos e cheios de sabor, entregues rápido e quentinhos.
                Cansado dos mesmos lanches? Aqui é diferente: qualidade e agilidade para você aproveitar cada mordida.
                </p>
            <button>Peça agora e aproveite</button>
            </div>
            <div className={styles.containerImage}>
                <img src={hamburguerImg} alt="" className={styles.hamburgerImage}/>
            </div>
        </div>
    )
}
export default MainContent