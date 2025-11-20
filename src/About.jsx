import React from 'react'
import "./About"
import Navbar from "./Navbar"

function About() {
  return (
    <div className='home-container'>
       <h1 className='heading'> About</h1>
      <Navbar activeMenu="/About"/>
    </div>
     
  )
}

export default About
