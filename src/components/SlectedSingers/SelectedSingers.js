import React from 'react';
import './SelectedSingers.css'

const SelectedSingers = (props) => {
    const { selecteds } = props;

    let selectedTotalRate = 0;
    let selectedQuantity = 0;

    for (const selected of selecteds) {
        selectedQuantity = selectedQuantity + 1;
        selectedTotalRate = selectedTotalRate + selected.rate;
    }

    return (
        <div className="SelectedSingers-container">
            <h5>Selected Singers: {selectedQuantity}</h5>
            <h5>Total Amount: {selectedTotalRate} BDT</h5>
            <hr />
            <div className="selected-singer">
                <ul>
                    <li><img src={selecteds.map(selected => selected.img)} alt="" />
                        <h4>{selecteds.map(selected => selected.name)}</h4></li>
                </ul>
            </div>

        </div>
    );
};

export default SelectedSingers;