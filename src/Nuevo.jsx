import imagen from './img/Product.jpg'
import catalogo from './data'
import add from './img/add.png'

function Nuevo(props) {
    const {products, onAdd} = props

    let cata = catalogo.data.products

    const renderCard = (a, index) => {

        if (a.category == "Comedor") {
            return (
                <div className="slider1-child">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='slider1-image' src={a.url} alt="" />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <h3 className='mb-auto p-2 col-12'>{a.name}</h3>
                        </div>
                        <div className='row'>
                            <h5 className='col-6'>${a.price}</h5>
                            <div className='col-6 '>
                                <button onClick={() => {
                                    onAdd(a)
                                    console.log("Este es el item que se manda con el onclick"+JSON.stringify(a))}} className='add-btn' ><img src={add} alt="" /></button>
                            </div>

                        </div>


                    </div>

                </div>
            )
        }
        



    }

    const renderMesa = (a, index) => {

        if (a.category == "Mesas") {
            return (
                <div className="slider1-child">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='slider1-image' src={a.url} alt="" />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <h3 className='mb-auto p-2 col-12'>{a.name}</h3>
                        </div>
                        <div className='row'>
                            <h5 className='col-6'>${a.price}</h5>
                            <div className='col-6 '>
                                <button onClick={() => {
                                    onAdd(a)
                                    console.log("Este es el item que se manda con el onclick"+JSON.stringify(a))}} className='add-btn' ><img src={add} alt="" /></button>
                            </div>

                        </div>


                    </div>

                </div>
            )
        }
        



    }

    const renderCel = (a, index) => {

        if (a.category == "Porta Celulares") {
            return (
                <div className="slider1-child">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='slider1-image' src={a.url} alt="" />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <h3 className='mb-auto p-2 col-12'>{a.name}</h3>
                        </div>
                        <div className='row'>
                            <h5 className='col-6'>${a.price}</h5>
                            <div className='col-6 '>
                                <button onClick={() => {
                                    onAdd(a)
                                    console.log("Este es el item que se manda con el onclick"+JSON.stringify(a))}} className='add-btn' ><img src={add} alt="" /></button>
                            </div>

                        </div>


                    </div>

                </div>
            )
        }
        



    }


    return (
        <div className="contenedor">
            <div className="mini-header d-flex justify-content-around">
                <h1>Nuevos PRODUCTOS </h1>
                <button>ver todos</button>
            </div>
            <div className="slider1">
                {cata.map(renderCard)}
            </div>
            <div className="slider1">
                {cata.map(renderMesa)}
            </div>
            <div className="slider1">
                {cata.map(renderCel)}
            </div>
            <img src="./img/Product.heic" alt="" />
        </div >

    )
}


export default Nuevo