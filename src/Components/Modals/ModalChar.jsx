import React from 'react';
// Modal
import Modal from 'react-modal';

Modal.setAppElement('#root')
const ModalChar = ({ data, onHide, show }) => {
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
                <img className="rounded mx-auto d-block" src={data.image} alt={data.name} />
                <div className="card-body">
                    <h4 className="card-title text-center">{data.name}</h4>
                    <ul>
                        <li><p className="card-text">{`Gender: ${data.gender}`}</p></li>
                        <li><p className="card-text">{`Species: ${data.species}`}</p></li>
                        <li><p className="card-text">{`Type: ${data.type ? data.type : 'No data'}`}</p></li>
                    </ul>
                </div>
            </div>


        </Modal>
    );
};

export default ModalChar;