import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <nav>
                <i className='fa-solid fa-leaf header-icon' />
                <span className='header-name'>Habit Teacker</span>
                 <span className='header-count'>
                0
               </span>
             
            </nav>
        );
    }
}

export default Header;