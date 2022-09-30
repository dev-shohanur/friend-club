import React from 'react';
import './UserInfo.css';
import userImg from '../../user.jpeg';

const UserInfo = () => {
    return (
        <div className='user-container'>
            <div className="user-info">
                <img src={userImg} alt="" />
                <div className="text">
                    <h5>MD Shohanur</h5>
                    <p>Natore,Bangladesh</p>
                </div>
            </div>
            <div className="user-more-info mt-4  row d-flex justify-content-around">
                <h5 className='ms-2 col-md-3 col-sm-2 col-6'>75<small>kg</small><br />
                    <span>Weight</span></h5>
                <h5 className='ms-2 col-md-3 col-sm-2 col-6'>6.3 <br />
                    <span>Height</span></h5>
                <h5 className='ms-2 col-md-3 col-sm-2 col-6'>17<small>yrs</small> <br />
                    <span>Age</span></h5>
            </div>
        </div>
    );
};

export default UserInfo;