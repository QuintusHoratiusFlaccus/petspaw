import { StyledWrapper } from './../StyledWrapper.js';
import SecondNav from './../SecondNav/SecondNav.jsx';
import ContentHead from './../ContentHead/ContentHead.jsx';
import SearchParams from './ContentHeadAdd/SearchParams.jsx';

const Breeds = ({}) => {
  return (
    <StyledWrapper>
      <SecondNav/>
      <ContentHead>
        <SearchParams/>
      </ContentHead>
    </StyledWrapper>
  )
}

export default Breeds;
