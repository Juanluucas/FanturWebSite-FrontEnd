import React from "react";



function CatalogoPaquetes() {
  
  
  let paquete = [

                {
                    nombre: "fases de grupo",
                    precio: 1500,
                    hotel: "5 estrellas",
                    avion:"si",
                    micro:"si",
                    seguroCovid:"si",
                    cantidad:50,
                    evento:"aca va lista de eventos?",
                }

            ]
  
  
  
  
  
  
  
    return (
    <div className="CatalogoPaquetes">
      
      {/* <!-- ***** Header Area Start//NAVBAR ***** --> */}
      <header class="header-area header-sticky header background-header">
              <div class="container">
                  <div class="row">
                      <div class="col-12">
                          <nav class="main-nav">
                              {/* <!-- ***** Logo Start ***** --> */}
                              <a href="/" class="logo">FAN<em> TUR</em></a>
                             
                              {/* <!-- ***** Menu Start ***** --> */}
                              <ul class="nav">
                                  <li class="scroll-to-section"><a href="/" >Home</a></li>
                                  <li class="scroll-to-section"><a href="/#features">Nuestros Servicios</a></li>
                                  <li class="scroll-to-section"><a href="/#our-classes">Fases</a></li>
                                  <li class="scroll-to-section"><a href="/#schedule">Conocenos</a></li> 
                                  <li ><a href="/CatalogoPaquetes" class="active">Catalogo Paquetes</a></li>
                                  <li class="main-button"><a href="/login">Sign Up</a></li>
                              </ul>        
                              {/* <a class='menu-trigger'>
                                  <span>Menu</span>
                              </a> */}
                              {/* <!-- ***** Menu End ***** --> */}
                            </nav>
                      </div>
                    </div>
                </div>
              
      </header>
          
    {/* <!-- ***** no navbar ***** --> */}
      <section class="section" id="trainers">   
              <div class="container">
                       {/* <!-- ***** TITULO ***** --> */}       
                  <div class="row">
                      <div class="col-lg-6 offset-lg-3">
                          <div class="section-heading">
                              <h2>Paquetes de  <em>Viaje</em></h2>
                              <img src={require("../assets/images/line-dec.png")} alt=""/>
                              <p>Ofrecemos los mejores paquetes de viajes para que no tengas que preocuparte de nada</p>
                          </div>
                      </div>
                    </div>

                  <div class="row" id="listado de paquetes">
                    <div class="col-lg-4" id="paquete1">
                        
                        <div class="movie-item-style-2">
                        <img src={require("../assets/images/mv1.jpg")} alt=""/>
                            <div class="mv-item-infor">
                                <h6><a href="moviesingle.html">oblivion <span>(2012)</span></a></h6>
                                <p class="rate"><i class="ion-android-star"></i><span>8.1</span> /10</p>
                                <p class="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                <p class="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                <p>Director: <a href="/#">Joss Whedon</a></p>
                                <p>Stars: <a href="/#">Robert Downey Jr.,</a> <a href="/#">Chris Evans,</a> <a href="/#">  Chris Hemsworth</a></p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="col-lg-4" id="paquete2"> 
                    <div class="movie-item-style-2">
                        <img src={require("../assets/images/mv2.jpg")} alt=""/>
                            <div class="mv-item-infor">
                                <h6><a href="moviesingle.html">oblivion <span>(2012)</span></a></h6>
                                <p class="rate"><i class="ion-android-star"></i><span>8.1</span> /10</p>
                                <p class="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                <p class="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                <p>Director: <a href="/#">Joss Whedon</a></p>
                                <p>Stars: <a href="/#">Robert Downey Jr.,</a> <a href="/#">Chris Evans,</a> <a href="/#">  Chris Hemsworth</a></p>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-4" id="paquete3">   
                    <div class="movie-item-style-2">
                        <img src={require("../assets/images/mv3.jpg")} alt=""/>
                            <div class="mv-item-infor">
                                <h6><a href="moviesingle.html">oblivion <span>(2012)</span></a></h6>
                                <p class="rate"><i class="ion-android-star"></i><span>8.1</span> /10</p>
                                <p class="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                <p class="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                <p>Director: <a href="/#">Joss Whedon</a></p>
                                <p>Stars: <a href="/#">Robert Downey Jr.,</a> <a href="/#">Chris Evans,</a> <a href="/#">  Chris Hemsworth</a></p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4" id="paquete3">   
                    <div class="movie-item-style-2">
                        <img src={require("../assets/images/mv3.jpg")} alt=""/>
                            <div class="mv-item-infor">
                                <h6><a href="moviesingle.html">oblivion <span>(2012)</span></a></h6>
                                <p class="rate"><i class="ion-android-star"></i><span>8.1</span> /10</p>
                                <p class="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                <p class="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                <p>Director: <a href="/#">Joss Whedon</a></p>
                                <p>Stars: <a href="/#">Robert Downey Jr.,</a> <a href="/#">Chris Evans,</a> <a href="/#">  Chris Hemsworth</a></p>
                            </div>
                        </div>
                    </div>
             

               <div class="col-lg-4" id="paquete3">   
                    <div class="movie-item-style-2">
                        <img src={require("../assets/images/mv3.jpg")} alt=""/>
                            <div class="mv-item-infor">
                                <h6><a href="moviesingle.html">oblivion <span>(2012)</span></a></h6>
                                <p class="rate"><i class="ion-android-star"></i><span>8.1</span> /10</p>
                                <p class="describe">Earth's mightiest heroes must come together and learn to fight as a team if they are to stop the mischievous Loki and his alien army from enslaving humanity...</p>
                                <p class="run-time"> Run Time: 2h21’    .     <span>MMPA: PG-13 </span>    .     <span>Release: 1 May 2015</span></p>
                                <p>Director: <a href="/#">Joss Whedon</a></p>
                                <p>Stars: <a href="/#">Robert Downey Jr.,</a> <a href="/#">Chris Evans,</a> <a href="/#">  Chris Hemsworth</a></p>
                            </div>
                        </div>
                    </div>
             
             
                </div>

              </div>
       </section>
    </div>
  );
}

export default CatalogoPaquetes;
