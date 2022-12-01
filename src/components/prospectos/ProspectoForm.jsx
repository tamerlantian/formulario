import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Container } from "semantic-ui-react";

export default function ProspectForm() {
  const {
    register,
    handleSubmit,
    //formState: { errors }
  } = useForm();

  const [nombre, setNombre] = useState("");

  const onSubmit = async (data) => {
    const { nombre, apellido, correo, celular, comentario } = data;
    const requestOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombre: nombre,
        apellido: apellido,
        correo: correo,
        celular: celular,
        comentario: comentario,
      }),
    };

    fetch("http://localhost:3000/prospectos", requestOption)
      .then((res) => res.json())
      .then((data) => {
        setNombre("");
      });
  };

  return (
    <div className="contactenos">
      <Container style={{ textAlign: "-webkit-center" }}>
        <form className="form " onSubmit={handleSubmit(onSubmit)}>
          <h2 className="titlecarrouselwhite">Contáctenos</h2>

          <label className="form__label" htmlFor="nombre">
            Nombre:
          </label>
          <input
            className="form__input"
            {...register("nombre", { required: true })}
          />

          <label className="form__label" htmlFor="apellido">
            Apellido:
          </label>
          <input
            className="form__input"
            {...register("apellido", { required: true })}
          />

          <label className="form__label" htmlFor="correo">
            Correo:
          </label>
          <input
            className="form__input"
            {...register("correo", { required: true })}
          />

          <label className="form__label" htmlFor="celular">
            Celular:
          </label>
          <input
            className="form__input"
            {...register("celular", { required: true })}
          />

          <label className="form__label" htmlFor="comentario">
            Comentario:
          </label>
          <textarea
            className="form__input"
            {...register("comentario", { required: true })}
          />

          <input className="form__submit" type="submit" />
        </form>
      </Container>
    </div>
  );
}
