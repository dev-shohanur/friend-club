import React, { useState } from 'react';
import Break_btn from '../Break_btn/Break_btn';
import Exercise from '../Exercise/Exercise';
import UserInfo from '../UserInfo/UserInfo';
import './Nav.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Nav = (props) => {
    const [breakTime, setBreakTime] = useState([]);
    const handelrAddToBreakTime = (props) => {
        localStorage.setItem('breakTime', props);
        setBreakTime(JSON.parse(localStorage.getItem('breakTime')));
    };
    const notify = () => toast("Wow Activity Completed! ");
    return (
        <div className='nav-bar'>
            <UserInfo></UserInfo>
            <Break_btn
                handelrAddToBreakTime={handelrAddToBreakTime}
            ></Break_btn>
            <Exercise
                totalTime={props.totalTime}
                breakTime={breakTime}
            ></Exercise>
            
            <button onClick={notify} className='btn btn-primary w-100'>Activity Completed</button>
            <ToastContainer />
            
        </div>
    );
};

export default Nav;