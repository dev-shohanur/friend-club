import React from 'react';
import './Exercise.css'

const Exercise = (props) => {
    let number;
    if (localStorage.getItem('breakTime')) {
        number = JSON.parse(localStorage.getItem('breakTime'));
    } else {
        number = 0;
    }
    return (
        <div>
            <h5>Exercise Details</h5>
            <div className="exercise">
                <div className="text-box mb-3">
                    <h5>Exercise time</h5>
                    <small>{props.totalTime}s</small>
                </div>
                <div className="text-box mb-3">
                    <h5>Exercise time</h5>
                    <small>{number}s</small>
                </div>
            </div>
        </div>
    );
};

export default Exercise;