import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function PlanesList() {
    const [planes, setPlanes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3000/plans')
            .then((response) => {
                setPlanes(response.data);
            });

    }, []);


    const setData = (data) => {
        let { id, nombre, descripcion, precio } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Descripcion', descripcion);
        localStorage.setItem('Precio', precio);
    }

    const getData = () => {
        axios.get(`http://localhost:3000/plans`)
            .then((getData) => {
                setPlanes(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/plans/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Descripcion</Table.HeaderCell>
                        <Table.HeaderCell>Precio</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {planes.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell className='align-middle'>{index+1}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.nombre}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.descripcion}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.precio}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/planes/editar'>
                                        <Button className='btn btn-secondary' onClick={() => setData(data)}>Actualizar</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button className='btn btn-danger' onClick={() => onDelete(data.id)} >Eliminar</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}