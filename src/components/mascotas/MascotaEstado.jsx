import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';
import { useNavigate } from 'react-router';

export default function EstadoUpdate() {
    let history = useNavigate();
    const [id, setID] = useState(null);
    const [nombre, setNombre] = useState('');
    const [foto, setFoto] = useState('');
    const [estado, setEstado] = useState('');
    const [especie, setEspecie] = useState('');
    const [comentario, setComentario] = useState('');
    const [usuarioId, setUsuarioId] = useState('');
    const [planId, setPlanId] = useState('');


    useEffect(() => {
        setID(localStorage.getItem('IdM'));
        setNombre(localStorage.getItem('TNombreM'));
        setFoto(localStorage.getItem('FotoM'));
        setEstado(localStorage.getItem('EstadoM'));
        setEspecie(localStorage.getItem('EspecieM'));
        setComentario(localStorage.getItem('ComentarioM'));
        setUsuarioId(localStorage.getItem('UsuarioIdM'));
        setPlanId(localStorage.getItem('PlanIdM'))
    }, []);

    const updateEstadoData = () => {
        axios.put(`http://localhost:3000/mascotas/${id}`, {
            nombre: nombre,    
            foto: foto,
            estado,
            especie: especie,
            comentario,
            usuarioId: usuarioId,
            planId: planId
        }).then(() => {
            history('/mascotas')
        })
    }
    return (
        <div>
            <h2>Cambiar estado de afiliación de mascotas</h2>
            <Form className="form">
                <Form.Field className="form-outline mb-3">
                    <label className='form-label'>Comentario:</label>
                    <input className='form-control'placeholder='Comentario' value={comentario} onChange={(e) => setComentario(e.target.value)}/>
                </Form.Field>              
                <Form.Field className="form-outline mb-3">
                    <label className='form-label'>Estado:</label>
                    <select className='form-control'value={estado} onChange={(e) => setEstado(e.target.value)}>
                        <option value="En revision">En revisión</option>
                        <option value="Aceptado">Aceptado</option>
                        <option value="Rechazado">Rechazado</option>
                    </select>  
                </Form.Field>                
                <Button type='submit' className="btn btn-success btn-block mb-4" onClick={updateEstadoData}>Actualizar</Button>
            </Form>
        </div>
    )
}

