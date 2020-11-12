import React from 'react';
import './header';
import './header.scss';
import venturusLogo from '../../images/venturus_logo.png';

function Header() {
  return (
    <>
      <header>
        <span className='brand'>
          <img src={venturusLogo} alt='logo venturus'/>
          <span>Squad Management Tool</span>
        </span>
      </header>
    </>
  );
}

export default Header;