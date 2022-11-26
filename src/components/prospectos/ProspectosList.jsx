import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';

export default function ProspectosList() {
    const [prospecto, setProspecto] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3000/prospectos')
            .then((response) => {
                setProspecto(response.data);
            });

    }, []);

    const getData = () => {
        axios.get(`http://localhost:3000/prospectos`)
            .then((getData) => {
                setProspecto(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/prospectos/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>Correo</Table.HeaderCell>
                        <Table.HeaderCell>Celular</Table.HeaderCell>
                        <Table.HeaderCell>Comentario</Table.HeaderCell>
                        <Table.HeaderCell>Acciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {prospecto.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell>{data.nombre}</Table.Cell>
                                <Table.Cell>{data.apellido}</Table.Cell>
                                <Table.Cell>{data.correo}</Table.Cell>
                                <Table.Cell>{data.celular}</Table.Cell>
                                <Table.Cell>{data.comentario}</Table.Cell>
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.id)} >Eliminar</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}