import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';

export default function SucursalesCreate() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const history = useNavigate()


    const onSubmit = async (data) => {
        const { nombre, descripcion, precio  } = data
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nombre: nombre,
                descripcion: descripcion,
                precio: parseInt(precio)
            })
        }

        fetch('http://localhost:3000/plans', requestOption)
        .then(res => res.json())
        .then(data => history('/planes'))
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <label className='form__label' htmlFor="nombre">Nombre:</label>
            <input className='form__input' {...register("nombre", { required: true })} />

            <label className='form__label' htmlFor="descripcion">Descripcion:</label>
            <input className='form__input' {...register("descripcion", { required: true })} />

            <label className='form__label' htmlFor="precio">Precio:</label>
            <input className='form__input' {...register("precio", { required: true })} />

            <input className='form__submit' type="submit" />
        </form>
    )
}
