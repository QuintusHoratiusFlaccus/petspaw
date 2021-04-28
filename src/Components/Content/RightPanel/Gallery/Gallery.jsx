import SecondNav from './../SecondNav/SecondNav.jsx';
import UploadButton from './ContentHeadAdd/UploadButton.jsx';
import ContentHead from './../ContentHead/ContentHead.jsx';
import SearchParams from './SearchParams/SearchParams.jsx';

import { ContentWrapper } from './../Wrappers/ContentWrapper.js';
import { GlobalWrapper } from './../Wrappers/GlobalWrapper.js';

const Gallery = ({}) => {
  return (
    <GlobalWrapper>
      <SecondNav/>
      <ContentWrapper>
        <ContentHead>
          <UploadButton/>
        </ContentHead>
        <SearchParams/>
      </ContentWrapper>
    </GlobalWrapper>
  )
}

export default Gallery;
