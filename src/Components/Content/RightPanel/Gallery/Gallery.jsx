import UploadButton from './ContentHeadAdd/UploadButton.jsx';
import ContentHead from './../ContentHead/ContentHead.jsx';
import SearchParams from './SearchParams/SearchParams.jsx';

import Wrapper from './../Wrappers/Wrapper.jsx';
import { GaleryLayout } from './../Wrappers/GaleryLayout.js';

const Gallery = () => {
  return (
    <Wrapper>
      <ContentHead>
        <UploadButton/>
      </ContentHead>
      <SearchParams/>


    </Wrapper>
  )
}

export default Gallery;
