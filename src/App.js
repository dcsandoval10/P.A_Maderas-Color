import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Header from './header'
import Destacado from './Destacado'
import Submenu from './Submenu';
import Nuevo from './Nuevo';
import Home from './Home'
import Footer from './Footer'
import Cart from './Cart';
import inventario from './data'
import { reactLocalStorage } from 'reactjs-localstorage';



function App() {

  // Determina en que pagina esta ubicado el cliente
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/home":
      Component = Home
      break
    case "/cart":
      Component = Cart
  }

  // Funcionalidad del carrito
  
  

  return (
    <div className="App">
      <Component />
      <Footer />
    </div>
  );
}

export default App;
