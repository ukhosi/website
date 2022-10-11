import React, { useState, useEffect } from 'react';
import './Header.css';
import { CSSTransition } from 'react-transition-group';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [isNavVisible, setNavVisibility] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 700px)');
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = mediaQuery => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true);
    } else {
      setIsSmallScreen(false);
    }
  };

  const toggleNav = () => {
    setNavVisibility(!isNavVisible);
  };

  return (
    <>
      <header className='Header'>
        <a href='/'>
          <img src={require('../../../assets/logo/logo.png')} className='Logo' alt='logo' />
        </a>
        <CSSTransition
          in={!isSmallScreen || isNavVisible}
          timeout={350}
          classNames='NavAnimation'
          unmountOnExit
        >
          <nav className='Nav'>
            <a href='/#/'>Fake News</a>
            <a href='/#/tales'>Revolutionary Tales</a>
            <a href='/#/shop'>Patriots' Shop</a>
          </nav>
        </CSSTransition>
        <button onClick={toggleNav} className='mobile-menu'>
          <MenuIcon style={{ color: '#fff5f1' }} />
        </button>
      </header>
    </>
  )
}

export default Header