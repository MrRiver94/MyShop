

import './App.css'
import Header from "./Componentes/Header/Header"
import Footer from './Componentes/Footer/Footer'
import Banner from './Componentes/Banner/Banner'

import ProductSection from './Componentes/ProductSection/ProductSection'
import { useState } from 'react'
import CartSection from './CardSection/CardSection'
import Login from './Componentes/Login/LoginForm'


function App() {
  const [filtro,setFiltro] = useState("")  
  const [showCartSection , setShowCartSection] = useState(false);

  const handleshowCart = () => {
    setShowCartSection(true);
  };

  const handleShowProduts = () => {
    setShowCartSection(false);
  }

  return (
    <>
   
      <div className="header">
        <Header 
        onFilterChange={setFiltro}
        showCart={handleshowCart}
        showProducts={handleShowProduts}
         />
      </div>
      
      <div className="banner">
      <Banner />
      </div>
      
      <div className='Card-list'>
       {showCartSection? <CartSection/> : <ProductSection  filtro={filtro}/>}
      </div>

      <Login></Login>
             
      <div className="footer">
      <Footer/>
      </div>
     
     

      
      
    </>
  )
}

export default App
