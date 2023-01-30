import React from 'react';
import catalogo from './data'
import add from './img/add.png'
import menos from './img/menos.png'
import { useState } from "react";

function yaExisto(a, pullLocal) {

    let temporal1 = a.id
    let temporal2 = pullLocal.find(x => x.id === a.id)
    console.log()

    if (temporal2 == null) {
        return 0
    }
    else {
        return temporal2.qty
    }



}

function Nuevo(props) {
    const { filtroActivo, onAdd, onRemove } = props

    const [count, setCount] = React.useState(0)

    let cata = catalogo.data.products

    const renderCard = (a, index,) => {

        let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))

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
                            <div className='col-3 '>
                            </div>
                            <div className='row'>
                                <div className='col-5'>
                                    <button onClick={() => {
                                        onAdd(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                        // addCounter()
                                    }} className='add-btn' ><img src={add} alt="" /></button>
                                </div>
                                <div className='col-2'>
                                    <p className='cantidad'>
                                        {yaExisto(a, pullLocal)}
                                    </p>
                                </div>
                                <div className='col-5 '>
                                    <button onClick={() => {
                                        onRemove(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                    }} className='add-btn' ><img src={menos} alt="" /></button>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            )
        }




    }

    const renderMesa = (a, index) => {

        let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))
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
                            <div className='col-3 '>
                            </div>
                            <div className='row'>
                                <div className='col-5'>
                                    <button onClick={() => {
                                        onAdd(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                        // addCounter()
                                    }} className='add-btn' ><img src={add} alt="" /></button>
                                </div>
                                <div className='col-2'>
                                    <p className='cantidad'>
                                        {yaExisto(a, pullLocal)}
                                    </p>
                                </div>
                                <div className='col-5 '>
                                    <button onClick={() => {
                                        onRemove(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                    }} className='add-btn' ><img src={menos} alt="" /></button>
                                </div>
                            </div>

                        </div>


                    </div>

                </div>
            )
        }




    }

    const renderCel = (a, index) => {

        let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))

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
                            <div className='col-3 '>
                            </div>
                            <div className='row'>
                                <div className='col-5'>
                                    <button onClick={() => {
                                        onAdd(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                        // addCounter()
                                    }} className='add-btn' ><img src={add} alt="" /></button>
                                </div>
                                <div className='col-2'>
                                    <p className='cantidad'>
                                        {yaExisto(a, pullLocal)}
                                    </p>
                                </div>
                                <div className='col-5 '>
                                    <button onClick={() => {
                                        onRemove(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                    }} className='add-btn' ><img src={menos} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const renderComedor = (a, index) => {

        let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))

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
                            <div className='col-3 '>
                            </div>
                            <div className='row'>
                                <div className='col-5'>
                                    <button onClick={() => {
                                        onAdd(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                        // addCounter()
                                    }} className='add-btn' ><img src={add} alt="" /></button>
                                </div>
                                <div className='col-2'>
                                    <p className='cantidad'>
                                        {yaExisto(a, pullLocal)}
                                    </p>
                                </div>
                                <div className='col-5 '>
                                    <button onClick={() => {
                                        onRemove(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                    }} className='add-btn' ><img src={menos} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const renderPorta = (a, index) => {

        let pullLocal = JSON.parse(localStorage.getItem("elemCarrito"))

        if (a.category == "Porta Celulares") {
            return (
                <div className="slider1-child">
                    <div className='d-flex justify-content-center align-items-center'>
                        <img className='slider1-image' src={a.url} alt="" />
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <h3 className='col-12'>{a.name}</h3>
                        </div>
                        <div className='row'>
                            <h5 className='col-6'>${a.price}</h5>
                            <div className='col-3 '>
                            </div>
                            <div className='row'>
                                <div className='col-5'>
                                    <button onClick={() => {
                                        onAdd(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                        // addCounter()
                                    }} className='add-btn' ><img src={add} alt="" /></button>
                                </div>
                                <div className='col-2'>
                                    <p className='cantidad'>
                                        {yaExisto(a, pullLocal)}
                                    </p>
                                </div>
                                <div className='col-5 '>
                                    <button onClick={() => {
                                        onRemove(a)
                                        console.log("Este es el item que se manda con el onclick" + JSON.stringify(a))
                                    }} className='add-btn' ><img src={menos} alt="" /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }

    const filter = () => {
        // let pullFilter = localStorage.getItem("filtro")

        let filtro = filtroActivo

        console.log("FILTROOOOO" + filtro)
        if (filtro == "all") {
            return (
                <div>
                    <div className="slider1">
                        {cata.map(renderCard)}
                    </div>
                    <div className="slider1">
                        {cata.map(renderMesa)}
                    </div>
                    <div className="slider1">
                        {cata.map(renderCel)}
                    </div>
                </div>
            )
        }
        else if (filtro == "mesa") {
            return (
                <div>
                    <div className="slider1">
                        {cata.map(renderMesa)}
                    </div>
                </div>
            )
        }
        else if (filtro == "comedor") {
            return (
                <div>
                    <div className="slider1">
                        {cata.map(renderComedor)}
                    </div>
                </div>
            )
        }
        else if (filtro == "porta"){
            return (
                <div>
                    <div className="slider1">
                        {cata.map(renderPorta)}
                    </div>
                </div>
            )
        }

    }




    return (
        <div className="contenedor">
            <div>
                <h1>{filter()}</h1>

            </div>
            <div className="mini-header d-flex justify-content-around">
                <h1>Nuevos PRODUCTOS </h1>
                <button>ver todos</button>
            </div>

            <img src="./img/Product.heic" alt="" />


        </div >

    )
}


export default Nuevo