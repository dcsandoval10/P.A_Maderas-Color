import categoria from './img/Category.png'
import estilos from './img/Compare.png'
import haloween from './img/halloween.png'
import navidad from './img/christmas.png'

function Submenu() {
    return (
        <div className="container">
            <div className="row">
                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button className='submenu-btn'>
                        <img src={categoria} alt="" />
                    </button>
                    </div>
                    <p>Categoria</p>
                </div>

                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button className='submenu-btn'>
                        <img src={estilos} alt="" />
                    </button>
                    </div>
                    <p>Estilos</p>
                </div>

                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button className='submenu-btn'>
                        <img className='btn-img' src={haloween} alt="" />
                    </button>
                    </div>
                    <p>Halloween</p>
                </div>

                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button className='submenu-btn'>
                        <img className='btn-img' src={navidad} alt="" />
                    </button>
                    </div>
                    <p>Navidad</p>
                </div>
               
            </div>
        </div>
    )
}

export default Submenu