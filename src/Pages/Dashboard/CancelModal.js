import React from 'react';

const CancelModal = ({ orderData, handleCancel }) => {
    // console.log(orderData)
    return (
        <div>
            <input type="checkbox" id="cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure ?</h3>
                    <div className="modal-action">
                        <label onClick={() => handleCancel(orderData)} htmlFor="cancel-modal"
                            className="btn btn-success">Yes</label>
                        <label htmlFor="cancel-modal" className="btn btn-error">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;