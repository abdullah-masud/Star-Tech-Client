import React from 'react';

const DeleteModal = ({ productData, handleCancel }) => {

    return (
        <div>
            <input type="checkbox" id="delete-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure ?</h3>
                    <div class="modal-action">
                        <label onClick={() => handleCancel(productData)} for="delete-modal"
                            class="btn btn-success">Yes</label>
                        <label for="delete-modal" class="btn btn-error">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal;