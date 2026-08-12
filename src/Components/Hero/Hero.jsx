import React from 'react'
import './Hero.css'
import { Link } from 'react-scroll'
import { HiArrowRight } from 'react-icons/hi2'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <div className="hero-badge">
          <span className="badge-part">Civil Engineering Society</span>
          <span className="badge-sep">•</span>
          <span className="badge-part">NIT Durgapur</span>
        </div>
        <h1>Building Tomorrow's</h1>
        <h1>Infrastructure Leaders</h1>
        <p>A vibrant community of aspiring civil engineers at NIT Durgapur, united in our passion for shaping the world through innovation, knowledge, and hands-on projects.</p>
        <div className="hero-buttons">
          <Link to='about' smooth={true} offset={-150} duration={500}>
            <button className='btn btn-primary'>
              <span>Explore More</span>
              <HiArrowRight className="btn-arrow" />
            </button>
          </Link>
          <Link to='contact' smooth={true} offset={-260} duration={500}>
            <button className='btn btn-secondary'>
              <span>Join Us</span>
            </button>
          </Link>
        </div>
      </div>
      
      {/* Animated Scroll Down Indicator */}
      <Link to='about' smooth={true} offset={-150} duration={500} className="hero-scroll-indicator" aria-label="Scroll Down">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span className="scroll-text">SCROLL DOWN</span>
      </Link>
    </div>
  )
}

export default Hero
