import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Campus.css'
import gallery_2 from '../../assets/gallery-2.png'
import gallery_3 from '../../assets/gallery-3.png'
import gallery_4 from '../../assets/gallery-4.png'
import heroImg from '../../assets/hero.png'
import aboutImg from '../../assets/about.png'
import utkarshBhawan from '../../assets/utkarsh-bhawan.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [lightbox, setLightbox] = useState({ isOpen: false, imageIndex: 0 });

  const images = [
    { src: utkarshBhawan, alt: 'Utkarsh Bhawan' },
    { src: heroImg, alt: 'NIT Durgapur Campus' },
    { src: gallery_2, alt: 'Campus View 2' },
    { src: gallery_3, alt: 'Campus View 3' },
    { src: gallery_4, alt: 'Campus View 4' },
    { src: aboutImg, alt: 'Campus Life' },
  ];

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (index) => {
    setLightbox({ isOpen: true, imageIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, imageIndex: 0 });
  };

  const handleNextImage = () => {
    setLightbox(prev => ({
      isOpen: true,
      imageIndex: (prev.imageIndex + 1) % images.length
    }));
  };

  const handlePrevImage = () => {
    setLightbox(prev => ({
      isOpen: true,
      imageIndex: (prev.imageIndex - 1 + images.length) % images.length
    }));
  };

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') handleNextImage();
      if (e.key === 'ArrowLeft') handlePrevImage();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen]);

  return (
    <div className='campus'>
      <div className="gallery-slider">
        <div className="slider-container" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
          {images.map((image, index) => (
            <div key={index} className="slide" onClick={() => handleImageClick(index)}>
              <img src={image.src} alt={image.alt} className='gallery-img' />
            </div>
          ))}
        </div>
        
        <div className="slider-dots">
          {images.map((_, index) => (
            <button
              key={index}
              className={`dot ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <Link to="/gallery">
        <button className='btn dark-btn'>Open Gallery <img src={white_arrow} alt="" /></button>
      </Link>

      {/* Lightbox Modal */}
      {lightbox.isOpen && (
        <div className="lightbox-modal" onClick={closeLightbox}>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}>
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[lightbox.imageIndex].src} alt={images[lightbox.imageIndex].alt} />
            <h3 className="lightbox-title">{images[lightbox.imageIndex].alt}</h3>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); handleNextImage(); }}>
            ›
          </button>
        </div>
      )}
    </div>
  )
}

export default Campus
