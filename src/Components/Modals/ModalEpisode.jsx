import React from 'react';
import PropTypes from 'prop-types';
// Modal
import Modal from 'react-modal';

Modal.setAppElement('#root')

const ModalEpisode = ({ data, onHide, show }) => {
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
                <div className="text-right">
                    <button className="btn btn-sm btn-danger col-1" onClick={onHide}>Close</button>
                </div>
                <div className="card-body">
                    <h1 className="card-title text-center">{data.name}</h1>
                    <ul>
                        <li><p className="card-text">{`Release Date: ${data.air_date}`}</p></li>
                        <li><p className="card-text">{`Episode: ${data.episode}`}</p></li>
                    </ul>
                    <h3 className="text-center">Characters</h3>
                    <div className="card-deck">
                        {data.characters.map(e => (
                            <div className="card" key={e.name}>
                                <img className="card-img-top" src={e.image} alt={e.name} />
                                <div className="card-body text-dark">
                                    <h5 className="card-title text-center">{e.name}</h5>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


        </Modal>
    )
}

ModalEpisode.propTypes = {
    onHide: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    data: PropTypes.shape({
        air_date: PropTypes.string,
        name: PropTypes.string.isRequired,
        episode: PropTypes.string.isRequired,
        characters: PropTypes.array.isRequired
    })
}

export default ModalEpisode; 