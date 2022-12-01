import React from 'react'
import { useForm } from 'react-hook-form'

export default function UserLogin() {
    const {
        register,
        handleSubmit,
        
        //formState: { errors }
    } = useForm()    
    
    
    const onSubmit = async (data) => {
        const { usuario, clave} = data
        
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usuario,
                clave: clave
            })
        }

        
        fetch('http://localhost:3000/identificarUsuario', requestOption)
        .then(res => res.json())
        .then(data => console.log(data))
            (data.tk)
        
        
                    
    }


    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <h2>Ingresar</h2>            

            <label className='form__label' htmlFor="usuario">Correo:</label>
            <input className='form__input' {...register("usuario", { required: true })} />

            <label className='form__label' htmlFor="clave">Contraseña:</label>
            <input className='form__input' {...register("clave", { required: true })} />
            
            <input className='form__submit' type="submit" />
        </form>
    )
}
