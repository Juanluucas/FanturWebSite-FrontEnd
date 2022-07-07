import React from "react"


export default function Paquete(props) {
    //aca tenemos que chequear si el usuario es un admin para renderizarle el boton editar
    return (
       
        <div className="col-lg-4" id="paquete1">
                        
            <div className="movie-item-style-2">
            <br/>
                <div className="cuadro-imagen">
                <img src={require("../assets/images/mv1.jpg")} alt=""/>
                {/* <img className="paquete-imagen" src={props.img} alt=""/> */}
                </div>
                <br/>
                    <div className="mv-item-infor">
                        <h6><a href="moviesingle.html" className="paquete-titulo">{props.name}</a></h6>
                        <br/>
                        <p>Descripcion: {props.description} </p> <br/>
                        <p className="rate"><i className="ion-android-star"></i><span>Precio:</span> ${props.packagePrice}</p>
                        
                        {<p className="run-time"> Avion: {props.packageServices} </p>}
                                           
                        
                        <br/>
                        <li className="main-button paquete-boton">
                            <a href="/carroform">COMPRAR</a>
                        </li>
                        <br/>
                        {/*aca hay que poner un if para que dibuje el boton editar */}
                        <li className="main-button paquete-boton">
                            <a href="/editarpaquetes">EDITAR</a>
                        </li>
                        <br/>
                    
                                   
                    </div>
            </div>
        
        </div>
    )}


    