import React, { useState, useEffect } from "react";
import { Button, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router";

export default function MascotaUpdate() {
  let history = useNavigate();
  const [id, setID] = useState(null);
  const [nombre, setNombre] = useState("");
  const [foto, setFoto] = useState("");
  const [estado, setEstado] = useState("");
  const [especie, setEspecie] = useState("");
  const [comentario, setComentario] = useState("");
  const [usuarioId, setUsuarioId] = useState("");
  const [planId, setPlanId] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("IdM"));
    setNombre(localStorage.getItem("TNombreM"));
    setFoto(localStorage.getItem("FotoM"));
    setEstado(localStorage.getItem("EstadoM"));
    setEspecie(localStorage.getItem("EspecieM"));
    setComentario(localStorage.getItem("ComentarioM"));
    setUsuarioId(localStorage.getItem("UsuarioIdM"));
    setPlanId(localStorage.getItem("PlanIdM"));
  }, []);

  const updateMascotaData = () => {
    axios
      .put(`http://localhost:3000/mascotas/${id}`, {
        nombre,
        foto,
        estado: estado,
        especie,
        comentario: comentario,
        usuarioId: usuarioId,
        planId: planId,
      })
      .then(() => {
        history("/mascotas");
      });
  };
  return (
    <div>
      <h2>Actualizar solicitudes de afiliación de mascotas</h2>
      <Form className="form">
        <Form.Field className="form-outline mb-3">
          <label className="form-label">Nombre mascota:</label>
          <input
            className="form-control"
            placeholder="Nombre de la mascota"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-outline mb-3">
          <label className="form-label">Foto:</label>
          <input
            className="form-control"
            placeholder="URL foto de la mascota"
            value={foto}
            onChange={(e) => setFoto(e.target.value)}
          />
        </Form.Field>
        <Form.Field className="form-outline mb-3">
          <label className="form-label">Especie:</label>
          <select
            className="form-control"
            value={especie}
            onChange={(e) => setEspecie(e.target.value)}
          >
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
            <option value="Ave">Ave</option>
            <option value="Pez">Pez</option>
            <option value="Otro">Otro</option>
          </select>
        </Form.Field>
        <Button
          type="submit"
          className="btn btn-success btn-block mb-4"
          onClick={updateMascotaData}
        >
          Actualizar
        </Button>
      </Form>
    </div>
  );
}
