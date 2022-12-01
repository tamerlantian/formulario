import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBRow,
  MDBCardHeader,
  MDBCol,
} from "mdb-react-ui-kit";

export default function Carrouselplan() {
  const [products, setproducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/plans").then((response) => {
      console.log(response.data);
      setproducts(response.data);
    });
  }, []);

  return (
    <div className="imgcarrouselbackground">
      <div className="container carrousel">
        <h2 className="titlecarrousel text-center">
          Conoce nuestros productos y servicios
        </h2>
        <MDBRow className="row-cols-1 row-cols-md-3 g-4">
          {products.map((data, index) => {
            return (
              <MDBCol key={index}>
                <MDBCard className="h-100">
                  <MDBCardHeader background="transparent" border="success">
                    Plan
                  </MDBCardHeader>
                  <MDBCardImage
                    src="https://mdbootstrap.com/img/new/standard/city/041.webp"
                    alt="..."
                    position="top"
                  />
                  <MDBCardBody>
                    <MDBCardTitle>{data.nombre}</MDBCardTitle>
                    <MDBCardText>{data.descripcion}</MDBCardText>
                  </MDBCardBody>
                  <MDBCardFooter>
                    <small className="text-muted">
                      Precio: {data.precio} COP
                    </small>
                  </MDBCardFooter>
                </MDBCard>
              </MDBCol>
            );
          })}
        </MDBRow>
      </div>
    </div>
  );
}
