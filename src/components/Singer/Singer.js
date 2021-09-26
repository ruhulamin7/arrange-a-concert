import React from 'react';
import './Singer.css'

const Singer = (props) => {
    const { name, about, song, born, rate, img } = props.singer
    return (
        <div >
            <div className="singer">
                <div className="card" >
                    <div className="card-img-container">
                        <img src={img} className="card-img-top card-img" alt="..." />
                    </div>
                    <div className="card-body about">
                        <h5 className="card-title">{name}</h5>
                        <p className="card-text"> {about}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item"><strong>Born:</strong> {born}</li>
                        <li className="list-group-item"><strong>Popular Song:</strong> {song}</li>
                        <li className="list-group-item"><strong>Hire Rate:</strong> {rate}</li>
                    </ul>
                    <div className="card-body card-btn-area">
                        <button className="hire-btn" onClick={() => props.handleSelectSinger(props.singer)}><i className="fas fa-music"></i> Hire me</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Singer;