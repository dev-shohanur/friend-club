import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Item from '../Item/Item';

const Activets = (props) => {
    const [ activets, setActivets ] = useState([0])
    useEffect(() => {
        fetch('mydb.json')
            .then(res => res.json())
            .then(data => setActivets(data))
    }, [])
    const {id,name,age,time,img} = activets;
    return (
        <div>
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {
                    activets.map(activet => <Item
                        id={id}
                        activet={activet}
                        handlerAddToTime={props.handlerAddToTime}
                    ></Item>)
                }
            </div>
        </div>
    );
};

export default Activets;