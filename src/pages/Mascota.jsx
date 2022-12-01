import React from "react";
import { MascotaList } from "./../components";
import { Link } from "react-router-dom";

const Mascota = () => {
  return (
    <>
      <h1 className="main__title">
        Listado de solicitudes de afiliación de mascotas
      </h1>
      <Link to="/mascotas/crear">
        <button className="btn btn-success mt-5">Agregar Mascota</button>
      </Link>
      <MascotaList />
    </>
  );
};

export default Mascota;
