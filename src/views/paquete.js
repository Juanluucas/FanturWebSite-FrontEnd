import React from "react"

export default function Paquete(props) {
    
    return (
       
        <div className="col-lg-4" id="paquete1">
                        
            <div className="movie-item-style-2">
            <br/>
                <div className="cuadro-imagen">
                <img className="paquete-imagen" src={props.img} alt=""/>
                </div>
                <br/>
                    <div className="mv-item-infor">
                        <h6><a href="moviesingle.html" className="paquete-titulo">{props.nombre}</a></h6>
                        <br/>
                        <p>Descripcion: {props.descripcion} </p> <br/>
                        <p className="describe">Estadia: {props.hotel} </p>
                        <p className="run-time"> Avion: {props.avion} </p>
                        <p>Micro: {props.micro}</p>
                        <p>SeguroCovid: {props.seguroCovid}</p>                       
                        <p className="rate"><i className="ion-android-star"></i><span>Precio:</span> ${props.precio}</p>
                        <br/>
                        <li className="main-button paquete-boton">
                            <a href="/carro">RESERVAR</a>
                        </li>
                        <br/>
                                   
                    </div>
            </div>
        
        </div>
    )}


    