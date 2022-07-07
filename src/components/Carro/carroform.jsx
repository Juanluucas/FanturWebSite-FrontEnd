import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";
import Header from "../header";

function Carroform(){return (
    <> 
    <Header/>
    <div className="principalLogin">
      
      <form className="formLogin" >     

      <div className="input-container-login"> 
          <br />
          <input
            type="text"
            className="input-login"
            name="firstname"
           
          />
          <label htmlFor="FirstName" className="label-login">First Name:</label>
      </div>
          <br />
      <div className="input-container-login">    
        <div className="unc-password">
          <br />
          <input
            type="text"
            className="input-login"
            name="lastname"
          />
          <br />
          
          <label htmlFor="LastName" className="label-login">Last Name:</label>
        </div>  
      </div>
      <br />
      <div className="input-container-login"> 
          <br />
          <input
            type="text"
            className="input-login"
            name="firstname"
           
          />
          <label htmlFor="FirstName" className="label-login">First Name:</label>
      </div>
          <br />

      <div className="unc-submit">
      <button className="btn">Registrar Pasajeros</button>
  </div>
        
      </form>  
    </div>     
    </>
  );
}



        export default Carroform;
