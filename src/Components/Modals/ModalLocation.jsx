import React from 'react';
import PropTypes from 'prop-types';
import './Modal.css';
// Modal
import Modal from 'react-modal';

Modal.setAppElement('#root')

const ModalLocation = ({ data, onHide, show }) => {
    return (
        <Modal isOpen={show}
            style={{
                overlay: {
                    backgroundColor: 'grey'
                },
                content: {
                    backgroundColor: '#4B515D',
                    position: 'absolute'

                }
            }}>
            <div className="card mb-3 text-white bg-secondary">
                <div className="text-right  pb-1">
                    <button className="btn btn-sm btn-danger" onClick={onHide}><i class="fa fa-times"></i></button>
                </div>
                <div className="card-body">
                    <h1 className="card-title text-center">{data.name}</h1>
                    <ul>
                        <li><p className="card-text">{`Dimension: ${data.dimension}`}</p></li>
                        <li><p className="card-text">{`Type: ${data.type}`}</p></li>
                    </ul>
                    <h5 className="text-center">Residents</h5>
                    {
                        data.residents[0].id != null ?
                            <div className="card-deck">
                                {
                                    data.residents.map(e => (
                                        <div className="card" key={e.name} style={{ maxWidth: '14rem' }}>
                                            <img className="card-img-top" src={e.image} alt={e.name} />
                                            <div className="card-body text-dark">
                                                <h5 className="card-title text-center">{e.name}</h5>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                            : <h6 className="text-center pt-2">No residents in this location.</h6>
                    }

                </div>
            </div>


        </Modal >
    )
}

ModalLocation.propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        dimension: PropTypes.string,
        name: PropTypes.string.isRequired,
        type: PropTypes.string,
        residents: PropTypes.array.isRequired
    })
}
export default ModalLocation; 