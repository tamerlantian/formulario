import React from 'react'
import { SucursalesList } from '../components'
import { Link } from 'react-router-dom'

const Sucursales = () => {
  return (
    <>
      <h2>Listado de sucursales</h2>
      <Link to="/sucursales/crear">
        Agregar Sucursal
      </Link>
      <SucursalesList />
    </>
  )
}

export default Sucursales
