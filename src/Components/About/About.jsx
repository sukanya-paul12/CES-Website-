import React, { useEffect, useRef, useState } from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
import droneShot from '../../assets/droneShots.mp4'
import cesPoster from '../../assets/we-are-ces-poster.png'
import "../../assets/hero.png"

const About = ({setPlayState}) => {
  const [visibleSections, setVisibleSections] = useState(new Set())
  const sectionsRef = useRef([])
  const timelineRef = useRef(null)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.3,
      rootMargin: '-50px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleSections(prev => new Set([...prev, entry.target.dataset.section]))
        }
      })
    }, observerOptions)

    sectionsRef.current.forEach(section => {
      if (section) observer.observe(section)
    })

    const handleScroll = () => {
      if (timelineRef.current) {
        const aboutSection = timelineRef.current.closest('.about')
        if (aboutSection) {
          const rect = aboutSection.getBoundingClientRect()
          const scrolled = Math.max(0, -rect.top)
          const height = aboutSection.offsetHeight - window.innerHeight
          const progress = Math.min(100, (scrolled / height) * 100)
          timelineRef.current.style.height = `${progress}%`
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() 

    return () => {
      sectionsRef.current.forEach(section => {
        if (section) observer.unobserve(section)
      })
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className='about'>
      <div className="about-left">
        <div className="video-wrapper">
          <img src={about_img} alt="" className='about-img'/>
          <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
        </div>
        <div className="drone-video-container">
          <video className="drone-video" controls poster={cesPoster} preload="metadata">
            <source src="/ces-video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="youtube-video-container">
          <iframe 
            className="youtube-video"
            src="https://www.youtube.com/embed/qjH473jeQRY?si=NqFRjUE32TDRdpz8" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </div>
        <div className="drone-video-container">
          <video className="drone-video" controls>
            <source src={droneShot} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="about-right">
        <div className="timeline-container">
          <div className="timeline-line"></div>
          <div className="timeline-progress" ref={timelineRef}></div>
        </div>
        
        <div className="about-badge">About CES</div>
        <h2 
          ref={el => sectionsRef.current[0] = el} 
          data-section="0"
          className={visibleSections.has('0') ? 'animate-in' : ''}
        >
          Nurturing Tomorrow's Infrastructure Leaders Today
        </h2>
        <p 
          className="about-intro"
          ref={el => sectionsRef.current[1] = el} 
          data-section="1"
          style={{ opacity: visibleSections.has('1') ? 1 : 0, transform: visibleSections.has('1') ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease-out' }}
        >
          The Civil Engineering Society at NIT Durgapur is a vibrant community of passionate students, builders, and problem solvers dedicated to shaping the future of infrastructure and civil engineering.
        </p>
        
        <div 
          className="about-section"
          ref={el => sectionsRef.current[2] = el} 
          data-section="2"
          style={{ opacity: visibleSections.has('2') ? 1 : 0, transform: visibleSections.has('2') ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.6s ease-out 0.1s' }}
        >
          <div className="section-marker"></div>
          <h3>Who Are We</h3>
          <p>We are a community of passionate civil engineering students. We are builders as well as problem solvers - without us there would be no shelter to stay and no medium (roads and railways) to travel from one place to another. We are here to grow and strengthen the civil engineering students community at NIT Durgapur and connect our members to all the people, resources, and opportunities they need to achieve their goals.</p>
        </div>
        
        <div 
          className="about-section"
          ref={el => sectionsRef.current[3] = el} 
          data-section="3"
          style={{ opacity: visibleSections.has('3') ? 1 : 0, transform: visibleSections.has('3') ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.6s ease-out 0.2s' }}
        >
          <div className="section-marker"></div>
          <h3>Our Vision</h3>
          <p>Our vision is to create a dynamic platform for intellectual exchange, where members engage in workshops, events and guest lectures by esteemed professionals. We forge connections with peers, seniors and alumni, drawing upon their insights, experiences and expertise. We aim to organize skill development workshops and training sessions that prepare students for real-world challenges.</p>
        </div>
        
        <div 
          className="about-section"
          ref={el => sectionsRef.current[4] = el} 
          data-section="4"
          style={{ opacity: visibleSections.has('4') ? 1 : 0, transform: visibleSections.has('4') ? 'translateX(0)' : 'translateX(-30px)', transition: 'all 0.6s ease-out 0.3s' }}
        >
          <div className="section-marker"></div>
          <h3>Our Journey</h3>
          <p>We started with a shared vision of fostering knowledge and networking opportunities within our field. Organizing various webinars and events has become a cornerstone of our mission, allowing us to connect with faculties and alumni, share insights and stay abreast of the latest developments and opportunities in civil engineering. Through perseverance and a shared passion, we continue to inspire and support each other in our personal and academic growth.</p>
        </div>
      </div>
    </div>
  )
}

export default About
