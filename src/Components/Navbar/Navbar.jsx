import React, { useEffect, useState } from 'react'
import './Navbar.css'
import logo2 from '../../assets/ces-logo.png'
import { HiMenuAlt3 } from 'react-icons/hi'
import { IoClose } from 'react-icons/io5'
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';


const Navbar = () => {
    const location = useLocation();
    const isHomePage = location.pathname === '/';
    const isTeamPage = location.pathname === '/team';

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
      const handleScroll = () => {
        setSticky(window.scrollY > 50);
      };
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    },[]);


    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
      mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }

    const closeMenu = () => {
      setMobileMenu(false);
    }

    return (
    <>
    <nav className={`container ${sticky? 'dark-nav' : ''}`}>
      <RouterLink to="/" onClick={closeMenu}>
        <img src={logo2} alt="CES Logo" className={`logo${sticky || !isHomePage ? ' logo-small' : ''}`} />
      </RouterLink>
      <ul className='desktop-menu'>
        <li onClick={() => {
          closeMenu();
          setTimeout(() => window.scrollTo({ top: 0, behavior: 'smooth' }), 0);
        }}>
          <RouterLink to="/">
            <h3>HOME</h3>
          </RouterLink>
        </li>
        <li onClick={closeMenu}>
          {isHomePage ? (
            <ScrollLink to='program' smooth={true} offset={-80} duration={500}>
              <h3>EVENTS</h3>
            </ScrollLink>
          ) : (
            <RouterLink to="/">
              <h3>EVENTS</h3>
            </RouterLink>
          )}
        </li>
        <li onClick={closeMenu}>
          <RouterLink to="/announcements">
            <h3>ANNOUNCEMENTS</h3>
          </RouterLink>
        </li>
        <li onClick={closeMenu}>
          <RouterLink to="/gallery">
            <h3>GALLERY</h3>
          </RouterLink>
        </li>
        <li onClick={closeMenu}>
          {isHomePage ? (
            <ScrollLink to='merchandise-section' smooth={true} offset={-80} duration={500}>
              <h3>MERCHANDISE</h3>
            </ScrollLink>
          ) : (
            <RouterLink to="/merchandise">
              <h3>MERCHANDISE</h3>
            </RouterLink>
          )}
        </li>
        <li onClick={closeMenu}>
          {isHomePage ? (
            <ScrollLink to='team-section' smooth={true} offset={-80} duration={500}>
              <h3>TEAM</h3>
            </ScrollLink>
          ) : (
            <RouterLink to="/team">
              <h3>TEAM</h3>
            </RouterLink>
          )}
        </li>
      </ul>
      <div className='menu-icon' onClick={toggleMenu}>
        {mobileMenu ? <IoClose size={32} /> : <HiMenuAlt3 size={32} />}
      </div>
    </nav>
    <div className={`mobile-menu-overlay ${mobileMenu ? 'active' : ''}`}>
      <ul>
        <li onClick={closeMenu}>
          <RouterLink to="/">
            <h3>HOME</h3>
          </RouterLink>
        </li>
        <li onClick={closeMenu}>
          {isHomePage ? (
            <ScrollLink to='program' smooth={true} offset={-80} duration={500}>
              <h3>EVENTS</h3>
            </ScrollLink>
          ) : (
            <RouterLink to="/">
              <h3>EVENTS</h3>
            </RouterLink>
          )}
        </li>
        <li onClick={closeMenu}>
          <RouterLink to="/announcements">
            <h3>ANNOUNCEMENTS</h3>
          </RouterLink>
        </li>
        <li onClick={closeMenu}>
          <RouterLink to="/gallery">
            <h3>GALLERY</h3>
          </RouterLink>
        </li>
        <li onClick={closeMenu}>
          {isHomePage ? (
            <ScrollLink to='merchandise-section' smooth={true} offset={-80} duration={500}>
              <h3>MERCHANDISE</h3>
            </ScrollLink>
          ) : (
            <RouterLink to="/merchandise">
              <h3>MERCHANDISE</h3>
            </RouterLink>
          )}
        </li>
        <li onClick={closeMenu}>
          {isHomePage ? (
            <ScrollLink to='team-section' smooth={true} offset={-80} duration={500}>
              <h3>TEAM</h3>
            </ScrollLink>
          ) : (
            <RouterLink to="/team">
              <h3>TEAM</h3>
            </RouterLink>
          )}
        </li>
      </ul>
    </div>
    </>
  )
}

export default Navbar
