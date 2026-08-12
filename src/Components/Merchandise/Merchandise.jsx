import React, { useState } from 'react';
import './Merchandise.css';

import tshirtFront from '../../assets/ces-tshirt-front.jpg';
import tshirtBack from '../../assets/ces-tshirt-back.jpg';

const Merchandise = () => {
  const [activeView, setActiveView] = useState('front');

  return (
    <div className="merchandise-section-wrapper">
      <div className="merchandise-header-text">
        <h3 className="merchandise-subheading">OFFICIAL GEAR</h3>
        <h2 className="merchandise-title">Merchandise Exclusive for Civil Engineers</h2>
        <p className="merchandise-caption">
          Designed with pride for the Civil Engineering Society at NIT Durgapur. Featuring the institute crest on the front and iconic structural engineering artwork on the back.
        </p>
      </div>

      <div className="merchandise-display">
        {/* Front & Back Selector Tabs */}
        <div className="merchandise-view-toggle">
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
          <button 
            className={`view-tab-btn ${activeView === 'both' ? 'active' : ''}`}
            onClick={() => setActiveView('both')}
          >
            Show Both
          </button>
        </div>

        {/* Image Showcase Grid */}
        <div className={`merchandise-grid view-mode-${activeView}`}>
          {(activeView === 'front' || activeView === 'both') && (
            <div className="tshirt-card">
              <div className="tshirt-img-container">
                <img src={tshirtFront} alt="Official CES T-Shirt Front View" className="tshirt-image" />
                <span className="view-tag">FRONT</span>
              </div>
              <div className="tshirt-card-caption">
                <h4>Front Design</h4>
                <p>Official NIT Durgapur Emblem on Left Chest</p>
              </div>
            </div>
          )}

          {(activeView === 'back' || activeView === 'both') && (
            <div className="tshirt-card">
              <div className="tshirt-img-container">
                <img src={tshirtBack} alt="Official CES T-Shirt Back View" className="tshirt-image" />
                <span className="view-tag">BACK</span>
              </div>
              <div className="tshirt-card-caption">
                <h4>Back Design</h4>
                <p>Custom Structural Engineering Artwork & "NIT DURGAPUR"</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Merchandise;
