import React from 'react'
import { Link } from 'react-router-dom'
import { UserList } from '../components'

const Usuarios = () => {
  return (
    <>
      <h1 className='main__title'>Listado de usuarios</h1>
      <Link to="/usuarios/agregar/">
        <button className='btn btn-success mt-5'>Agregar Usuario</button>
      </Link>
      <UserList />
    </>
  )
}

export default Usuarios
