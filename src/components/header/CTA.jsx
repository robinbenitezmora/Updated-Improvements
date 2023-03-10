import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} downlad className='btn'>Download CV</a>
      <a href="#contact" className='btn-primary-class'>Let's Talk</a>
    </div>
  )
}

export default CTA