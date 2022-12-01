import React from "react";
import { Parallax } from "react-parallax";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

export default function MisionVision() {
  return (
    <div>
      {/* <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={
          <img
            src="./mascotas.jpg"
            className="img-fluid"
            alt=""
          />
        }
        bgImageAlt="the dog"
        strength={-200}
      >
        <div
          className="height-mask"
          style={{ height: "500px", backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        />
      </Parallax> */}
      <div>
        <div className="margen-contenido">
          <MDBContainer>
            <MDBRow>
              <MDBCol size="md">
                <div className="bg-image hover-overlay">
                  <img
                    src="https://www.sadenir.com.uy/wp-content/uploads/2020/11/veterinarian-check-ing-puppy-s-health-2.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div
                    className="mask overlay"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  ></div>
                </div>
              </MDBCol>
              <MDBCol size="md">
                <h2 className="titlecarrousel misiontext">
                  El bienestar de su mascota es nuestra misión
                </h2>
                <p className="margen-contenido misiontext">
                  Ofrecer bienestar tanto animal, como a las familias de
                  nuestros pacientes a través de la prestación de servicios
                  médicos veterinarios y complementarios.
                </p>
                <p small className="text-muted misiontext">
                  {" "}
                  Nuestro grupo de trabajo comparte valores y principios éticos
                  de respeto, responsabilidad y compromiso, entregando calidad y
                  satisfacción en nuestros servicios.
                </p>
                <img
                  className="misionicon"
                  src="http://assets.stickpng.com/thumbs/58aeffe0c869e092af51ee77.png"
                  alt=""
                ></img>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
        {/* <Parallax
          blur={{ min: -15, max: 15 }}
          bgImage={
            <img
              src="./mascotas2.jpeg"
              className="img-fluid"
              alt=""
            />
          }
          bgImageAlt="the dog"
          strength={-200}
        >
          <div
            className="height-mask"
            style={{ height: "500px", backgroundColor: "rgba(0, 0, 0, 0.4)" }}
          />
        </Parallax> */}
        <div className="visionbackground height-mask">
          <MDBContainer>
            <MDBRow className="visionposition">
              <MDBCol size="md">
                <h2 className="margen-contenido visiontext">
                  El bienestar de su mascota es nuestra misión
                </h2>
                <p className="margen-contenido visiontext">
                  Ofrecer bienestar tanto animal, como a las familias de
                  nuestros pacientes a través de la prestación de servicios
                  médicos veterinarios y complementarios.
                </p>
                <p small className=" visiontext">
                  {" "}
                  Nuestro grupo de trabajo comparte valores y principios éticos
                  de respeto, responsabilidad y compromiso, entregando calidad y
                  satisfacción en nuestros servicios.
                </p>
              </MDBCol>
              <MDBCol size="md">
                <div className="bg-image hover-overlay">
                  <img
                    src="https://www.zooplus.es/magazine/wp-content/uploads/2019/06/fotolia_132644817-768x513.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div
                    className="mask overlay"
                    style={{ backgroundColor: "rgba(57, 192, 237, 0.2)" }}
                  ></div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </div>
  );
}
