import ContentHead from './../ContentHead/ContentHead.jsx';
import IdIndicator from './ContentHeadAdd/IdIndicator.jsx';
import Slider from './Slider/Slider.jsx';
import Description from './Description/Description.jsx';

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

      <Description></Description>
    </Wrapper>
  )
}

export default Breeds;
