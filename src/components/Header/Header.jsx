import React from 'react';
import Logo from '@assets/images/logo.png';

const Header = () => {
    return (
        <header className='header'>
        <img
          src={Logo}
          alt="Logo del proyecto"
          className='header__logo'
        />
      </header>
    );
}

export default Header;