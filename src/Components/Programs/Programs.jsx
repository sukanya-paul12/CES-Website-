import React, { useState, useEffect } from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.png'
import program_2 from '../../assets/program-2.png'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCaption, setShowCaption] = useState(false);

  const events = [
    
    
    {
      id: 1,
      image: program_1,
      title: "Technical Workshops",
      description: "Hands-on workshops covering advanced civil engineering topics, industry practices, and emerging technologies."
    },
    {
      id: 2,
      image: program_2,
      title: "Project Expo",
      description: "Showcase your academic projects and learn from peers in a collaborative and competitive environment."
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
      setShowCaption(false);
    }, 3000); // Auto-scroll every 3 seconds

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
