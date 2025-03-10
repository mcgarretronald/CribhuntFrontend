import React from 'react'
import NavBar from '../Components/Navbar'
import HeroSection from '../Components/HomePage-Components/Hero'
import Steps from '../Components/HomePage-Components/Steps'

export default function HomePage() {
  return (
    <div>
      <NavBar />
      <div>
        <HeroSection />
        <Steps/>
      </div>
    </div>
  )
}
