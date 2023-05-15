import React from 'react'
import AboutUs from './AboutUs'
import Contact from './Contact'
import Faq from './Faq'

const Company = () => {
  return (
    <div className=' space-y-20 my-10'>
      <Faq />
      <AboutUs/>
      <Contact/>
    </div>
  )
}

export default Company