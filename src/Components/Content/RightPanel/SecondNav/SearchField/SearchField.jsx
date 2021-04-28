import {StyledInput} from './StyledInput.js';
import SearchButton from
'./../../../../DefaultComponents/DefaultButton/DefaultButton.jsx';
import LoupeSVG from
  './../../../../../Dist/Content/RightPanel/SecondNav/loupe.svg';
import LoupeWhiteSVG from
  './../../../../../Dist/Content/RightPanel/SecondNav/loupeWhite.svg';
import s from './SearchField.module.css';

const SearchField = (props) => {
  return (
      <div className={s.search__wrapper}>
        <StyledInput
          type="text"
          placeholder="Search for breeds by name"
        />

        <SearchButton
          backgroundImage={LoupeSVG}
          bgImageHover={LoupeWhiteSVG}
          position="absolute"
          search
        />
      </div>
  )
}

export default SearchField;
