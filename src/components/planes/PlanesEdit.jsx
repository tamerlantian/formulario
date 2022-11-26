import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function PlanesEdit() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [precio, setPrecio] = useState('');

    useEffect(() => {
        setID(localStorage.getItem('Id'))
        setNombre(localStorage.getItem('Nombre'));
        setDescripcion(localStorage.getItem('Descripcion'));
        setPrecio(localStorage.getItem('Precio'));
    }, []);

    const updateUserData = () => {
        axios.put(`http://localhost:3000/plans/${id}`, {
            nombre,
            descripcion,
            precio,
        }).then(() => {
            history('/planes')
        })
    }
    return (
        <div>
            <h2>Actualizar Plan</h2>
            <Form className="create-form">
                <Form.Field>
                    <label className='form__label'>Nomnre:</label>
                    <input className='form__input'placeholder='Nombre' value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Descripcion:</label>
                    <input className='form__input'placeholder='Descripcion' value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <label className='form__label'>Precio:</label>
                    <input className='form__input'placeholder='Precio' value={precio} onChange={(e) => setPrecio(e.target.value)}/>
                </Form.Field>
                <Button type='submit' className='form__submit' onClick={updateUserData}>Actualizar</Button>
            </Form>
        </div>
    )
}

