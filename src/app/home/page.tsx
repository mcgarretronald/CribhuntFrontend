import React from 'react'

import HeroSection from '../Components/HomePage-Components/Hero'
import Steps from '../Components/HomePage-Components/Steps'
import Features from '../Components/HomePage-Components/Features'
import Review from '../Components/HomePage-Components/Review'
import FAQS from '../Components/HomePage-Components/FAQS'
import Support from '../Components/HomePage-Components/Support'

export default function HomePage() {
  return (
    <div className='overflow-x-hidden'>
        <HeroSection />
        <Steps/>
        <Features/>
        <Review/>
        <FAQS/>
        <Support/>
    </div>
  )
}
