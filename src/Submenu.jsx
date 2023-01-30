import categoria from './img/Category.png'
import estilos from './img/Compare.png'
import haloween from './img/halloween.png'
import navidad from './img/christmas.png'

function Submenu(props) {
    const {filterSubmenu, setFiltroActivo, filtroActivo} = props

    let all = "all"
    let comedor = "comedor"
    let mesa = "mesa"
    let porta = "porta"

    function updateFilter(filter) {
        setFiltroActivo(filter)
    }

    return (
        <div className="container">
            <div className="row">
                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button onClick={()=>updateFilter(all)} className='submenu-btn'>
                        <img src={categoria} alt="" />
                    </button>
                    </div>
                    <p>Categoria</p>
                </div>

                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button onClick={()=>updateFilter(comedor)} className='submenu-btn'>
                        <img src={estilos} alt="" />
                    </button>
                    </div>
                    <p>Estilos</p>
                </div>

                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button onClick={()=>updateFilter(mesa)} className='submenu-btn'>
                        <img className='btn-img' src={haloween} alt="" />
                    </button>
                    </div>
                    <p>Halloween</p>
                </div>

                <div className="sub-menu-child col-3 ">
                    <div className=' d-flex justify-content-center'>
                    <button onClick={()=>updateFilter(porta)} className='submenu-btn'>
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