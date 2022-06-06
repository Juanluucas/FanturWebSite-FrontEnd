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
          

      <section class="section" id="trainers">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 offset-lg-3">
                          <div class="section-heading">
                              <h2>Paquetes de  <em>Viaje</em></h2>
                              <img src={require("../assets/images/line-dec.png")} alt=""/>
                              <p>Ofrecemos los mejores paquetes de viajes para que no tengas que preocuparte de nada</p>
                          </div>
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-4">
                          paquete1
                      </div>
                      <div class="col-lg-4">
                          paquete2
                      </div>
                      <div class="col-lg-4">
                         paquete3
                      </div>
                      
                  </div>
              </div>
          </section>
    </div>
  );
}

export default CatalogoPaquetes;
