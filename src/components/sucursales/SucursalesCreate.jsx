import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";

export default function SucursalesCreate() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useNavigate();

  const onSubmit = async (data) => {
    const { departamento, ciudad, direccion, telefono } = data;
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        departamento: departamento,
        ciudad: ciudad,
        direccion: direccion,
        telefono: telefono,
      }),
    };

    fetch("http://localhost:3000/sucursals", requestOption)
      .then((res) => res.json())
      .then((data) => history("/sucursales"));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p className="form__title mb-4">Registrar Nueva Sucursal</p>
      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="departamento">
          Departamento
        </label>
        <input
          type="text"
          className="form-control"
          {...register("departamento", { required: true })}
        />
        {errors.departamento && (
          <span className="form__error">Este campo es obligatorio</span>
        )}
      </div>

      <div className="row mb-3">
        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="ciudad">
              Ciudad
            </label>
            <input
              type="text"
              className="form-control"
              {...register("ciudad", { required: true })}
            />
            {errors.ciudad && (
              <span className="form__error">Este campo es obligatorio</span>
            )}
          </div>
        </div>
        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="direccion">
              Direccion
            </label>
            <input
              type="text"
              className="form-control"
              {...register("direccion", { required: true })}
            />
            {errors.direccion && (
              <span className="form__error">Este campo es obligatorio</span>
            )}
          </div>
        </div>
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="telefono">
          Telefono
        </label>
        <input
          type="text"
          className="form-control"
          {...register("telefono", { required: true })}
        />
        {errors.telefono && (
          <span className="form__error">Este campo es obligatorio</span>
        )}
      </div>

      <button type="submit" className="btn btn-success btn-block mb-4">
        Crear
      </button>
    </form>
  );
}
