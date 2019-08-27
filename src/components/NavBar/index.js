import React from 'react';

const NavBar = ({onBurgerToggle}) => {
    return (
        <nav className='nav-bar'>
            <div className='burger-wrapper'>
            <button
                onClick={e => onBurgerToggle()}
                className="hamburger hamburger--collapse"
                type="button">
              <span className="hamburger-box">
                <span className="hamburger-inner"></span>
              </span>
            </button>
            </div>
        </nav>
    )
}

export default NavBar;
