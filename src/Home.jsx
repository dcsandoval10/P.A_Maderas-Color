import Header from './header'
import Destacado from './Destacado'
import Submenu from './Submenu';
import Nuevo from './Nuevo';
import Prueba from './Prueba'
import Footer from './Footer'
import { useEffect, useState } from 'react';
import inventario from './data'

function filterSubmenu(what){
    // console.log("CUAL BOTON SUBMENU FUE TOCADO "+ what)
    // localStorage.setItem("filtro", what)

    // const {filtroActivo, setFiltroActivo} = useState("all")

}

function Home(props) {

    const { updateLS, deleteItem, deleteJustOne } = props;

    // CARRITO
    const products = inventario.data.products
    let product
    console.log(products)

    const [cartItems, setCartItems] = useState([])
    console.log(cartItems)

    const [filtroActivo, setFiltroActivo] = useState(["all"])
    console.log("EL FILTRO ACTIVO ES: "+filtroActivo)


    const onAdd = (product) => {
        console.log("Este es lo que llega al onClik" + JSON.stringify(product))
        const exist = cartItems.find(x => x.id === product.id)
        console.log("Si existe?" + exist)
        if (exist) {
            setCartItems(
                cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
            )
            updateLS(cartItems, product)

        }
        else {
            console.log("Esto es lo que se va a agregar al carrito en el primer cli " + JSON.stringify(product))
            setCartItems([...cartItems, { ...product, qty: 1 }])
            updateLS(cartItems, product)
            //   console.log("Me estoy ejecutando la primera vez" + JSON.stringify(cartItems))

        }
    }

    const onRemove = (product) => {
        const exist = cartItems.find((x) => x.id === product.id)
        if (exist.qty === 1) {

            setCartItems(cartItems.filter((x) => x.id !== product.id))
            deleteItem(product)
        }
        else {

            setCartItems(cartItems.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
            )
            deleteJustOne(product)

        }
    }



    const { producs } = props
    return (
        <div className="App">
            <Header />
            <Destacado />
            <Submenu filterSubmenu={filterSubmenu} setFiltroActivo={setFiltroActivo} filtroActivo={filtroActivo}/>
            <Nuevo onAdd={onAdd} onRemove={onRemove} filtroActivo={filtroActivo}/>
            <Footer />
        </div>
    );
}

export default Home;
