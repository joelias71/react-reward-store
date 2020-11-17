import React from 'react'
import ReactDOM from 'react-dom'
import CloseIcon from '@material-ui/icons/Close'
import { Button } from '@material-ui/core'
import ReactLoading from 'react-loading'

function Modal({ 
    open, 
    children, 
    onClose, 
    title,
    onLoad,
    approvalBtnTxt,
    submit
}) {

    if(!open) return null

    const isLoading = () => {
        if(onLoad) {
            return <ReactLoading type={'cubes'} color={'#232f3e'} height={80} width={80} />
        } else {
            return <>
                        <Button onClick={submit} >
                            {approvalBtnTxt? approvalBtnTxt : 'Approve'}
                        </Button>
                        <Button onClick={onClose} >
                            Cancel
                        </Button>
                    </>
        }
    }

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
                    { isLoading() }
                </div>
            </div>
        </>,
        document.getElementById('portal')
    )
}

export default Modal
