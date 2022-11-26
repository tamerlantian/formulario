import React from 'react'
import { Link } from 'react-router-dom'
import { UserList } from '../components'

const Usuarios = () => {
  return (
    <>
      <h2>Listado de usuarios</h2>
      <Link to="/usuarios/agregar/">
        Agregar Usuario
      </Link>
      <UserList />
    </>
  )
}

export default Usuarios
