import NavBar from "./components/navBar"
import MainContent from "./components/MainContent"
import './App.css'
import Card from "./components/Card"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFire } from "@fortawesome/free-solid-svg-icons"
import Banner from "./components/Banner"
function App() {
 

  return (
    <> 
      <NavBar />
      <MainContent/>
      <div id="container-cards">
        <h1>QUERIDINHOS <FontAwesomeIcon icon={faFire} /></h1>

        <span id="apresent-hamburg">Esses são os hambúrgueres mais pedidos pela galera. Sabor, suculência e combinação perfeita em cada mordida!
      </span>
        <section id="cards">
      <Card nome='React Burg' preco='20,00 R$'/>
      <Card nome='Angular Burg' preco='25,00 R$'/>
      <Card nome='Vue Burg' preco='15,00 R$'/>
        </section>
      <Banner />
      </div>
    </>
  )
}

export default App
