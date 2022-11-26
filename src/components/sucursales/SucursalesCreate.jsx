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
        const { departamento, ciudad, direccion, telefono  } = data
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                departamento: departamento,
                ciudad: ciudad,
                direccion: direccion ,
                telefono: telefono,
            })
        }

        fetch('http://localhost:3000/sucursals', requestOption)
        .then(res => res.json())
        .then(data => history('/sucursales'))
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <label className='form__label' htmlFor="departamento">Departamento:</label>
            <input className='form__input' {...register("departamento", { required: true })} />

            <label className='form__label' htmlFor="ciudad">Ciudad:</label>
            <input className='form__input' {...register("ciudad", { required: true })} />

            <label className='form__label' htmlFor="direccion">Direccion:</label>
            <input className='form__input' {...register("direccion", { required: true })} />

            <label className='form__label' htmlFor="telefono">Telefono:</label>
            <input className='form__input' {...register("telefono", { required: true })} />
            
            <input className='form__submit' type="submit" />
        </form>
    )
}
