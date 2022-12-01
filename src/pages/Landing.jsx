import React from 'react'
import { Carrousel_plan, Footer, ProspectoForm, MisionVision, NavBar } from '../components'
import './landing.css'

const Landing = () => {
  return (
    <>
      <NavBar />
      <Carrousel_plan/>
      <MisionVision/>
      <ProspectoForm/>
      <Footer />
    </>
  )
}

export default Landing
