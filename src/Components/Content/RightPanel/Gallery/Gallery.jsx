import UploadButton from './ContentHeadAdd/UploadButton.jsx'
import SearchParams from './SearchParams/SearchParams.jsx'

import Wrapper from './../Wrappers/Wrapper.jsx'
import { GaleryLayout } from './../Wrappers/GaleryLayout.js'


const Gallery = () => {
    return (
        <Wrapper>
            <UploadButton/>
            <SearchParams/>
        </Wrapper>
    )
}

export default Gallery
