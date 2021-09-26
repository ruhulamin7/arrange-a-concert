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


            <div >
                {selecteds.map(selected =>


                    <div className="selected-singer">

                        <img src={selected.img} alt="" />
                        <h5>{selected.name}</h5>
                    </div>

                )
                }

            </div>


            {/* <div>
                    {
                        selecteds.map(selected => <img src={selected.img} alt="">
                        </img>)
                    }
                    {selecteds.map(selected => <li>{selected.name}</li>)}
                </div> */}

        </div>
    );
};

export default SelectedSingers;