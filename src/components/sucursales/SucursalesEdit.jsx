import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from 'semantic-ui-react'
import { useNavigate } from "react-router";

export default function SucursalesEdit() {
  let history = useNavigate();
  const [id, setID] = useState(null);
  const [departamento, setDepartamento] = useState("");
  const [ciudad, setCiudad] = useState("");
  const [direccion, setDireccion] = useState("");
  const [telefono, setTelefono] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("Id"));
    setDepartamento(localStorage.getItem("Departamento"));
    setCiudad(localStorage.getItem("Ciudad"));
    setDireccion(localStorage.getItem("Direccion"));
    setTelefono(localStorage.getItem("Telefono"));
  }, []);

  const handleSubmit = () => {
    axios
      .put(`http://localhost:3000/sucursals/${id}`, {
        departamento,
        ciudad,
        direccion,
        telefono,
      })
      .then((res) => {
        console.log(res)
        history("/sucursales");
      });
  };
  return (
    <Form className="form" >
      <p className="form__title mb-4">Editar Sucursal</p>
      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="departamento">
          Departamento
        </label>
        <input
          type="text"
          className="form-control"
          value={departamento}
          onChange={(e) => setDepartamento(e.target.value)}
        />
      </div>

      <div className="row mb-3">
        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="ciudad">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              value={ciudad}
              onChange={(e) => setCiudad(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="direccion">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              value={direccion}
              onChange={(e) => setDireccion(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="telefono">
          Telefono
        </label>
        <input
          type="text"
          className="form-control"
          value={telefono}
          onChange={(e) => setTelefono(e.target.value)}
        />
      </div>

      <button type="submit" onClick={handleSubmit} className="btn btn-success btn-block mb-4">
        Actualizar
      </button>
    </Form>
  );
}
