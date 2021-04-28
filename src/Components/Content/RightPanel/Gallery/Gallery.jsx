import { StyledWrapper } from './../StyledWrapper.js';
import SecondNav from './../SecondNav/SecondNav.jsx';
import UploadButton from './ContentHeadAdd/UploadButton.jsx';
import ContentHead from './../ContentHead/ContentHead.jsx';

const Gallery = ({}) => {
  return (
    <StyledWrapper>
      <SecondNav/>
      <ContentHead>
        <UploadButton/>
      </ContentHead>

    </StyledWrapper>
  )
}

export default Gallery;
