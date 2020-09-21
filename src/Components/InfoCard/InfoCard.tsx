import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './InfoCard.css'
// Modal
import ModalLocation from '../Modals/ModalLocation';
import ModalEpisode from '../Modals/ModalEpisode';

const InfoCard = ({ data, title }) => {
    const [show, setShow] = useState(false);

    function handleClose() {
        setShow(false);
    }
    function handleShow() {
        setShow(true);
    }


    if (title === 'episodes') {
        return (
            <>
                <div className="mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto">
                    <div className="card text-white bg-secondary h-100 mx-auto" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-title text-center">{data.name}</h3><br></br>
                            <p>Episode: {data.episode}</p>
                        </div>
                        <div className="card-footer text-right">
                            <button className="btn btn-sm btn-info" onClick={handleShow}><i className="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                {
                    show && <ModalEpisode
                        show={show}
                        onHide={handleClose}
                        data={data} />

                }
            </>
        )
    }

    if (title === 'locations') {
        return (
            <>
                < div className="mt-2 mb-2 col-lg-4 col-md-5 col-sm-6 mx-auto" >
                    <div className="card text-white bg-secondary h-100 mx-auto" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-title text-center">{data.name}</h3>
                            {
                                data.dimension === 'unknown' ?
                                    <p>Dimension unknown</p>
                                    : <p>{data.dimension}</p>
                            }
                        </div>
                        <div className="card-footer text-right">
                            <button className="btn btn-sm btn-info" onClick={handleShow}><i className="fa fa-plus" aria-hidden="true"></i></button>
                        </div>
                    </div>
                </div>
                {
                    show && <ModalLocation
                        show={show}
                        onHide={handleClose}
                        data={data} />

                }
            </>
        )
    }
}

InfoCard.propTypes = {
    title: PropTypes.string.isRequired,
    data: PropTypes.shape({
        name: PropTypes.string.isRequired,
        episode: PropTypes.string,
        dimension: PropTypes.string
    })
}

export default InfoCard