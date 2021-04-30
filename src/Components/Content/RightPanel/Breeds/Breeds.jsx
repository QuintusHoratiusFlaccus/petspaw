import ContentHead from './../ContentHead/ContentHead.jsx';
import SearchParams from './ContentHeadAdd/SearchParams.jsx';

import Wrapper from './../Wrappers/Wrapper.jsx';
import { GaleryLayout } from './../Wrappers/GaleryLayout.js';

const Breeds = ({}) => {
  return (
    <Wrapper>
      <ContentHead>
        <SearchParams/>
      </ContentHead>
      <GaleryLayout>
        <div className="one"></div>
      </GaleryLayout>
      <GaleryLayout>
        <div className="one"></div>
      </GaleryLayout>

    </Wrapper>
  )
}

export default Breeds;
