import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useStateContext } from "./context/ContextProvider";

import {
  Sidebar,
  Header,
  UserUpdate,
  RegisterForm,
  SucursalesEdit,
  SucursalesCreate,
  PlanesCreate,
  PlanesEdit,
  ProtectedRoute,
  MascotaCreate,
  MascotaView,
  MascotaEdit,
  MascotaEstado,
} from "./components";

import {
  Dashboard,
  Sucursales,
  Usuarios,
  Planes,
  Prospectos,
  Login,
  Mascota,
  Landing,
} from "./pages";

import "./App.css";

const App = () => {
  const { user } = useStateContext();
  const { rol } = useStateContext();
  const { activeMenu, setActiveMenu } = useStateContext();

  return (
    <div className="App">
      <BrowserRouter>
        {activeMenu ? (
          <>
            <Header />
            <div className="sidebar position-fixed h-100">
              <Sidebar />
            </div>
          </>
        ) : (
          <></> 
        )}

        <div className={activeMenu ? "main" : "main-lading"}>
          <Routes>
            {/* Dashboar */}
            <Route path="/" element={<Landing />} />
            <Route path="/dashboard" element={<Dashboard />} />

            {/* Pages */}
            <Route
              path="/usuarios"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <Usuarios />
                </ProtectedRoute>
              }
            />
            <Route
              path="/usuarios/editar/"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <UserUpdate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/usuarios/agregar/"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <RegisterForm />
                </ProtectedRoute>
              }
            />
            <Route
              path="/prospectos"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <Prospectos />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sucursales"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <Sucursales />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sucursales/editar"
              element={
                <ProtectedRoute isAllowed={user && rol === "admin"}>
                  <SucursalesEdit />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sucursales/crear"
              element={
                <ProtectedRoute isAllowed={user && rol === "admin"}>
                  <SucursalesCreate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planes"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <Planes />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planes/crear"
              element={
                <ProtectedRoute isAllowed={user && rol === "admin"}>
                  <PlanesCreate />
                </ProtectedRoute>
              }
            />
            <Route
              path="/planes/editar"
              element={
                <ProtectedRoute isAllowed={user && rol === "admin"}>
                  <PlanesEdit />
                </ProtectedRoute>
              }
            />

            <Route
              path="/mascotas"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <Mascota />
                </ProtectedRoute>
              }
            />

            <Route
              path="/mascotas/ver"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <MascotaView />
                </ProtectedRoute>
              }
            />

            <Route
              path="/mascotas/crear"
              element={
                <ProtectedRoute isAllowed={user && rol === "admin"}>
                  <MascotaCreate />
                </ProtectedRoute>
              }
            />

            <Route
              path="/mascota/editar"
              element={
                <ProtectedRoute isAllowed={user && rol === "admin"}>
                  <MascotaEdit />
                </ProtectedRoute>
              }
            />

            <Route
              path="/mascota/estado"
              element={
                <ProtectedRoute
                  isAllowed={user && (rol === "admin" || rol === "analyst")}
                >
                  <MascotaEstado />
                </ProtectedRoute>
              }
            />
            <Route path="*" element={<h1>There's nothing here: 404!</h1>} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
