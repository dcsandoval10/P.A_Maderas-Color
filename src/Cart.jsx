import { useState } from "react";
import logo from "./img/logo.jpg"
import add from "./img/Suma.png"
import minus from "./img/minus.png"

// function updateLSCart(cartContent, newList) {
//     newList =cartContent
//     localStorage.setItem("elemCarrito", JSON.stringify(newList))


// }

function Cart(props) {
    let bringData = localStorage.getItem("elemCarrito")
    let newList = JSON.parse(bringData)
    const { deleteJustOne, updateLS, deleteItem } = props;
    // console.log("Esto es lo que ve el carrito" + cartItems)



    const [cartContent, setCartContent] = useState(newList)

    console.log("REACT LIST Esto esta en la lista de react del carrito" + JSON.stringify(cartContent))


    const onAdd = (product) => {

        // console.log("Este es lo que llega al onClik" + JSON.stringify(product))
        console.log("ENTRY LIST ONADD" + JSON.stringify(cartContent))
        console.log("ESTO ES PRODUCT" + JSON.stringify(product))

        const exist = cartContent.find(x => x.id === product.id)
        // console.log("SI EXISTE?" + JSON.stringify(exist))
        if (exist) {

            setCartContent(
                cartContent.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
            )

            console.log("ESTO ES CARTCONTENT" + JSON.stringify(cartContent))
            console.log("ESTO ES NEWLIST" + JSON.stringify(newList))
            updateLS(cartContent, product)
        }
        else {
            // console.log("Esto es lo que se va a agregar al carrito en el primer cli " + JSON.stringify(product))


            newList = [...newList, { ...product, qty: 1 }]

            updateLS(cartContent, product)
            console.log("Me estoy ejecutando la primera vez" + JSON.stringify(newList))

        }
    }

    const onRemove = (product) => {
        const exist = cartContent.find((x) => x.id === product.id)
        if (exist.qty === 1) {

            setCartContent(cartContent.filter((x) => x.id !== product.id))
            deleteItem(product)
        }
        else {

            setCartContent(cartContent.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
            )
            deleteJustOne(product)

        }
    }

    function cartTotal(cartContent) {
        let total = 0
        let temporal1 = cartContent.map(x => {
            let a = x.price
            console.log("ESTE ES EL PRECIO" + a)
            let b = x.qty
            console.log("ESTA ES LA CANTIDAD" + b)
            let c = a * b
            console.log(c)
            total = (c + total)

            console.log(total)

        })
        // let totalF = total *10000
        return total
    }

    return (
        <div>
            <header>
                <div className="container-fluid">
                    <div className="row header">
                        <div className="col-4">
                            <img className="logo" src={logo} alt="" />
                        </div>
                        <div className="col-8">

                        </div>

                        <div className="col-12">
                            <h1 className="carrito-title">Carrito de compras</h1>

                        </div>

                    </div>
                </div>
            </header>
            <div >
                {newList.length === 0 && <div>Cart is Empty</div>}

                {cartContent.map((item) => (
                    <div className="d-flex justify-content-center cart-mother">
                        <div className=" container cartElement-mother">
                            <div key={item.id} className="row ">
                                <div className="col-4 d-flex justify-content-center align-items-center">

                                    <div>
                                        <img className="img-cartElement" src={item.url} />
                                    </div>


                                </div>
                                <div className="col-6">
                                    <p className="item-name">{item.name}</p>
                                    <p className="item-price">${item.price}</p>
                                </div>
                                <div className="col-2">
                                    <button className="cart-btn"
                                        onClick={() => {

                                            onAdd(item)
                                        }}><img src={add} alt="" /></button>
                                    <div>
                                        {item.qty}
                                    </div>
                                    <button className="cart-btn" onClick={() => onRemove(item)}><img src={minus} alt="" /></button>
                                </div>

                            </div>
                        </div>
                    </div>

                ))}

                <div>
                    <div className="d-flex flex-column align-items-start ml-1 ">
                        <h1>Resumen</h1>
                        <h4>Productos: ${cartTotal(cartContent)}.000</h4>
                        <h4>Envio: $20.000</h4>
                    </div>
                </div>
                <div className="pay-btn">
                    <button className="cart-btn"> Comprar </button>
                </div>
            </div>
        </div>
    )
}

export default Cart