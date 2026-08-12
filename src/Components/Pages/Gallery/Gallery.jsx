import React, { useState, useEffect } from 'react';
import './Gallery.css';
import gallery2 from '../../../assets/gallery-2.png';
import gallery3 from '../../../assets/gallery-3.png';
import gallery4 from '../../../assets/gallery-4.png';
import heroImg from '../../../assets/hero.png';
import aboutImg from '../../../assets/about.png';
import program1 from '../../../assets/program-1.png';
import program2 from '../../../assets/program-2.png';
import collegeVideo from '../../../assets/college-video.mp4';
import nitdgpVideo from '../../../assets/nitdgp-video_gW7ApmeU.mp4';
import expertTalks from '../../../assets/15AugExpertTalks.png';
import intersection from '../../../assets/h1-2intersection.jpg';
import freshers25team from '../../../assets/freshersteam25.jpeg';
import utkarshBhawan from '../../../assets/utkarsh-bhawan.jpg';
import farewell from '../../../assets/farewell.jpg';

const Gallery = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [lightbox, setLightbox] = useState({ isOpen: false, item: null });

  const galleryItems = [
    { id: 15, type: 'image', src: utkarshBhawan, title: 'Utkarsh Bhawan', category: 'campus' },
    { id: 2, type: 'image', src: gallery2, title: 'Campus View 2', category: 'campus' },
    { id: 3, type: 'image', src: gallery3, title: 'Campus View 3', category: 'campus' },
    { id: 4, type: 'image', src: gallery4, title: 'Campus View 4', category: 'campus' },
    { id: 5, type: 'image', src: intersection, title: 'Campus View 5', category: 'campus' },
    { id: 6, type: 'image', src: heroImg, title: 'NIT Durgapur', category: 'campus' },
    { id: 7, type: 'image', src: aboutImg, title: 'Campus Life', category: 'campus' },
    { id: 8, type: 'image', src: freshers25team, title: '2025 Team', category: 'events' },
    { id: 9, type: 'image', src: farewell, title: 'Farewell Ceremony', category: 'events' },
    { id: 11, type: 'image', src: program1, title: 'Engineering Seminar', category: 'events' },
    { id: 12, type: 'image', src: program2, title: 'Civil Engineering Event', category: 'events' },
    { id: 13, type: 'video', src: collegeVideo, thumbnail: gallery2, title: 'Campus Tour', category: 'videos' },
    { id: 14, type: 'video', src: nitdgpVideo, thumbnail: gallery3, title: 'NIT Durgapur Overview', category: 'videos' },
  ];

  const categories = ['all', 'campus', 'events', 'videos'];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  const handleNext = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === lightbox.item.id);
    const nextIndex = (currentIndex + 1) % filteredItems.length;
    setLightbox({ isOpen: true, item: filteredItems[nextIndex] });
  };

  const handlePrev = () => {
    const currentIndex = filteredItems.findIndex(item => item.id === lightbox.item.id);
    const prevIndex = (currentIndex - 1 + filteredItems.length) % filteredItems.length;
    setLightbox({ isOpen: true, item: filteredItems[prevIndex] });
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = lightbox.item.src;
    link.download = `${lightbox.item.title.replace(/\s+/g, '_')}.${lightbox.item.type === 'video' ? 'mp4' : 'png'}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox.isOpen) return;
      if (e.key === 'Escape') setLightbox({ isOpen: false, item: null });
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox.isOpen, lightbox.item]);

  return (
    <div className="gallery-page">
      <div className="gallery-hero">
        <h1>Gallery</h1>
        <p>Capturing moments, building memories</p>
      </div>

      <div className="container">
        <div className="gallery-tabs">
          {categories.map(cat => (
            <button
              key={cat}
              className={`tab-btn ${activeTab === cat ? 'active' : ''}`}
              onClick={() => setActiveTab(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item" onClick={() => setLightbox({ isOpen: true, item })}>
              {item.type === 'image' ? (
                <img src={item.src} alt={item.title} />
              ) : (
                <div className="video-container" style={{ position: 'relative' }}>
                  <video src={item.src} poster={item.thumbnail} />
                  <span style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    background: 'rgba(0,0,0,0.7)',
                    color: '#fff',
                    padding: '4px 12px',
                    borderRadius: '16px',
                    fontSize: '13px',
                    fontWeight: 700,
                    letterSpacing: '1px',
                    zIndex: 2
                  }}>VIDEO</span>
                </div>
              )}
              <div className="gallery-overlay">
                <h3>{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox.isOpen && (
        <div className="lightbox-modal" onClick={() => setLightbox({ isOpen: false, item: null })}>
          <button className="lightbox-nav lightbox-prev" onClick={(e) => { e.stopPropagation(); handlePrev(); }}>
            ‹
          </button>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="lightbox-download" onClick={handleDownload} title="Download">
              ⭳
            </button>
            {lightbox.item.type === 'image' ? (
              <img src={lightbox.item.src} alt={lightbox.item.title} />
            ) : (
              <video src={lightbox.item.src} controls autoPlay />
            )}
            <h3 className="lightbox-title">{lightbox.item.title}</h3>
          </div>
          <button className="lightbox-nav lightbox-next" onClick={(e) => { e.stopPropagation(); handleNext(); }}>
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Gallery;
