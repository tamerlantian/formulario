import React from 'react'
import { PlanesList } from '../components'
import { Link } from 'react-router-dom'

const Planes = () => {
  return (
    <>
      <h2>Listado de planes</h2>
      <Link to="/planes/crear">
        Agregar Sucursal
      </Link>
      <PlanesList />
    </>
  )
}

export default Planes
