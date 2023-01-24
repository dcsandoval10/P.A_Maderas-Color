import home from "./img/home.png"
import basket from "./img/basket.png"

function updateLS(cartContent, newList) {
    // newList =cartContent
    localStorage.setItem("elemCarrito", JSON.stringify(newList))
    
}

function Footer() {
    return (
        <section className="footer-container">
            <div className="footer d-flex justify-content-center align-items-center">
                <button>
                    <a href="/home"><img src={home} alt="" /></a>
                    
                </button>
                <button>
                    <a href="/cart"><img src={basket} alt="" /></a>
                    
                </button>
            </div>
        </section>
    )
}

export default Footer