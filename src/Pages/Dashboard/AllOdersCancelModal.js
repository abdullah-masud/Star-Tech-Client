import React from 'react';

const AllOdersCancelModal = ({ orderCancel, handleCancel }) => {
    return (
        <div>
            <input type="checkbox" id="all-cancel-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are You Sure ?</h3>
                    <div class="modal-action">
                        <label for="all-cancel-modal"
                            onClick={() => handleCancel(orderCancel)}
                            class="btn btn-success">Yes</label>
                        <label for="all-cancel-modal" class="btn btn-error">No</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllOdersCancelModal;