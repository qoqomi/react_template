import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <span className='header-name'>Habit Teacker</span>
                <span className='header-count'>0</span>
            </header>
        );
    }
}

export default Header;