import {StyledInput} from './StyledInput.js';
import s from './SearchField.module.css';

const SearchField = (props) => {
  return (
      <div className={s.search__wrapper}>
        <StyledInput
          type="text"
          placeholder="Search for breeds by name"
        />
        <input className={s.search_button} type="button"/>
      </div>
  )
}

export default SearchField;
