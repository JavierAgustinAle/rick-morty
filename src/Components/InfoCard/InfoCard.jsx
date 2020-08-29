import React, { useState } from 'react';
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
                <div className="mt-2 mb-2 col-lg-3 col-md-4 col-sm-6">
                    <div className="card text-white bg-secondary h-100" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-title text-center">{data.name}</h3><br></br>
                            <p>{data.episode}</p>
                        </div>
                        <div className="card-footer text-right">
                            <button className="btn btn-sm btn-light " onClick={handleShow}>More Info</button>
                        </div>
                    </div>
                </div>
                {
                    show ?
                        <ModalEpisode
                            show={show}
                            onHide={handleClose}
                            data={data} />
                        : ''
                }
            </>
        )

    } else {
        return (
            <>
                < div className="mt-2 mb-2 col-lg-3 col-md-4 col-sm-6" >
                    <div className="card text-white bg-secondary h-100" style={{ width: '18rem' }}>
                        <div className="card-body">
                            <h3 className="card-title text-center">{data.name}</h3>
                            <p>{data.dimension}</p>
                        </div>
                        <div className="card-footer text-right">
                            <button className="btn btn-sm btn-light " onClick={handleShow}>More Info</button>
                        </div>
                    </div>
                </div>
                {
                    show ?
                        <ModalLocation
                            show={show}
                            onHide={handleClose}
                            data={data} />
                        : ''
                }
            </>
        )
    }
}

export default InfoCard