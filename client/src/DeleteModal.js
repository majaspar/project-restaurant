import React from 'react'
import Modal from '@mui/material/Modal';

export default function DeleteModal({ del, itemToDelete = "item" }) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <i id="DeleteModal" className=' fa fa-trash m-1' onClick={handleOpen}></i>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">

                <div className="deleteModalWindow">
                    <div className="deleteModalBox">
                        <h3 className="mb2">Are you sure you want to delete <b>{itemToDelete}</b>?</h3>
                        <div className="DeleteModal__buttons flex"><button onClick={del}>Confirm</button>
                            <button onClick={handleClose}>Cancel</button></div>

                    </div>

                </div>

            </Modal>



        </>
    )
}
