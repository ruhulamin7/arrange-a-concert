import React, { useEffect, useState } from 'react';
import './Singer.css'

const Singer = () => {
    const [singers, setSingers] = useState([])

    useEffect(() => {
        fetch('./singers.JSON')
            .then(res => res.json())
            .then(data => console.log(data))
    }, []);

    return (
        <div>
            <div>
                <img src={singers[0].img} alt="" />
                <h3>name: {singers[0].name}</h3>
            </div>
        </div>
    );
};

export default Singer;