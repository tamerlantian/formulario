import React from "react";
import { PlanesList } from "../components";
import { Link } from "react-router-dom";

const Planes = () => {
  return (
    <>
      <h1 className="main__title">Listado de planes</h1>
      <Link to="/planes/crear">
        <button className="btn btn-success mt-5">Agregar Plan</button>
        
      </Link>
      <PlanesList />
    </>
  );
};

export default Planes;
