import React from 'react'
import About from '../components/About'
import AboutTeam from '../components/AboutTeam'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar/Navbar'
import Team from '../components/Team'

const PortfolioPage = () => {
  return (
    <>
        <Navbar />
        <AboutTeam />
        <Team />
        <About />
        <Footer />
    </>
  )
}

export default PortfolioPage