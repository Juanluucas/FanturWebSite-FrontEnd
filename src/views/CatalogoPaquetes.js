import React from "react";



function CatalogoPaquetes() {
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
                              <h2>Expert <em>Trainers</em></h2>
                              <img src={require("../assets/images/line-dec.png")} alt=""/>
                              <p>Nunc urna sem, laoreet ut metus id, aliquet consequat magna. Sed viverra ipsum dolor, ultricies fermentum massa consequat eu.</p>
                          </div>
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
    </div>
  );
}

export default CatalogoPaquetes;
