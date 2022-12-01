import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
    return (
        <MDBFooter bgColor='dark' className='text-center text-lg-start text-muted'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>               
                <div>
                    <a href='https://linkedin.com' className='me-4 text-reset'>
                        <MDBIcon color='orange-400' fab icon='linkedin-in' />
                    </a>
                    <a href='https://linkedin.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </a>
                    <a href='https://linkedin.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='linkedin' />
                    </a>
                    <a href='https://linkedin.com' className='me-4 text-reset'>
                        <MDBIcon color='secondary' fab icon='github' />
                    </a>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
                            <h3 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon color='secondary' icon='gem' className='me-3' />
                                MASCOTICAS FELICES
                            </h3>
                            <p>
                                Horario de atención: 7:00 - 17:00 L-D 
                                Contacto: +57 320 8897458 - 4454578
                            </p>
                        </MDBCol>
                        

                        <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Recursos</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Servicios
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Contáctenos
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Ingresar
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Sobre nosotros
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>DEVELOPER TEAM</h6>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Sebastián Hoyos 
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                sebastian.h.piedrahita@gmail.com
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='home' className='me-2' />
                                Laura González
                            </p>
                            <p>
                                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                                lauragonsan7@gmail.com
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Copyright:
                <a className='text-reset fw-bold' href='#!'>
                    MisiónTIC-2022-UTP
                </a>
            </div>
        </MDBFooter>
    );
}