import imgBanner from '../assets/banner.png'
import styles from './Banner.module.css'
function Banner(){
    return(
        <div className={styles.containerBanner}>
            <div className={styles.infoBanner}>
            <p>Não perca tempo, garanta já o seu</p>
            <span className={styles.porcentos}>50%</span>
            <span className={styles.offSpan}>off</span>
            <button className={styles.btnComprar}>COMPRE AQUI</button>
            </div>
            <div className={styles.containerImg}>
                <img src={imgBanner} alt="" className={styles.img} />
            </div>
        </div>
    )
}
export default Banner