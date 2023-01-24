import { useState } from "react";
import { json } from "react-router-dom";

function updateLS(cartContent, newList) {
    newList =cartContent
    localStorage.setItem("elemCarrito", JSON.stringify(newList))
    
}

function Cart(props) {
    let bringData = localStorage.getItem("elemCarrito")
    let newList = JSON.parse(bringData)
    const { cartItems } = props;
    console.log("Esto es lo que ve el carrito" + cartItems)

    const [cartContent, setCartContent] = useState(newList)
    
    console.log("LISTA1 "+JSON.stringify(cartContent))


    const onAdd = (product) => {
        
        console.log("Este es lo que llega al onClik" + JSON.stringify(product))
        console.log("ENTRY LIST ONADD"+ JSON.stringify( cartContent))

        const exist = cartContent.find(x => x.id === product.id)
        console.log("SI EXISTE?" + JSON.stringify(exist))
        if (exist) {

            setCartContent(
                cartContent.map((x) => x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x)
            )
            
            console.log("aaaaaaa"+ JSON.stringify(cartContent))
            updateLS(cartContent, newList)
        }
        else {
            console.log("Esto es lo que se va a agregar al carrito en el primer cli " + JSON.stringify(product))


            newList = [...newList, { ...product, qty: 1 }]

            // updateLS(cartItems)
            console.log("Me estoy ejecutando la primera vez" + JSON.stringify(newList))

        }
    }

    const onRemove = (product) => {
        const exist = cartContent.find((x) => x.id === product.id)
        if (exist.qty === 1) {
           
            setCartContent (cartContent.filter((x) => x.id !== product.id))
        }
        else {

            setCartContent( cartContent.map((x) =>
                x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x)
            )

        }
    }

    return (
        <div>
            <h1>soy el carro</h1>
            <div>
                {newList.length === 0 && <div>Cart is Empty</div>}
                {console.log("hola")}

                {cartContent.map((item) => (
                    <div key={item.id} className="row">
                        <div> {item.name}</div>
                        <div>
                            <button
                                onClick={() => {

                                    onAdd(item)
                                }}>+</button>
                            <button onClick={() => onRemove(item)}>-</button>
                        </div>
                        <div>
                            {item.qty}
                        </div>
                    </div>

                ))}
            </div>
        </div>
    )
}

export default Cart