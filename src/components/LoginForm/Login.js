import React, { Component } from "react";
//import '../assets/css/Login.css';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import md5 from "md5";
import { Link } from "react-router-dom";
import "./loginForm.css";
import Cookies from "universal-cookie";
import Header from "../header";

const baseUrl = "http://localhost:3001/usuarios"; // Este es el backend al cual nos comunicamos
const cookies = new Cookies();

class Login extends Component {
  state = {
    form: {
      UserName: "",
      PassWord: "",
    },
  };

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  /* iniciarSesion=async()=>{
        
        var esValido = true;      // Borrar esto si, y descomentar lo de arriba para volver a controlar un EMAIL
        if (esValido === true) {
          // aca me empiezo a comunicar con la base de datos
        
          await axios.get(baseUrl, {params: {UserName: this.state.form.UserName, PassWord: md5(this.state.form.PassWord)} })
          .then(response=>{
            return response.data;
          })
          .then(response=>{
            if(response.length>0){
                var respuesta=response[0];
                cookies.set('id', respuesta.id, {path: "/"});
                cookies.set('UserName', respuesta.UserName, {path: "/"});
                cookies.set('Role', respuesta.Role, {path: "/"});
                cookies.set('PhoneNumber', respuesta.phoneNumber, {path: "/"});
                cookies.set('FirstName', respuesta.FirstName, {path: "/"});
                cookies.set('LastName', respuesta.LastName, {path: "/"});
                cookies.set('Email', respuesta.Email, {path: "/"});
                console.log("qweqweqweqw");
                alert(`Bienvenido ${respuesta.UserName}`);
                window.location.href="/";
            }else{
                alert('El usuario o la contraseña no son correctos');
            }
        })
        .catch(error=>{
            console.log(error);
        })
        } 
        else {
          alert('Debe ingresar un correo electronico');
        }
    } */

  render() {
    return (
      <>
        <Header />
        <div className="principalLogin">
          <div className="formLogin">
            <div className="input-container-login">
              <br />
              <input
                type="text"
                className="input-login"
                name="UserName"
                onChange={this.handleChange}
              />
              <label htmlFor="usuario" className="label-login">
                Usuario:
              </label>
            </div>
            <br />
            <div className="input-container-login">
              <div className="unc-password">
                <br />
                <input
                  type="password"
                  className="input-login"
                  name="PassWord"
                  onChange={this.handleChange}
                />
                <br />

                <label htmlFor="contraseña" className="label-login">
                  Contraseña:
                </label>
              </div>
            </div>

            <div className="unc-submit">
              <button
                className="btn btn-primary"
                onClick={() => this.iniciarSesion()}
              >
                Iniciar Sesión
              </button>
              <span className="plc-span-form">
                ¿No tienes una cuenta?
                <Link className="anchor-link" to={"/register"}>
                  {" "}
                  Registrarse
                </Link>
              </span>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Login;
