import React from "react";
import logo from "./img/logo.jpg"
import lupa from "./img/lupa.png"

function Header() {

    return (
        <header>
            <div className="container-fluid">
                <div className="row header">
                    <div className="col-4">
                        <img className="logo" src={logo} alt="" />
                    </div>

                    <form action="" className="col-8 d-flex justify-content-center align-items-center">
                        <input className="buscar" placeholder="Buscar" type="text" />
                        <button className="botLupa d-flex justify-content-center align-items-center" type="submit"><img className="lupa" src={lupa} /></button>
                    </form>

                </div>
            </div>
        </header>
    )

}

export default Header