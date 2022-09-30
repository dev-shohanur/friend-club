import React from 'react';
import logo from '../../unnamed.png';
import './TopNav.css';

const TopNave = () => {
    return (
        <div className='nav-container'>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
            </nav>
        </div>
    );
};

export default TopNave;