import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function SucursalesEdit() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [departamento, setDepartamento] = useState('');
    const [ciudad, setCiudad] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setDepartamento(localStorage.getItem('Departamento'));
        setCiudad(localStorage.getItem('Ciudad'));
        setDireccion(localStorage.getItem('Direccion'));
        setTelefono(localStorage.getItem('Telefono'));
        
    }, []);

    const updateUserData = () => {
        axios.put(`http://localhost:3000/sucursals/${id}`, {
            departamento,
            ciudad,
            direccion,
            telefono
        }).then(() => {
            history('/sucursales')
        })
    }
    return (
        <div>
            <h2>Actualizar usuario</h2>
            <Form className="create-form">
                <Form.Field>
                    <label className='form__label'>Departamento:</label>
                    <input className='form__input'placeholder='Departamento' value={departamento} onChange={(e) => setDepartamento(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Ciudad:</label>
                    <input className='form__input'placeholder='Ciudad' value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Direccion:</label>
                    <input className='form__input'placeholder='Apellido' value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Telefono:</label>
                    <input className='form__input'placeholder='Telefono' value={telefono} onChange={(e) => setTelefono(e.target.value)}/>
                </Form.Field>
                <Button type='submit' className='form__submit' onClick={updateUserData}>Actualizar</Button>
            </Form>
        </div>
    )
}

