
export default function Paquete(props) {

    return (
        <div class="col-lg-4" id="paquete1">
                        
            <div class="movie-item-style-2">
            <br/>
                <div class="paquete-imagen">
                <img src={require("../assets/images/mv1.jpg")} alt=""/>
                </div>
                <br/>
                    <div class="mv-item-infor">
                        <h6><a href="moviesingle.html" class="paquete-titulo">{props.nombre}</a></h6>
                        <br/>
                        <p class="rate"><i class="ion-android-star"></i><span>Precio:</span> ${props.precio}</p>
                        <p class="describe">Hotel: {props.hotel} </p>
                        <p class="run-time"> Avion: {props.avion} </p>
                        <p>Micro: {props.micro}</p>
                        <p>SeguroCovid: {props.seguroCovid}</p>
                        <p>Cantidad: {props.cantidad}</p>
                        <p>Eventos: {props.evento} </p>
                        <br/>
                        <li className="main-button paquete-boton">
                            <a href="/carro">RESERVAR</a>
                        </li>
                        <br/>
                                   
                    </div>
            </div>
        
        </div>
    )}


    