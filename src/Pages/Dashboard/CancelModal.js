import React from 'react';

const CancelModal = ({ orderData, handleCancel }) => {
    // console.log(orderData)
    return (
        <div>
            <input type="checkbox" id="cancel-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure ?</h3>
                    <div class="modal-action">
                        <label onClick={() => handleCancel(orderData)} for="cancel-modal"
                            class="btn btn-success">Yes</label>
                        <label for="cancel-modal" class="btn btn-error">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelModal;