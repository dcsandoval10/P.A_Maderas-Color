import home from "./img/home.png"
import basket from "./img/basket.png"

function Footer() {
    return (
        <section className="footer-container">
            <div className="footer d-flex justify-content-center align-items-center">
                <button>
                    <img src={home} alt="" />
                </button>
                <button>
                    <img src={basket} alt="" />
                </button>
            </div>
        </section>
    )
}

export default Footer