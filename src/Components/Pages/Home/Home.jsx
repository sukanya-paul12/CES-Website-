import React, { useEffect, useState } from 'react';
import Hero from '../../Hero/Hero';
import About from '../../About/About';
import Title from '../../Title/Title';
import Programs from '../../Programs/Programs';
import Campus from '../../Campus/Campus';
import Merchandise from '../../Merchandise/Merchandise';
import Team from '../Team/Team';
import Contact from '../../Contact/Contact';
import VideoPlayer from '../../VideoPlayer/VideoPlayer';

const Home = ({ scrollTo }) => {
  const [playState, setPlayState] = useState(false);

  useEffect(() => {
    if (scrollTo === 'team') {
      const el = document.getElementById('team-section');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    } else if (scrollTo === 'merchandise') {
      const el = document.getElementById('merchandise-section');
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }), 50);
      }
    }
  }, [scrollTo]);

  return (
    <>
      <Hero />
      <div className="container">
        <About setPlayState={setPlayState} />
        <Title subTitle='Our EVENTS' title='What We Offer' />
        <Programs />
        
        <Title subTitle='Gallery' title='Campus Photos' />
        <Campus />

        <div id="merchandise-section">
          <Merchandise />
        </div>

        <div id="team-section">
          <Title subTitle='Meet the Team' title='Our Team' />
          <Team />
        </div>
        <Title subTitle='Contact Us' title='Get in Touch' />
        <Contact />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </>
  );
};

export default Home;
