import React, { useEffect, useState } from 'react';
import Singer from '../Singer/Singer';
import './AllSingers.css'

const AllSingers = () => {

    const [singers, setSingers] = useState([])
    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => setSingers(data))
    }, [])
    return (
        <div className="singers-container">
            <div className="all-singers">
                {
                    singers.map(singer => <Singer singer={singer}></Singer>)
                }
            </div>

            <div className="selected-singers">
                <h1>Selected Singers</h1>
            </div>
        </div>
    );
};

export default AllSingers;