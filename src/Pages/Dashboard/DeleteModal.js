import React from 'react';

const DeleteModal = ({ productData, handleCancel }) => {

    return (
        <div>
            <input type="checkbox" id="delete-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure ?</h3>
                    <div className="modal-action">
                        <label onClick={() => handleCancel(productData)} htmlFor="delete-modal"
                            className="btn btn-success">Yes</label>
                        <label htmlFor="delete-modal" className="btn btn-error">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;