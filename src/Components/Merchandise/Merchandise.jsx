import React, { useState } from 'react';
import './Merchandise.css';

import tshirtFront from '../../assets/ces-tshirt-front.jpg';
import tshirtBack from '../../assets/ces-tshirt-back.jpg';
import poloFront from '../../assets/ces-polo-front.png';
import poloBack from '../../assets/ces-polo-back.png';

const merchandiseItems = [
  {
    id: 'civil-engineers-tee',
    category: 'civil-engineers',
    badge: 'Exclusive for Civil Engineers',
    title: 'Civil Engineering Society Round Neck Tee',
    description: 'Designed with pride for Civil Engineering students at NIT Durgapur. Featuring the institute crest on the front and structural engineering artwork on the back.',
    frontImg: tshirtFront,
    backImg: tshirtBack,
    frontCaption: 'Official NIT Durgapur Emblem on Left Chest',
    backCaption: 'Custom Structural Engineering Artwork & "NIT DURGAPUR"',
  },
  {
    id: 'ces-members-polo',
    category: 'ces-members',
    badge: 'Exclusively for CES Members',
    title: 'Official CES Member Polo Shirt',
    description: 'Exclusively crafted for Civil Engineering Society members. Features the premium CES crest, custom city skyline graphics, and rear society typography.',
    frontImg: poloFront,
    backImg: poloBack,
    frontCaption: 'Official CES Crest & City Skyline Graphics',
    backCaption: 'CES | Civil Engineering Society NIT Durgapur',
  },
];

const Merchandise = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeView, setActiveView] = useState('both');

  const filteredItems = activeCategory === 'all' 
    ? merchandiseItems 
    : merchandiseItems.filter(item => item.category === activeCategory);

  return (
    <div className="merchandise-section-wrapper">
      <div className="merchandise-header-text">
        <h3 className="merchandise-subheading">OFFICIAL GEAR</h3>
        <h2 className="merchandise-title">Civil Engineering Society Apparel</h2>
        <p className="merchandise-caption">
          Wear your pride! Explore official gear designed exclusively for Civil Engineers and CES members at NIT Durgapur.
        </p>
      </div>

      {/* Collection Filter Tabs */}
      <div className="merchandise-category-toggle">
        <button 
          className={`category-tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
          onClick={() => setActiveCategory('all')}
        >
          All Apparel
        </button>
        <button 
          className={`category-tab-btn ${activeCategory === 'civil-engineers' ? 'active' : ''}`}
          onClick={() => setActiveCategory('civil-engineers')}
        >
          Exclusive for Civil Engineers
        </button>
        <button 
          className={`category-tab-btn ${activeCategory === 'ces-members' ? 'active' : ''}`}
          onClick={() => setActiveCategory('ces-members')}
        >
          Exclusively for CES Members
        </button>
      </div>

      {/* Front / Back View Toggle */}
      <div className="merchandise-view-toggle">
        <button 
          className={`view-tab-btn ${activeView === 'both' ? 'active' : ''}`}
          onClick={() => setActiveView('both')}
        >
          Show Both Views
        </button>
        <button 
          className={`view-tab-btn ${activeView === 'front' ? 'active' : ''}`}
          onClick={() => setActiveView('front')}
        >
          Front View
        </button>
        <button 
          className={`view-tab-btn ${activeView === 'back' ? 'active' : ''}`}
          onClick={() => setActiveView('back')}
        >
          Back View
        </button>
      </div>

      {/* Merchandise Showcase Sections */}
      <div className="merchandise-collections-container">
        {filteredItems.map((item) => (
          <div key={item.id} className="merchandise-item-block">
            <div className="merchandise-item-header">
              <span className="merchandise-item-badge">{item.badge}</span>
              <h3 className="merchandise-item-title">{item.title}</h3>
              <p className="merchandise-item-desc">{item.description}</p>
            </div>

            <div className={`merchandise-grid view-mode-${activeView}`}>
              {(activeView === 'front' || activeView === 'both') && (
                <div className="tshirt-card">
                  <div className="tshirt-img-container">
                    <img src={item.frontImg} alt={`${item.title} Front View`} className="tshirt-image" />
                    <span className="view-tag">FRONT</span>
                  </div>
                  <div className="tshirt-card-caption">
                    <h4>Front Design</h4>
                    <p>{item.frontCaption}</p>
                  </div>
                </div>
              )}

              {(activeView === 'back' || activeView === 'both') && (
                <div className="tshirt-card">
                  <div className="tshirt-img-container">
                    <img src={item.backImg} alt={`${item.title} Back View`} className="tshirt-image" />
                    <span className="view-tag">BACK</span>
                  </div>
                  <div className="tshirt-card-caption">
                    <h4>Back Design</h4>
                    <p>{item.backCaption}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Merchandise;
