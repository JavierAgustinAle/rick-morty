import React, { useState } from 'react';
// Modal
import CharModal from '../ModalChar/ModalChar';


const CharCard = ({ data }) => {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }
    return (
        <>
            <div className="mt-2 mb-2 col-lg-3 col-md-4 col-sm-6">
                <div className="card text-white bg-secondary h-100" style={{ width: '18rem' }}>
                    <div className="embed-responsive embed-responsive-1by1">
                        <button onClick={handleShow}>
                            <img className="card-img-top embed-responsive-item" src={data.image} alt={data.id} />
                        </button>
                    </div>
                    <div className="card-body">
                        <h4 className="card-title text-center">{data.name}</h4>
                    </div>
                </div>
            </div>
            {
                show ?
                    <CharModal
                        show={show}
                        onHide={handleClose}
                        data={data} />
                    : ''
            }
        </>
    )
}

export default CharCard;



