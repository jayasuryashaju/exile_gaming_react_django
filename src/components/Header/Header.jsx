import React from 'react';
import './Header.css';
import exileLogo from '../../assets/exile-logo.jpg';

function Header() {
  return (
    <div className='nav-bar'>
      <div className='nav-left'>
        <div className='nav-img'>
          <img src={exileLogo} alt="Exile Logo" />
        </div>
        <ul>
          <li>HOME</li>
          <li>COMMUNITY</li>
          <li>EVENTS</li>
          <li>NEWS</li>
          <li>TOURNAMENTS</li>
        </ul>
      </div>
      <div className="nav-right">
        <div className="nav-login">
          <ul>
            <li>LOGIN</li>
          </ul>
        </div>
        <div className="nav-register">
          <ul>
            <li>REGISTER</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Header;
