import UploadButton from './ContentHeadAdd/UploadButton.jsx'
import SearchParams from './SearchParams/SearchParams.jsx'

import { useDispatch } from 'react-redux'
import { modalAction } from '../../../../Redux/Actions/modalAction'


const Gallery = () => {
    const dispatch = useDispatch()

    const openModal = () => {
        dispatch(modalAction(true))
    }

    return (
        <>
            <UploadButton
                onClick={openModal}
            />
            <SearchParams/>
        </>
    )
}

export default Gallery
