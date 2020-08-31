import React, { useState } from 'react';
import PropTypes from 'prop-types';
// Modal
import CharModal from '../Modals/ModalChar';


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
                <div className="card text-white bg-secondary h-100 mx-auto" style={{ width: '18rem' }}>
                    <div className="embed-responsive embed-responsive-1by1">
                        <button onClick={handleShow}>
                            <img className="card-img-top embed-responsive-item" src={data.image} alt={data.id}
                                title="Click for more info!"
                            />
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

CharCard.propTypes = {
    data: PropTypes.shape({
        image: PropTypes.string,
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
    })
}

export default CharCard;


