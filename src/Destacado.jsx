import React from "react";
import logo from "./img/Product.jpg"


function Destacado() {


    window.addEventListener("load", () => {
        const destacadosContainer = document.getElementById("scroller")
        const destacadosContainerWidth = destacadosContainer.scrollWidth

        console.log("destacados" + destacadosContainer)
        console.log("width" + destacadosContainerWidth)
        console.log("left" + destacadosContainer.scrollLeft)



        window.setInterval(() => {

            if (destacadosContainer.scrollLeft < 320) {

                destacadosContainer.scrollTo(destacadosContainer.scrollLeft + 1, 0)
                console.log("I was run")
                console.log("left" + destacadosContainer.scrollLeft)
            }
            // if (destacadosContainer.scrollLeft !== destacadosContainerWidth) {
            //     destacadosContainer.scrollTo(destacadosContainer.scrollLeft + 1, 0);

            // }
        }, 5)
    })


    return (
        <section className="slider">

            <div className="slider-child d-flex justify-content-center align-items-center">

                <div className="slider-inner-child d-flex justify-content-center align-items-center">
                    
                    <div className="img-container">
                        <img className="slider-image" src={logo} alt="" />
                    </div>
                    <div>
                        <p className="destacados"><b>Destacados</b></p>
                        <h5><b> Mesa Laptop </b></h5>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="slider-child d-flex justify-content-center align-items-center">
                <div className="slider-inner-child d-flex justify-content-center align-items-center">
                    <div className="img-container">
                        <img className="slider-image" src={logo} alt="" />
                    </div>
                    <div>
                        <p className="destacados"><b>Destacados</b></p>
                        <h5><b> Mesa Laptop </b></h5>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="slider-child d-flex justify-content-center align-items-center">
                <div className="slider-inner-child d-flex justify-content-center align-items-center">
                    <div className="img-container">
                        <img className="slider-image" src={logo} alt="" />
                    </div>
                    <div>
                        <p className="destacados"><b>Destacados</b></p>
                        <h5><b> Mesa Laptop </b></h5>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="slider-child d-flex justify-content-center align-items-center">
                <div className="slider-inner-child d-flex justify-content-center align-items-center">
                    <div className="img-container">
                        <img className="slider-image" src={logo} alt="" />
                    </div>
                    <div>
                        <p className="destacados"><b>Destacados</b></p>
                        <h5><b> Mesa Laptop </b></h5>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>
            <div className="slider-child d-flex justify-content-center align-items-center">
                <div className="slider-inner-child d-flex justify-content-center align-items-center">
                    <div className="img-container">
                        <img className="slider-image" src={logo} alt="" />
                    </div>
                    <div>
                        <p className="destacados"><b>Destacados</b></p>
                        <h5><b> Mesa Laptop </b></h5>
                        <button className="btn-comprar">Comprar</button>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Destacado