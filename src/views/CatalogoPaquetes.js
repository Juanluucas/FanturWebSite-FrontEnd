import React from "react";
import Paquete from "./paquete";

function CatalogoPaquetes() {
  //   let paquete = [

  //                 {
  //                     nombre: "fases de grupo",
  //                     precio: 1500,
  //                     hotel: "5 estrellas",
  //                     avion:"si",
  //                     micro:"si",
  //                     seguroCovid:"si",
  //                     cantidad:50,
  //                     evento:"aca va lista de eventos?",
  //                 }

  //             ]

  return (
    <div className="CatalogoPaquetes">
      {/* <!-- ***** Header Area Start//NAVBAR ***** --> */}
      <header className="header-area header-sticky header background-header">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <nav className="main-nav">
                {/* <!-- ***** Logo Start ***** --> */}
                <a href="/" className="logo">
                  FAN<em> TUR</em>
                </a>

                {/* <!-- ***** Menu Start ***** --> */}
                <ul className="nav">
                  <li className="scroll-to-section">
                    <a href="/">Home</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#features">Nuestros Servicios</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#our-classes">Fases</a>
                  </li>
                  <li className="scroll-to-section">
                    <a href="/#schedule">Conocenos</a>
                  </li>
                  <li>
                    <a href="/CatalogoPaquetes" className="active">
                      Catalogo Paquetes
                    </a>
                  </li>
                  <li className="main-button">
                    <a href="/login">Sign Up</a>
                  </li>
                </ul>
                {/* <a className='menu-trigger'>
                                  <span>Menu</span>
                              </a> */}
                {/* <!-- ***** Menu End ***** --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* <!-- ***** no navbar ***** --> */}
      <section className="section" id="trainers">
        <div className="container">
          {/* <!-- ***** TITULO ***** --> */}
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="section-heading">
                <h2>
                  Paquetes de <em>Viaje</em>
                </h2>
                <img src={require("../assets/images/line-dec.png").default} alt="" />
                <p>
                  Ofrecemos los mejores paquetes de viajes para que no tengas
                  que preocuparte de nada.
                </p>
              </div>
            </div>
          </div>

          <div className="row" id="listado de paquetes">
            

            <Paquete nombre="fases de grupo" precio="1500" hotel="5 estrellas" avion="si" micro="si" seguroCovid="si" cantidad="0" evento="aca va lista de eventos?" img="https://cdn.pixabay.com/photo/2021/09/02/16/48/cat-6593947_960_720.jpg"/>
                       
            
          </div>
            
            
              
        </div>
      </section>
    </div>
  );
}

export default CatalogoPaquetes;
