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
    const { nombre, descripcion, precio } = data;
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        descripcion: descripcion,
        precio: parseInt(precio),
      }),
    };

    fetch("http://localhost:3000/plans", requestOption)
      .then((res) => res.json())
      .then((data) => history("/planes"));
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p className="form__title mb-4">Registrar Nuevo Plan</p>
      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="nombre">
          Nombre
        </label>
        <input
          type="text"
          className="form-control"
          {...register("nombre", { required: true })}
        />
        {errors.nombre && (
          <span className="form__error">Este campo es obligatorio</span>
        )}
      </div>

      <div className="row mb-3">
        <div className="col">
          <div className="form-outline">
            <label className="form-label" htmlFor="precio">
              Precio
            </label>
            <input
              type="text"
              className="form-control"
              {...register("precio", { required: true })}
            />
            {errors.precio && (
              <span className="form__error">Este campo es obligatorio</span>
            )}
          </div>
        </div>
      </div>

      <div className="form-outline mb-3">
        <label className="form-label" htmlFor="descripcion">
          Descripcion
        </label>
        <input
          type="text"
          className="form-control"
          {...register("descripcion", { required: true })}
        />
        {errors.descripcion && (
          <span className="form__error">Este campo es obligatorio</span>
        )}
      </div>

      <button type="submit" className="btn btn-success btn-block mb-4">
        Crear
      </button>
    </form>
    // <form className="form" onSubmit={handleSubmit(onSubmit)} >
    //     <label className='form__label' htmlFor="nombre">Nombre:</label>
    //     <input className='form__input' {...register("nombre", { required: true })} />

    //     <label className='form__label' htmlFor="descripcion">Descripcion:</label>
    //     <input className='form__input' {...register("descripcion", { required: true })} />

    //     <label className='form__label' htmlFor="precio">Precio:</label>
    //     <input className='form__input' {...register("precio", { required: true })} />

    //     <input className='form__submit' type="submit" />
    // </form>
  );
}
