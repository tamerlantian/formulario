import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useStateContext } from '../../context/ContextProvider';

export default function SucursalesList() {
    const [sucursales, setSucursales] = useState([]);
    const { user } = useStateContext()
    const { rol } = useStateContext()

    useEffect(() => {
        axios.get('http://localhost:3000/sucursals')
            .then((response) => {
                console.log(response.data)
                setSucursales(response.data);
            });

    }, []);

    const setData = (data) => {
        let { id, departamento, ciudad, direccion, telefono } = data;
        localStorage.setItem('Id', id);
        localStorage.setItem('Departamento', departamento);
        localStorage.setItem('Ciudad', ciudad);
        localStorage.setItem('Direccion', direccion);
        localStorage.setItem('Telefono', telefono);
    }

    const getData = () => {
        axios.get(`http://localhost:3000/sucursals`)
            .then((getData) => {
                setSucursales(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`http://localhost:3000/sucursals/${id}`)
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
                        <Table.HeaderCell>Departamento</Table.HeaderCell>
                        <Table.HeaderCell>Ciudad</Table.HeaderCell>
                        <Table.HeaderCell>Direccion</Table.HeaderCell>
                        <Table.HeaderCell>Telefono</Table.HeaderCell>
                        <Table.HeaderCell>Actualizar</Table.HeaderCell>
                        <Table.HeaderCell>Eliminar</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {sucursales.map((data, index) => {
                        return (
                            <Table.Row key={index}>
                                <Table.Cell className='align-middle'>{index+1}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.departamento}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.ciudad}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.direccion}</Table.Cell>
                                <Table.Cell className='align-middle'>{data.telefono}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/sucursales/editar'>
                                        <Button className='btn btn-secondary' onClick={() => setData(data)}>Actualizar</Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    {user && rol === 'admin' ? (
                                        <Button className='btn btn-danger' onClick={() => onDelete(data.id)} >Eliminar</Button>
                                    ): (
                                        <></>
                                    )}
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
            </Table>
        </div>
    )
}