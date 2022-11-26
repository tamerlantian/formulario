import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router';

export default function RegisterForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()

    const history = useNavigate()


    const onSubmit = async (data) => {
        const { cedula, nombre, apellido, telefono, correo, rol } = data
        const requestOption = {
            method: 'POST',
            headers: {
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
            .then(data => history('/usuarios'))
    }

    return (
        <form className='form' onSubmit={handleSubmit(onSubmit)}>
            <p className='form__title mb-4'>Registrar Nuevo Usuario</p>
            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="cedula">Cedula</label>
                <input type="text" className="form-control" {...register("cedula", { required: true })} />
                {errors.cedula && <span className='form__error'>Este campo es obligatorio</span>}
            </div>

            <div className="row mb-3">
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="nombre">Nombre</label>
                        <input type="text" className="form-control" {...register("nombre", { required: true })} />
                        {errors.nombre && <span className='form__error'>Este campo es obligatorio</span>}
                    </div>
                </div>
                <div className="col">
                    <div className="form-outline">
                        <label className="form-label" htmlFor="apellido">Apellido</label>
                        <input type="text" className="form-control" {...register("apellido", { required: true })} />
                        {errors.apellido && <span className='form__error'>Este campo es obligatorio</span>}
                    </div>
                </div>
            </div>

            <div className="form-outline mb-3">
                <label className="form-label" htmlFor="telefono">Telefono</label>
                <input type="text"  className="form-control" {...register("telefono", { required: true })} />
                {errors.telefono && <span className='form__error'>Este campo es obligatorio</span>}
            </div>

            <div className="form-outline mb-4">
                <label className="form-label" htmlFor="email">E-mail</label>
                <input type="email" className="form-control" {...register("email", { required: true })}/>
                {errors.email && <span className='form__error'>Este campo es obligatorio</span>}
            </div>

            <button type="submit" className="btn btn-success btn-block mb-4">Crear</button>
        </form>
        // <form className="form" onSubmit={handleSubmit(onSubmit)} >
        //     <label className='form__label' htmlFor="cedula">Cedula:</label>
        //     <input className='form__input' {...register("cedula", { required: true })} />

        //     <label className='form__label' htmlFor="nombre">Nombre:</label>
        //     <input className='form__input' {...register("nombre", { required: true })} />

        //     <label className='form__label' htmlFor="apellido">Apellido:</label>
        //     <input className='form__input' {...register("apellido", { required: true })} />

        //     <label className='form__label' htmlFor="telefono">Telefono:</label>
        //     <input className='form__input' {...register("telefono", { required: true })} />

        //     <label className='form__label' htmlFor="correo">Correo:</label>
        //     <input className='form__input' {...register("correo", { required: true })} />

        //     <label className='form__label' htmlFor="rol">Rol:</label>
        //     <input className='form__input' {...register("rol", { required: true })} />

        //     <input className='form__submit' type="submit" />
        // </form>
    )
}
