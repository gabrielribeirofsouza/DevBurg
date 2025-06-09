//components
import NavBar from "./components/NavBar.jsx"
import MainContent from "./components/MainContent"
import Card from "./components/Card"
import Banner from "./components/Banner"
import Sobre from "./components/Sobre"
import WorkCard from "./components/WorkCard"

//lib | imgagens
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"
import { faPhone } from "@fortawesome/free-solid-svg-icons"
import { faUtensils } from "@fortawesome/free-solid-svg-icons"
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons"
import { faMotorcycle } from "@fortawesome/free-solid-svg-icons"
import { faCheck } from "@fortawesome/free-solid-svg-icons"
import cardImg from './assets/cardimagem.png'

//styleapp
import './App.css'
import Cart from "./components/Cart"
import Provider from "./context/Provider"
import Footer from "./components/Footer"



function App() {
 

  return (
    <Provider> 
      <NavBar/>
      <MainContent/>
      <div id="container-cards">
        <h1>QUERIDINHOS <FontAwesomeIcon icon={faFire} /></h1>

        <span id="apresent-hamburg">Esses são os hambúrgueres mais pedidos pela galera. Sabor, suculência e combinação perfeita em cada mordida!
      </span>
        <section id="cards">
      <Card nome='React Burg' preco='R$ 20,00' img={cardImg}/>
      <Card nome='Angular Burg' preco='R$ 25,00' img={cardImg}/>
      <Card nome='Vue Burg' preco='R$ 40,00' img={cardImg}/>
      
      
        </section>
      </div>
      <Banner />
      <section id="sobre">
        <h2>QUEM SOMOS?</h2>
        <Sobre />
      </section>
      <section id="trabalho-area">
        <h2>COMO TRABALHAMOS?</h2>
        <div id="apresent-work">
          <WorkCard  iconWork={faPhone} iconButton={faArrowAltCircleRight} msg ='Você escolhe seu hambúrguer favorito, personaliza do seu jeito e finaliza o pedido rapidinho.'/>
          <WorkCard iconWork={faMotorcycle} iconButton={faArrowAltCircleRight} msg={'Recebemos o seu pedido, e em instantes, um de nossos entregadores estará a caminho até você.'}/>
          <WorkCard iconWork={faUtensils} iconButton={faCheck} msg={'Seu pedido chega quentinho e saboroso! Agora é só aproveitar e se deliciar.'}/>
        </div>
      </section>
      <Cart />
      <Footer />
    </Provider>
  
  )
}

export default App
