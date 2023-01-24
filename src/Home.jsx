import Header from './header'
import Destacado from './Destacado'
import Submenu from './Submenu';
import Nuevo from './Nuevo';
import Prueba from './Prueba'
import Footer from './Footer'
import { useEffect, useState } from 'react';
import inventario from './data'

function updateLS(cartItems) {
    
    localStorage.setItem("elemCarrito", JSON.stringify(cartItems))
  }

function Home(props) {

    // CARRITO
    const products = inventario.data.products
    let product
    console.log(products)

    const [cartItems, setCartItems] = useState([])
    console.log(cartItems)

    // useEffect(() => {
    //     const carritoLS = window.localStorage.getItem("carrito");
    //     if (carritoLS !== []) setCartItems(JSON.parse(carritoLS))
    // }, [])
    // useEffect(() => {
    //     window.localStorage.setItem("carrito", JSON.stringify(cartItems))
    // }, [cartItems])

    const onAdd = (product) => {
        console.log("Este es lo que llega al onClik" + product)
        const exist = cartItems.find(x => x.id === product.id)
        console.log("Si existe?" + exist)
        if (exist) {
            setCartItems(
                cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
            )
            updateLS(cartItems)



        }
        else {
            console.log("Esto es lo que se va a agregar al carrito en el primer cli " + JSON.stringify(product))
            setCartItems([...cartItems, { ...product, qty: 1 }])
            updateLS(cartItems)
            console.log("Me estoy ejecutando la primera vez" + JSON.stringify(cartItems))

        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x)=> x.id === product.id)
        if (exist.qty === 1){
            setCartItems(cartItems.filter((x) => x.id!== product.id))
        }
        else {
            setCartItems(
                cartItems.map((x)=> 
                    x.id === product.id ? {...exist, qty: exist.qty -1 }: x
                )
            )
        }
    }



    const { producs } = props
    return (
        <div className="App">
            <Header />
            <Destacado />
            <Submenu />
            <Nuevo onAdd={onAdd} />
            <Footer />
        </div>
    );
}

export default Home;
