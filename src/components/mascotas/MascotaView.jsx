import React, { useEffect, useState } from "react";
import { Button } from "semantic-ui-react";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBRow,
  MDBCol,
  MDBCardLink,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router";

export default function MascotaView() {
  let history = useNavigate();

  const [id, setID] = useState(null);
  const [usuarioId, setUsuarioId] = useState("");
  const [planId, setPlanId] = useState("");

  useEffect(() => {
    setID(localStorage.getItem("IdM"));
    setUsuarioId(localStorage.getItem("UsuarioIdM"));
    setPlanId(localStorage.getItem("PlanIdM"));
  }, []);

  useEffect(() => {
    getData(id);
    getDataU(usuarioId);
    getDataP(planId);
  });

  const setData = (data) => {
    let { id, nombre, foto, estado, especie, comentario, usuarioId, planId } =
      data;
    localStorage.setItem("IdM", id);
    localStorage.setItem("TNombreM", nombre);
    localStorage.setItem("FotoM", foto);
    localStorage.setItem("EstadoM", estado);
    localStorage.setItem("EspecieM", especie);
    localStorage.setItem("ComentarioM", comentario);
    localStorage.setItem("UsuarioIdM", usuarioId);
    localStorage.setItem("PlanIdM", planId);
  };
  //Buscar usuario por ID

  const [nombreusuario, setnombreusuario] = useState(0);

  const getDataU = (usuarioId) => {
    console.log(usuarioId);
    axios
      .get(`http://localhost:3000/usuarios/${usuarioId}`)
      .then((response) => {
        console.log(response.data);
        setnombreusuario(response.data);
      });
  };

  //Listar planes para la selección del ID

  const [plan, setplan] = useState(0);

  const getDataP = (planId) => {
    axios.get(`http://localhost:3000/plans/${planId}`).then((datauser) => {
      console.log(datauser.data);
      setplan(datauser.data);
    });
  };

  //Llamar datos de mascota

  const [mascotas, setmascotas] = useState([]);

  const getData = (id) => {
    axios.get(`http://localhost:3000/mascotas/${id}`).then((getData) => {
      setmascotas(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/mascotas/${id}`).then(() => {
      history("/MascotaList");
    });
  };

  return (
    <div>
      <h2>Listado de solicitudes de afiliación de Mascotas</h2>

      <MDBRow className="row-cols-1 row-cols-md-3 g-4">
        <MDBCol>
          <MDBCard style={{ maxWidth: "540px" }}>
            <MDBRow className="g-0">
              <MDBCol md="4">
                <MDBCardImage src={mascotas.foto} alt="..." fluid />
              </MDBCol>
              <MDBCol md="8">
                <MDBCardBody>
                  <MDBCardTitle>{mascotas.nombre}</MDBCardTitle>
                </MDBCardBody>
                <MDBListGroup flush>
                  <MDBListGroupItem>
                    Especie: {mascotas.especie}{" "}
                  </MDBListGroupItem>

                  <MDBListGroupItem>
                    Dueño: {nombreusuario.nombre}
                  </MDBListGroupItem>

                  <MDBListGroupItem>Plan: {plan.nombre}</MDBListGroupItem>

                  <MDBListGroupItem>Estado: {mascotas.estado}</MDBListGroupItem>
                  <MDBListGroupItem>
                    Comentario: {mascotas.comentario}
                  </MDBListGroupItem>
                </MDBListGroup>
                <MDBCardBody>
                  <MDBCardLink href="/MascotaUpdate">
                    <Button className="btn btn-secondary" onClick={() => setData(mascotas)}>
                      Actualizar
                    </Button>
                  </MDBCardLink>
                  <MDBCardLink href="/EstadoUpdate">
                    <Button className="btn btn-secondary" onClick={() => setData(mascotas.id)}>
                      Cambiar estado
                    </Button>
                  </MDBCardLink>
                  <Button className="btn btn-danger" onClick={() => onDelete(mascotas.id)}>
                    Eliminar
                  </Button>
                </MDBCardBody>
              </MDBCol>
            </MDBRow>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
}
