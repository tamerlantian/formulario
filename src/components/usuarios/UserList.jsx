import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function UserListRead() {
    const [users, setusers] = useState([]);

    useEffect(() => {

        axios.get('http://localhost:3000/usuarios')
            .then((response) => {
                console.log(response.data)
                setusers(response.data);
            });

    }, []);

    const setData = (data) => {
        let { id, cedula, nombre, apellido, telefono, correo, contrasena, rol } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Cedula', cedula);
        localStorage.setItem('Nombre', nombre);
        localStorage.setItem('Apellido', apellido);
        localStorage.setItem('Telefono', telefono);
        localStorage.setItem('Correo', correo);
        localStorage.setItem('Contrasena', contrasena);
        localStorage.setItem('Rol', rol)
    }

    const getData = () => {
        axios.get(`http://localhost:3000/usuarios`)
            .then(({data}) => {
                setusers(data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/usuarios/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Cedula</Table.HeaderCell>
                        <Table.HeaderCell>Nombre</Table.HeaderCell>
                        <Table.HeaderCell>Apellido</Table.HeaderCell>
                        <Table.HeaderCell>Telefono</Table.HeaderCell>
                        <Table.HeaderCell>Correo</Table.HeaderCell>
                        <Table.HeaderCell>Rol</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {users.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell className='align-middle'>{index+1}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.cedula}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.nombre}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.apellido}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.telefono}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.correo}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.rol}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/usuarios/editar'>
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
    )
}