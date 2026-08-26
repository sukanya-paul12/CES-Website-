import React, { useState, useEffect } from 'react'
import './Programs.css'
import program_2 from '../../assets/program-2.png'
import trussTrekked from '../../assets/truss-trekked.jpg'
import expertTalksAsmit from '../../assets/expert-talks-asmit.png'
import civilLegacyAman from '../../assets/civil-legacy-aman.jpg'
import jamboreeAwareness from '../../assets/jamboree-awareness.jpg'
import freshersParty from '../../assets/freshers-party.jpg'

const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(false);

  const events = [
    {
      id: 1,
      image: trussTrekked,
      title: "Truss Trekked Competition",
      description: "A Bridge Truss Making Competition giving students hands-on structural engineering experience and exciting prizes."
    },
    {
      id: 2,
      image: expertTalksAsmit,
      title: "Expert Talks - Asmit Roy Burman",
      description: "Satellite Based Structural Health Monitoring session by MSCA doctoral candidate Asmit Roy Burman."
    },
    {
      id: 3,
      image: civilLegacyAman,
      title: "Civil Legacy - Aman Deep Sandhu",
      description: "Success Stories: Insights and career guidance from Aman Deep Sandhu (Gold Medalist 2021)."
    },
    {
      id: 4,
      image: jamboreeAwareness,
      title: "GRE/GMAT Awareness Session",
      description: "Comprehensive guidance session on GRE, GMAT, IELTS, and TOEFL for study abroad aspirants by Jamboree India."
    },
    {
      id: 5,
      image: freshersParty,
      title: "Freshers' Party",
      description: "Welcoming the newest batch to the Civil Engineering Society family with music, performances, and fun."
    },
    {
      id: 6,
      image: program_2,
      title: "Civil Engineering Project Expo",
      description: "Showcase your academic projects and learn from peers in a collaborative and competitive environment."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      setShowCaption(false);
    }, 4000); // Auto-scroll every 4 seconds

    return () => clearInterval(interval);
  }, [events.length]);

  const handleDotClick = (index) => {
    setCurrentIndex(index);
    setShowCaption(false);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + events.length) % events.length);
    setShowCaption(false);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
    setShowCaption(false);
  };

  const handleImageClick = () => {
    setShowCaption(!showCaption);
  };

  return (
    <div className='programs-gallery' id='program'>
      <div className="gallery-container">
        <button className="gallery-nav gallery-nav-prev" onClick={handlePrev} aria-label="Previous">
          ‹
        </button>
        
        <div className="gallery-track-wrapper">
          <div 
            className="gallery-track" 
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {events.map((event, index) => (
              <div 
                className="program-slide" 
                key={event.id}
                onClick={index === currentIndex ? handleImageClick : undefined}
                style={{ cursor: index === currentIndex ? 'pointer' : 'default' }}
              >
                <img src={event.image} alt={event.title} />
                <div className={`caption ${showCaption && index === currentIndex ? 'show' : ''}`}>
                  <h3>{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="gallery-nav gallery-nav-next" onClick={handleNext} aria-label="Next">
          ›
        </button>
      </div>

      <div className="gallery-dots">
        {events.map((_, index) => (
          <button
            key={index}
            className={`gallery-dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default Programs
