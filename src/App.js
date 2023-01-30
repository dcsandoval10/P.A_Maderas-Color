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
import { type } from '@testing-library/user-event/dist/type';

function updateLS(cartItems, product) {

  console.log("ESTO LE LLEGA AL UPDTE" + JSON.stringify(product))
  console.log("Esto es cart Item" + JSON.stringify(cartItems))

  let temporary
  let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))
                
  if (pullLocal == null) {
    temporary = [{ ...product, qty: 1 }]
    console.log("EJECUTANDO")
  }
  else {
    const existe = pullLocal.find(x => x.id === product.id)
    if (existe) {
      let temporary2 = pullLocal.find((x) => x.id === product.id)
      
      console.log("TEMPORARY 2222222"+temporary2)

      temporary = pullLocal.map((x) => x.id === product.id ? { ...temporary2, qty: temporary2.qty + 1 } : x)
    }
    else{
      temporary = [...pullLocal,{ ...product, qty: 1 }]
    }


  }

  localStorage.setItem("elemCarrito", JSON.stringify(temporary))

  console.log("Esto es el local storage actual" + localStorage.getItem("elemCarrito"))
}

function deleteItem(product) {
  let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))
  let target = pullLocal.findIndex(x => x.id === product.id)

  console.log("ESTE ES EL TARGET A ELIMINAR"+target)

  // let temporal = pullLocal.splice(target,1)
  let temporal2 = pullLocal.filter(x=> x.id !== product.id)


  console.log("ESTE ES DELETE pulllocal"+ JSON.stringify(temporal2))
  // console.log("ESTE ES TEMPORAL"+ JSON.stringify(temporal))

  localStorage.setItem("elemCarrito", JSON.stringify(temporal2))
}

function deleteJustOne (product){
  let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))
  let temporary
  let temporary2 = pullLocal.find((x) => x.id === product.id)
  temporary = pullLocal.map((x) => x.id === product.id ? { ...temporary2, qty: temporary2.qty - 1 } : x)

  localStorage.setItem("elemCarrito", JSON.stringify(temporary))
}


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
      <Component updateLS={updateLS} deleteItem={deleteItem} deleteJustOne={deleteJustOne}/>
      <Footer />
    </div>
  );
}

export default App;
