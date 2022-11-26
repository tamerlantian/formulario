import React from 'react'
import { useForm } from 'react-hook-form'
import { useStateContext } from "../context/ContextProvider";

export default function Login() {
    const {
        register,
        handleSubmit,
    } = useForm()

    const { user, setUser } = useStateContext(false)
    const { rol, setRol } = useStateContext("")

    const onSubmit = async (data) => {
        const { usuario, contrasena} = data
        const requestOption = {
            method: 'POST',
            headers : {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                usuario: usuario,
                contrasena: contrasena
            })
        }

        fetch('http://localhost:3000/identificarUsuario', requestOption)
        .then(res => res.json())
        .then(({ datos }) => {
            console.log(datos);
            if(datos.id) {
                localStorage.setItem('rol', datos.rol)
                localStorage.setItem('username', datos.nombre)
                setUser(datos.nombre)
                setRol(datos.rol)
            }
        })
    }

    return (
        <form className="form" onSubmit={handleSubmit(onSubmit)} >
            <h2>Ingresar</h2>            

            <label className='form__label' htmlFor="usuario">Correo:</label>
            <input className='form__input' {...register("usuario", { required: true })} />

            <label className='form__label' htmlFor="contrasena">Contraseña:</label>
            <input className='form__input' {...register("contrasena", { required: true })} />
            
            <input className='form__submit' type="submit" />
        </form>
    )
}
