import imagen from './img/Product.jpg'
import catalogo from './data'
import add from './img/add.png'

function Nuevo() {


    let cata = catalogo.data.products

    const renderCard = (a, index) => {
        
        if (a.category=="Comedor")
        {
            return (
                <div className="slider1-child">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='slider1-image' src={a.url} alt="" />
                    </div>
                    <div className=''>
                        <h3 className='mb-auto p-2'>{a.name}</h3>
                        <h5>${a.price}</h5>
                    </div>
                    <button><img src={add} alt="" /></button>
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
            <img src="./img/Product.heic" alt="" />
        </div >

    )
}


export default Nuevo