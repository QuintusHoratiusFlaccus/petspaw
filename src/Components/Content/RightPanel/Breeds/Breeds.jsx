import SecondNav from './../SecondNav/SecondNav.jsx';
import ContentHead from './../ContentHead/ContentHead.jsx';
import SearchParams from './ContentHeadAdd/SearchParams.jsx';

import { ContentWrapper } from './../Wrappers/ContentWrapper.js';
import { GlobalWrapper } from './../Wrappers/GlobalWrapper.js';

const Breeds = ({}) => {
  return (
    <GlobalWrapper>
      <SecondNav/>
      <ContentWrapper>
        <ContentHead>
          <SearchParams/>
        </ContentHead>
      </ContentWrapper>
    </GlobalWrapper>
  )
}

export default Breeds;
