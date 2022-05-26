import React from 'react';

const AllOdersCancelModal = ({ orderCancel, handleCancel }) => {
    return (
        <div>
            <input type="checkbox" id="all-cancel-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are You Sure ?</h3>
                    <div className="modal-action">
                        <label htmlFor="all-cancel-modal"
                            onClick={() => handleCancel(orderCancel)}
                            className="btn btn-success">Yes</label>
                        <label htmlFor="all-cancel-modal" className="btn btn-error">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOdersCancelModal;