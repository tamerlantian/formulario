import React, { useEffect, useState } from "react";
import { Table, Button } from "semantic-ui-react";
import axios from "axios";

export default function ProspectosList() {
  const [users, setusers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/prospectos").then((response) => {
      console.log(response.data);
      setusers(response.data);
    });
  }, []);

  const setData = (data) => {
    let { id, nombre, apellido, correo, celular, comentario } = data;
    localStorage.setItem("Id", id);
    localStorage.setItem("NombrePr", nombre);
    localStorage.setItem("ApellidoPr", apellido);
    localStorage.setItem("CorreoPr", correo);
    localStorage.setItem("Celular", celular);
    localStorage.setItem("Comentario", comentario);
  };

  const getData = () => {
    axios.get(`http://localhost:3000/prospectos`).then((getData) => {
      setusers(getData.data);
    });
  };

  const onDelete = (id) => {
    axios.delete(`http://localhost:3000/prospectos/${id}`).then(() => {
      getData();
    });
  };

  return (
    <div>
      <Table className="mt-5" singleLine>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Id</Table.HeaderCell>
            <Table.HeaderCell>Nombre</Table.HeaderCell>
            <Table.HeaderCell>Apellido</Table.HeaderCell>
            <Table.HeaderCell>Correo</Table.HeaderCell>
            <Table.HeaderCell>Celular</Table.HeaderCell>
            <Table.HeaderCell>Comentario</Table.HeaderCell>
            <Table.HeaderCell>Acciones</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {users.map((data, index) => {
            return (
              <Table.Row key={index}>
                <Table.Cell className="align-middle">{index + 1}</Table.Cell>
                <Table.Cell className="align-middle">{data.nombre}</Table.Cell>
                <Table.Cell className="align-middle">
                  {data.apellido}
                </Table.Cell>
                <Table.Cell className="align-middle">{data.correo}</Table.Cell>
                <Table.Cell className="align-middle">{data.celular}</Table.Cell>
                <Table.Cell className="align-middle">
                  {data.comentario}
                </Table.Cell>
                <Table.Cell>
                  <Button
                    className="btn btn-danger"
                    onClick={() => onDelete(data.id)}
                  >
                    Eliminar
                  </Button>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}
