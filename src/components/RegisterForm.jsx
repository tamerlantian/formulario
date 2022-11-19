import React from 'react'
import { useForm } from 'react-hook-form'

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        const { cedula, nombre, apellido, telefono, correo, rol } = data
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                cedula: cedula,
                nombre: nombre,
                apellido: apellido,
                telefono: telefono,
                correo: correo,
                rol: rol
            })
        }

        fetch('http://localhost:3000/usuarios', requestOption)
        .then(res => res.json())
        .then(data => console.log(data))
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <label className='form__label' htmlFor="cedula">Cedula:</label>
            <input className='form__input' {...register("cedula", { required: true })} />

            <label className='form__label' htmlFor="nombre">Nombre:</label>
            <input className='form__input' {...register("nombre", { required: true })} />

            <label className='form__label' htmlFor="apellido">Apellido:</label>
            <input className='form__input' {...register("apellido", { required: true })} />

            <label className='form__label' htmlFor="telefono">Telefono:</label>
            <input className='form__input' {...register("telefono", { required: true })} />

            <label className='form__label' htmlFor="correo">Correo:</label>
            <input className='form__input' {...register("correo", { required: true })} />

            <label className='form__label' htmlFor="rol">Rol:</label>
            <input className='form__input' {...register("rol", { required: true })} />
            
            <input className='form__submit' type="submit" />
        </form>
    )
}
