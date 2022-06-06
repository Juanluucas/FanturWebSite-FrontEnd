import React from "react";

import 'bootstrap/dist/css/bootstrap.min.css';  

import '../assets/css/templatemo-training-studio.css';  
import Video from '../assets/images/video1-2.mp4'


function Home() {
  return (
    <div className="Home">
      <html lang="en">

        <head>

          <meta charset="utf-8"/>
          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
          <meta name="description" content=""/>
          <meta name="author" content=""/>
          <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&display=swap" rel="stylesheet"/>

          <title>Training Studio - Free CSS Template</title>

          <link rel="stylesheet" type="text/css" href="../assets/css/bootstrap.min.css"/>

          <link rel="stylesheet" type="text/css" href="../assets/css/font-awesome.css"/>

          <link rel="stylesheet" href="../assets/css/templatemo-training-studio.css"/>

          </head>
          
          <body>
          
          

          
          {/* <!-- ***** Header Area Start//NAVBAR ***** --> */}
          <header class="header-area header-sticky">
              <div class="container">
                  <div class="row">
                      <div class="col-12">
                          <nav class="main-nav">
                              {/* <!-- ***** Logo Start ***** --> */}
                              <a href="/" class="logo">FAN<em> TUR</em></a>
                              {/* <!-- ***** Logo End ***** --> */}
                              {/* <!-- ***** Menu Start ***** --> */}
                              <ul class="nav">
                                  <li class="scroll-to-section"><a href="#top" class="active">Home</a></li>
                                  <li class="scroll-to-section"><a href="#features">Nuestros Servicios</a></li>
                                  <li class="scroll-to-section"><a href="#our-classes">Fases</a></li>
                                  <li ><a href="/CatalogoPaquetes">Catalogo Paquetes</a></li>
                                  <li class="scroll-to-section"><a href="#schedule">Conocenos</a></li> 
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
          

          {/* <!-- ***** Main Banner Area Start ***** --> */}
          <div class="main-banner" id="top">



              {/* <video autoplay muted loop id="bg-video">
                  <source src={require("../assets/images/gym-video.mp4")} type="video/mp4" />
              </video> */}

              <video autoPlay muted loop id="bg-video">
              <source src= {Video} type='video/mp4' />
              </video>




              <div class="video-overlay header-text">
                  <div class="caption">
                      <h6>Copa Mundial de la FIFA Catar 2022</h6>
                      <h2>Donde vivirás el <em>Fútbol</em></h2>
                      <div class="main-button scroll-to-section">
                          <a href="#features">Nuestros Servicios</a>
                      </div>
                  </div>
              </div>
          </div>
          {/* <!-- ***** Main Banner Area End ***** --> */}

          {/* <!-- ***** SERVICIOS ESTRELLAS ***** --> */}
          <section class="section" id="features">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 offset-lg-3">
                          <div class="section-heading">
                              <h2>Servicios <em>Estrellas</em></h2>
                              <img src={require("../assets/images/line-dec.png")} alt="waves"/>
                              <p>items especiales que ofrecemos a nuestros clientes especiales</p>
                          </div>
                      </div>
                      <div class="col-lg-6">
                          <ul class="features-items">
                              <li class="feature-item">
                                  <div class="left-icon">
                                      <img src={require("../assets/images/features-first-icon.png")} alt="First One"/>
                                  </div>
                                  <div class="right-content">
                                      <h4>Hoteles de Lujos</h4>
                                      <p>Hoteles a minutos de los estadios, con todas las atenciones que un verdadero fan necesita</p>
                                      <a href="/#" class="text-button">Discover More</a>
                                  </div>
                              </li>
                              <li class="feature-item">
                                  <div class="left-icon">
                                      <img src={require("../assets/images/features-first-icon.png")} alt="second one"/>
                                  </div>
                                  <div class="right-content">
                                      <h4>Cobertura medica COVID</h4>
                                      <p>Te tenemos cubierto en caso de que te agarre el COVID-19 con un coctel de vacunas no aprobadas</p>
                                      <a href="/#" class="text-button">Discover More</a>
                                  </div>
                              </li>
                              <li class="feature-item">
                                  <div class="left-icon">
                                      <img src={require("../assets/images/features-first-icon.png")} alt="third gym training"/>
                                  </div>
                                  <div class="right-content">
                                      <h4>Ven con tu familia o amigos</h4>
                                      <p>Nuestro sistema web cuenta con la opcion de que adquieras el paquete para tu grupo familiar o amistades, con una sola gestion</p>
                                      <a href="/#" class="text-button">Discover More</a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                      <div class="col-lg-6">
                          <ul class="features-items">
                              <li class="feature-item">
                                  <div class="left-icon">
                                      <img src={require("../assets/images/features-first-icon.png")} alt="fourth muscle"/>
                                  </div>
                                  <div class="right-content">
                                      <h4>Entradas a los Partidos</h4>
                                      <p>Todos nuestros paquetes cuentan con la entrada para los partidos, para que no te quedes afuera de ninguno</p>
                                      <a href="/#" class="text-button">Discover More</a>
                                  </div>
                              </li>
                              <li class="feature-item">
                                  <div class="left-icon">
                                      <img src={require("../assets/images/features-first-icon.png")} alt="training fifth"/>
                                  </div>
                                  <div class="right-content">
                                      <h4>Aviones</h4>
                                      <p>Contamos con una flota de aviones propias para que llegues a Qatar estés donde estés</p>
                                      <a href="/#" class="text-button">Discover More</a>
                                  </div>
                              </li>
                              <li class="feature-item">
                                  <div class="left-icon">
                                      <img src={require("../assets/images/features-first-icon.png")} alt="gym training"/>
                                  </div>
                                  <div class="right-content">
                                      <h4>Micro</h4>
                                      <p>Autobuses del hotel al estadio incluido con la compra del paquete.</p>
                                      <a href="/#" class="text-button">Discover More</a>
                                  </div>
                              </li>
                          </ul>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- ***** Features Item End ***** --> */}

          {/* <!-- ***** Call to Action Start ***** --> */}
          <section class="section" id="call-to-action">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-10 offset-lg-1">
                          <div class="cta-content">
                              <h2>NO LO <em>PIENSES</em>, VIVE LA <em>EXPERIENCIA</em>!</h2>
                              <p>El torneo mas importante de deportes a nivel Mundial, solo ocurre cada 4 años, vas a salteartelo?  .</p>
                              <div class="main-button scroll-to-section">
                                  <a href="/CatalogoPaquetes">Ver Paquetes</a>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </section>
          {/* <!-- ***** Call to Action End ***** --> */}

          {/* <!-- ***** FASES DEL MUNDIAL ***** --> */}
          <section class="section" id="our-classes">
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 offset-lg-3">
                          <div class="section-heading">
                              <h2>Las fases del<em> Mundial</em></h2>
                              <img src={require("../assets/images/line-dec.png")} alt=""/>
                              <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                          </div>
                      </div>
                  </div>
                  <div class="row" id="tabs">
                    <div class="col-lg-4">
                      <ul>
                        <li><a href='#tabs-1'><img src={require("../assets/images/tabs-first-icon.png")} alt=""/>Fases de grupos</a></li>
                        <li><a href='#tabs-2'><img src={require("../assets/images/tabs-first-icon.png")} alt=""/>Octavos de final</a></li>
                        <li><a href='#tabs-3'><img src={require("../assets/images/tabs-first-icon.png")} alt=""/>Cuartos de final</a></li>
                        <li><a href='#tabs-4'><img src={require("../assets/images/tabs-first-icon.png")} alt=""/>Semifinal</a></li>
                        <li><a href='#tabs-5'><img src={require("../assets/images/tabs-first-icon.png")} alt=""/>final</a></li>
                        <div class="main-rounded-button"><a href="/CatalogoPaquetes">Vea nuestros Paquetes</a></div>
                      </ul>
                    </div>
                    <div class="col-lg-8">
                      <section class='tabs-content'>
                        <article id='tabs-1'>
                          <h4>Fases de grupos</h4>
                          <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                            <div class="main-button">
                              <a href="/#">paquetes filtrados?</a>
                          </div>
                          <img src={require("../assets/images/training-image-01.jpg")} alt="First Class"/>
                          
                        </article>
                        <article id='tabs-2'>
                          <h4>Octavos de final</h4>
                          <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                            <div class="main-button">
                              <a href="/#">paquetes filtrados?</a>
                          </div>
                          <img src={require("../assets/images/training-image-01.jpg")} alt="First Class"/>
                          
                        </article>
                        <article id='tabs-3'>
                          <h4>Cuartos de final</h4>
                          <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                            <div class="main-button">
                              <a href="/#">paquetes filtrados?</a>
                          </div>
                          <img src={require("../assets/images/training-image-01.jpg")} alt="First Class"/>
                          
                        </article>
                        <article id='tabs-4'>
                          <h4>Semifinal</h4>
                          <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                            <div class="main-button">
                              <a href="/#">paquetes filtrados?</a>
                          </div>
                          <img src={require("../assets/images/training-image-01.jpg")} alt="First Class"/>
                          
                        </article>
                        <article id='tabs-5'>
                          <h4>Final</h4>
                          <p>Phasellus convallis mauris sed elementum vulputate. Donec posuere leo sed dui eleifend hendrerit. Sed suscipit suscipit erat, sed vehicula ligula. Aliquam ut sem fermentum sem tincidunt lacinia gravida aliquam nunc. Morbi quis erat imperdiet, molestie nunc ut, accumsan diam.</p>
                            <div class="main-button">
                              <a href="/#">paquetes filtrados?</a>
                          </div>
                          <img src={require("../assets/images/training-image-01.jpg")} alt="First Class"/>
                          
                        </article>
                      </section>
                    </div>
                  </div>
              </div>
          </section>
          
          {/* <!-- ***** Conocenos ***** --> */}
          <section class="section" id="schedule">        
              <div class="container">
                  <div class="row">
                      <div class="col-lg-6 offset-lg-3 section-heading">
                              <h2>aca va  <em>conocenos /hacer css lindo aca</em></h2>
                              <img src={require("../assets/images/line-dec.png")} alt=""/>
                              <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>                      
                      </div>
                  </div>
                  <div class="row">
                      <div class="col-lg-4">
                          <div class="trainer-item">
                              <div class="image-thumb">
                                  <img src={require("../assets/images/first-trainer.jpg")} alt=""/>
                              </div>
                              <div class="down-content">
                                  <span>Strength Trainer</span>
                                  <h4>Bret D. Bowers</h4>
                                  <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                                  <ul class="social-icons">
                                      <li><a href="/#"><i class="fa fa-facebook"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-linkedin"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-behance"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <div class="trainer-item">
                              <div class="image-thumb">
                                  <img src={require("../assets/images/second-trainer.jpg")} alt=""/>
                              </div>
                              <div class="down-content">
                                  <span>Muscle Trainer</span>
                                  <h4>Hector T. Daigl</h4>
                                  <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                                  <ul class="social-icons">
                                      <li><a href="/#"><i class="fa fa-facebook"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-linkedin"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-behance"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                      <div class="col-lg-4">
                          <div class="trainer-item">
                              <div class="image-thumb">
                                  <img src={require("../assets/images/third-trainer.jpg")} alt=""/>
                              </div>
                              <div class="down-content">
                                  <span>Power Trainer</span>
                                  <h4>Paul D. Newman</h4>
                                  <p>Bitters cliche tattooed 8-bit distillery mustache. Keytar succulents gluten-free vegan church-key pour-over seitan flannel.</p>
                                  <ul class="social-icons">
                                      <li><a href="/#"><i class="fa fa-facebook"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-twitter"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-linkedin"></i></a></li>
                                      <li><a href="/#"><i class="fa fa-behance"></i></a></li>
                                  </ul>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              
          </section>

         
                
          {/* <!-- ***** Footer Start ***** --> */}
          <footer>
              <div class="container">
                  <div class="row">
                      <div class="col-lg-12">
                          <p>Copyright &copy; 2020 Training Studio
                          
                          - Designed by <a rel="nofollow" href="https://templatemo.com" class="tm-text-link" target="_parent">TemplateMo</a></p>
                          
                          {/* <!-- You shall support us a little via PayPal to info@templatemo.com --> */}
                          
                      </div>
                  </div>
              </div>
          </footer>

          {/* <!-- jQuery --> */}
          <script src="../assets/js/jquery-2.1.0.min.js"></script>

          {/* <!-- Bootstrap --> */}
          <script src="../assets/js/popper.js"></script>
          <script src="../assets/js/bootstrap.min.js"></script>

          {/* <!-- Plugins --> */}
          <script src="../assets/js/scrollreveal.min.js"></script>
          <script src="../assets/js/waypoints.min.js"></script>
          <script src="../assets/js/jquery.counterup.min.js"></script>
          <script src="../assets/js/imgfix.min.js"></script> 
          <script src="../assets/js/mixitup.js"></script> 
          <script src="../assets/js/accordions.js"></script>
          
          {/* <!-- Global Init --> */}
          <script src="../assets/js/custom.js"></script>

        </body>
      </html>

    </div>
  );
}

export default Home;