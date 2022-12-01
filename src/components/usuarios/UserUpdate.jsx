import React, { useState, useEffect } from "react";
import axios from "axios";
import { Form } from 'semantic-ui-react'
import { useNavigate } from "react-router";

export default function UserUpdate() {
  let history = useNavigate();
  const [id, setID] = useState(null);
  const [cedula, setCedula] = useState("");
  const [nombre, setNombreU] = useState("");
  const [apellido, setApellido] = useState("");
  const [telefono, setTelefonoU] = useState("");
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  const [rol, setRol] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("Id"));
    setCedula(localStorage.getItem("Cedula"));
    setNombreU(localStorage.getItem("Nombre"));
    setApellido(localStorage.getItem("Apellido"));
    setTelefonoU(localStorage.getItem("Telefono"));
    setCorreo(localStorage.getItem("Correo"));
    setContrasena(localStorage.getItem("Contrasena"));
    setRol(localStorage.getItem("Rol"));
  }, []);

  const onSubmit = () => {
    axios
      .put(`http://localhost:3000/usuarios/${id}`, {
        cedula,
        nombre,
        apellido,
        telefono,
        correo,
        contrasena,
        rol,
      })
      .then(() => {
        history("/usuarios");
      });
  };

  return (
    <div>
      <Form className="form">
        <p className="form__title mb-4">Actualizar Usuario</p>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="cedula">
            Cedula
          </label>
          <input
            type="text"
            onChange={(e) => setCedula(e.target.value)}
            value={cedula}
            className="form-control"
          />
        </div>

        <div className="row mb-3">
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="nombre">
                Nombre
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setNombreU(e.target.value)}
                value={nombre}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-outline">
              <label className="form-label" htmlFor="apellido">
                Apellido
              </label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setApellido(e.target.value)}
                value={apellido}
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
            onChange={(e) => setTelefonoU(e.target.value)}
            value={telefono}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="correo">
            E-mail
          </label>
          <input
            type="email"
            className="form-control"
            onChange={(e) => setCorreo(e.target.value)}
            value={correo}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="contrasena">
            Contraseña
          </label>
          <input
            type="password"
            className="form-control"
            onChange={(e) => setContrasena(e.target.value)}
            value={contrasena}
          />
        </div>

        <div className="form-outline mb-4">
          <label className="form-label" htmlFor="rol">
            Rol
          </label>
          <input
            type="text"
            className="form-control"
            defaultValue={rol}
            onChange={(e) => setRol(e.target.value)}
            value={rol}
          />
        </div>

        <button
          type="submit"
          className="btn btn-success btn-block mb-4"
          onClick={onSubmit}
        >
          Actualizar
        </button>
      </Form>
      {/* <Form className="create-form">
                <Form.Field>
                    <label className='form__label'>Cédula:</label>
                    <input className='form__input'placeholder='Cédula' value={cedula} onChange={(e) => setCedula(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Nombre:</label>
                    <input className='form__input'placeholder='Nombre' value={nombre} onChange={(e) => setNombreU(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Apellido:</label>
                    <input className='form__input'placeholder='Apellido' value={apellido} onChange={(e) => setApellido(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Telefono:</label>
                    <input className='form__input'placeholder='Telefono' value={telefono} onChange={(e) => setTelefonoU(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Correo:</label>
                    <input className='form__input'placeholder='Correo' value={correo} onChange={(e) => setCorreo(e.target.value)}/>
                    </Form.Field>
                <Form.Field>
                    <label className='form__label'>Contraseña:</label>
                    <input className='form__input'placeholder='Contraseña' value={contrasena} onChange={(e) => setContrasena(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Rol:</label>
                    <select className='form__input'placeholder='Rol' value={rol} onChange={(e) => setRol(e.target.value)}>
                    <option value="admin">Administrador</option>
                        <option value="user">Cliente</option>
                        <option value="analyst">Asesor</option>
                    </select>                
                </Form.Field>
                <Button type='submit' className='form__submit' onClick={updateUserData}>Actualizar</Button>
            </Form> */}
    </div>
  );
}
