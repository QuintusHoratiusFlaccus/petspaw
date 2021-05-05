import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { StyledModalWrapper } from './StyledModalWrapper'
import ModalTitle from './Title/ModalTitle'
import CloseButton from '../../../DefaultComponents/DefaultButton/DefaultButton'

import ClosePink from '../../../../Dist/Content/RightPanel/Modal/CloseButton/closePink.svg'
import CloseWhite from '../../../../Dist/Content/RightPanel/Modal/CloseButton/closeWhite.svg'
import DragNDrop from './DragNDrop/DragNDrop'
import UploadButton from './UploadButton/UploadButton'
import Alert from './Alert/Alert'
import { api } from '../../../../Services/Api'
import { modalAction } from '../../../../Redux/Actions/modalAction'

const Modal = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state.modalState)
    const [loadedImg, setLoadedImg] = useState({
        imgFile: null,
        imgName: null,
        imgUrl: null,
    })
    const [reqState, setReqState] = useState('disabled')
    const [resStatus, setResStatus] = useState()

    const handleClose = () => {
        dispatch(modalAction(false))
        setLoadedImg({
            imgFile: null,
            imgName: null,
            imgUrl: null,
        })
        setReqState('disabled')
        setResStatus(null)
    }

    const handleChange = (e) => {
        e.preventDefault()
        e.stopPropagation()
        const files = e.target.files
        if (files.length) {
            previewFile(files[0])
        } else {
            setLoadedImg(null)
            setReqState('disabled')
        }
    }

    const previewFile = (file) => {
        setReqState('enabled')
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onloadend = function() {
            setLoadedImg({
                imgFile: file,
                imgName: file.name,
                imgUrl: reader.result,
            })
        }
    }

    const uploadFile = async () => {
        setReqState('uploading')
        const formData = new FormData()
        formData.append('file', loadedImg.imgFile)

        try {
            if(loadedImg) {
                const resp = await api.images.postImage(formData)
                console.log(resp.status)
                if (resp.status === 200) setResStatus('success')
            }
        } catch(error) {
            if (error.response.status === 400) setResStatus('error')
        }
        setReqState('disabled')
    }

    return (
        selector ?
            <StyledModalWrapper>
                <div className="modal_window">
                    <CloseButton
                        modalBtn
                        backgroundImage={ClosePink}
                        bgImageHover={CloseWhite}
                        onClick={handleClose}
                    />
                    <ModalTitle/>
                    <DragNDrop
                        handleChange={handleChange}
                        loadedImg={loadedImg?.imgUrl}
                        resStatus={resStatus}
                    />
                    <span
                        className="modal_indicator"
                    >
                        {
                            !loadedImg?.imgName ?
                                'No file selected'
                                :
                                `Image File Name: ${loadedImg.imgName}`
                        }
                    </span>
                    {reqState !== 'disabled' ?
                        <UploadButton
                            btnState={reqState}
                            handleClick={uploadFile}
                        />
                        : null
                    }

                    {resStatus ?
                        <Alert
                            type={resStatus}
                        />
                        : null
                    }

                </div>
            </StyledModalWrapper>
            : null
    )
}

export default Modal
