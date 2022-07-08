import React, { useState, useEffect } from "react";
import { useStore } from "../../store/StoreProvider"
import { Link } from "react-router-dom";
import Header from "../header";
import { postReserva, payment } from "../../service/reserva.service";
import swal from "sweetalert";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "95vh",
    gap: "10px"
  },
  label: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "800px",
    gap: "10px"
  },
  form: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  button: {
    padding: "1rem",
    boder: "1px solid #C63D20",
    boderRadius: "5px",
    cursor: "pointer"
  }
}


function Carroform() {
  const { user } = useStore();
  const [open, setOpen] = useState(false);
  const [reservationId, setReservationId] = useState(null)
  const [error, setError] = useState(null)
  const [cuit, setCuit] = useState(null)

  const confirmarReserva = () => {
    const data = {
      totalPrice: 500,
      createDate: "2022-07-08T15:03:37.738Z",
      validDate: "2022-07-08T15:03:37.738Z",
      status: "inProgress"
    }
    const packageid = parseInt(window.location.pathname.split("/")[2]);
    postReserva(user.id, packageid, data).then(res => {
      console.log(res);
      if (res.status === 200) {
        setOpen(true);
        setReservationId(res.data.id);
      } else {
        setError("No se pudo procesar la reserva")
      }
    })
  }

  const handlePayment = () => {
    const data = {
      reservationId: reservationId,
      cuit: cuit
    }
    payment(data).then(res =>{
      (res.data.aprobada) ? swal("El pago fue exitoso") : swal("El pago fue rechazado");
    })
  }

  return (
    <>
      <Header />
      <div style={styles.container}>
        <h2>Iniciar una reserva</h2>
        <div style={styles.form}>
          <form >
            <div style={styles.label}>
              <label htmlFor="name" >Nombre</label>
              <input type="text" disabled={true} name='name' id='name' value={user.firstName} />
            </div>
            <div style={styles.label}>
              <label htmlFor="lastName" >Apellido</label>
              <input type="text" disabled={true} name='lastName' id='lastName' value={user.lastName} />
            </div>
            <div style={styles.label}>
              <label htmlFor="email" >Correo Electronico</label>
              <input type="email" disabled={true} name='email' id='email' value={user.email} />
            </div>
          </form>
        </div>
        {!open && <div style={styles.button} onClick={confirmarReserva}>
          Confirmar reserva
        </div>}
      </div>
        { open && <div>
          <h3>Introduzca dus datos para el pago</h3>
          <form >
            <div style={styles.label}>
              <label htmlFor="cuit" >CUIT</label>
              <input type="number" disabled={true} name='cuit' id='cuit' value="" onChange={(e)=>setCuit(e.target.value)}/>
            </div>
            <div style={styles.label}>
              <label htmlFor="numtarjeta" >Numero de tarjeta</label>
              <input type="text" disabled={true} name='tarjeta' id='tarjeta' value="" />
            </div>
            <div style={styles.label}>
              <label htmlFor="pin" >Codigo de seguridad</label>
              <input type="password" disabled={true} name='pin' id='pin' value="" />
            </div>
          </form>
          <div style={styles.button} onClick={handlePayment}>
            Pagar
          </div>
        </div>}
    </>
  );
}



export default Carroform;
