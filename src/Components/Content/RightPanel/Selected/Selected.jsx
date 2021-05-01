import ContentHead from './../ContentHead/ContentHead.jsx';
import IdIndicator from './ContentHeadAdd/IdIndicator.jsx';
import Slider from './Slider/Slider.jsx';

import Wrapper from './../Wrappers/Wrapper.jsx';
import { GaleryLayout } from './../Wrappers/GaleryLayout.js';

const Breeds = ({}) => {
  return (
    <Wrapper>
      <ContentHead
        left
      >
        <IdIndicator/>
      </ContentHead>

      <Slider/>
    </Wrapper>
  )
}

export default Breeds;
