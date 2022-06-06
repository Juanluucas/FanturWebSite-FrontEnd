
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
                        <h6><a href="moviesingle.html" class="paquete-titulo">titulo paquete <span>(2012)</span></a></h6>
                        <p class="rate"><i class="ion-android-star"></i><span>8.1</span> /10</p>
                        <p class="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                        <p class="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                        <p>Director: <a href="/#">Joss Whedon</a></p>
                        <p>Stars: <a href="/#">Robert Downey Jr.,</a> <a href="/#">Chris Evans,</a> <a href="/#">  Chris Hemsworth</a></p>
                        <br/>
                        <li className="main-button paquete-boton">
                            <a href="/carro">RESERVAR</a>
                        </li>
                        <br/>

                    </div>
            </div>
        
        </div>
    )}


    