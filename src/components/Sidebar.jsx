import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useStateContext } from '../context/ContextProvider';


const Sidebar = () => {
    const { rol, setRol } = useStateContext()
    const { user, setUser } = useStateContext()
    const activeMenu = true

    useEffect(() => {
        setRol(localStorage.getItem('rol'))
    }, [rol, user])

    return (
        <div className='ml-3 h-100'>
            {activeMenu && (
                <>
                    <div>
                        <Link to="/" onClick={() => { }} className="sidebar__logo d-flex gap-2 p-3">
                            <i className="fi fi-rr-doctor"></i>
                            <span>MascotaFeliz</span>
                        </Link>
                    </div>
                    <div className='sidebar__menu d-flex flex-column mt-5'>
                        {(rol === "admin" || rol === "analyst" || rol === 'client') ? (
                            <NavLink
                                to="/dashboard"
                            >
                                <i className='sidebar__menu-item fi fi-rr-home nav_icon'></i>
                                dashboard
                            </NavLink>
                        ) : <p className='link--deactived'></p>}

                        {(rol === "admin" || rol === "analyst") ? (<NavLink
                            to="/usuarios"
                            onClick={() => { }}
                            className={({ isActive }) => { }}
                        >
                            <i className='sidebar__menu-item fi fi-rr-users nav_icon'></i>
                            usuarios
                        </NavLink>): <p className='link--deactived'></p>}
                        {(rol === "admin" || rol === "analyst") ? (<NavLink
                            to="/prospectos"
                            onClick={() => { }}
                            className={({ isActive }) => { }}
                        >
                            <i className='sidebar__menu-item fi fi-rr-paw nav_icon'></i>
                            Prospectos
                        </NavLink>) : <p className='link--deactived'></p>}
                        {(rol === "admin" || rol === "analyst") ? (<NavLink
                            to="/sucursales"
                            onClick={() => { }}
                            className={({ isActive }) => { }}
                        >
                            <i className='sidebar__menu-item fi fi-rr-paw nav_icon'></i>
                            Sucursales
                        </NavLink>) : <p className='link--deactived'></p>}
                        {(rol === "admin" || rol === "analyst") ? (<NavLink
                            to="/planes"
                            onClick={() => { }}
                            className={({ isActive }) => { }}
                        >
                            <i className='sidebar__menu-item fi fi-rr-paw nav_icon'></i>
                            Planes
                        </NavLink>) : <p className='link--deactived'></p>}
                        {rol === 'admin' ? (<NavLink
                            to="/mascotas"
                            onClick={() => { }}
                            className={({ isActive }) => { }}
                        >
                            <i className='sidebar__menu-item fi fi-rr-paw nav_icon'></i>
                            Solicitudes de afiliacion
                        </NavLink>) : <p className='link--deactived'></p>}
                    </div>
                </>
            )}
        </div>
    )
}

export default Sidebar
