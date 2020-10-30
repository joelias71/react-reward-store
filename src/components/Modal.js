import React from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'

function Modal({ 
    open, 
    children, 
    onClose, 
    title,
    approvalBtnTxt 
}) {

    if(!open) return null

    return ReactDOM.createPortal(
        <>
            <div className='overlay' onClick={onClose} />
            <div className='modal'>
                <div className='modal__header'>
                    {title}
                    <CloseIcon onClick={onClose} />
                </div>
                <div className='modal__content'>
                    {children}
                </div>
                <div className='modal__btns'>
                    <Button>
                        {approvalBtnTxt? approvalBtnTxt : 'Approve'}
                    </Button>
                    <Button onClick={onClose} >
                        Cancel
                    </Button>
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
