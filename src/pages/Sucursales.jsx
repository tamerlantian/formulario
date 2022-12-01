import React from "react";
import { SucursalesList } from "../components";
import { Link } from "react-router-dom";

const Sucursales = () => {
  return (
    <>
      <h2 className="main__title">Listado de sucursales</h2>
      <Link to="/sucursales/crear">
        <button className="btn btn-success mt-5">Agregar Sucursal</button>
      </Link>
      <SucursalesList />
    </>
  );
};

export default Sucursales;
