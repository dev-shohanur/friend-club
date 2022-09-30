import React, { useEffect, useState } from 'react';
import './Break_btn.css'

const Break_btn = (props) => {
    const [btnValues, setBtnValues] = useState([]);
    useEffect(() => {
        fetch('btndb.json')
            .then(res => res.json())
            .then(data => setBtnValues(data))
    }, []);
    return (
        <div>
            <h5 className='mt-4'>Add A Break</h5>
            <div className="user-more-info mt-4 row d-flex justify-content-around">
            {
                btnValues.map(btnValue => 
                    <button onClick={() => props.handelrAddToBreakTime(btnValue.time)} className='btn rounded-circle break-btn col-md-4 ms-1 d-flex align-items-center'><span id='btn-value'>{btnValue.time}</span>s</button>
                        
                        )
                    }
                    </div>
            
        </div>
    );
};

export default Break_btn;