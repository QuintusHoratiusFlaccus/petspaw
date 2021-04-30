import SecondNav from './../SecondNav/SecondNav.jsx';
import ContentHead from './../ContentHead/ContentHead.jsx';
import LawCourt from './LawCourt/LawCourt.jsx';

import { GlobalWrapper } from './../Wrappers/GlobalWrapper.js';
import { ContentWrapper } from './../Wrappers/ContentWrapper.js';

const Voting = () => {
  return (
    <GlobalWrapper>
      <SecondNav/>
      <ContentWrapper>
        <ContentHead/>

        <LawCourt/>
      </ContentWrapper>
    </GlobalWrapper>
  )
}

export default Voting;
