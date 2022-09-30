import React from 'react';
import logo from '../../unnamed.png';
import './TopNav.css';

const TopNave = () => {
    return (
        <div className='nav-container'>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                    <h2 className='text-primary'>Our Friends Club</h2>
                </div>
            </nav>
        </div>
    );
};

export default TopNave;