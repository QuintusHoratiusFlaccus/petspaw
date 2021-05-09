import ParamsSelect from
    './../../../../DefaultComponents/DefaultSelect/DefaultSelect.jsx'
import ParamsButton from
    './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx'
import withContentHead from '../../../../HOC/withContentHead'
import AbtUpGraySVG from
    './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtUpGray.svg'
import AbtDownGraySVG from
    './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtDownGray.svg'
import AbtUpPinkSVG from
    './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtUpPink.svg'
import AbtDownPinkSVG from
    './../../../../../Dist/Content/RightPanel/Breeds/ContentHeadAdd/abtDownPink.svg'
import s from './SearchParams.module.css'

const SearchParams = ({ selectBreeds, queryParams, orderChange, handleChange }) => {
    return (
        <div className={s.wrapper}>
            <ParamsSelect
                breeds
                placeholder="All breeds"
                id="breed"
                value={queryParams.breed}
                onChange={handleChange}
                base={selectBreeds}
            >
                <option
                    value="0"
                    id="0item"
                >
                    All breeds
                </option>
            </ParamsSelect>
            <ParamsSelect
                width="25%"
                breeds
                id="limit"
                value={queryParams.limit}
                onChange={handleChange}
            >
                <option value="5">
                    5
                </option>
                <option value="10">
                    10
                </option>
                <option value="15">
                    15
                </option>
                <option value="20">
                    20
                </option>
            </ParamsSelect>
            <ParamsButton
                alphabet
                backgroundImage={AbtUpGraySVG}
                bgImageHover={AbtUpPinkSVG}
                id="order"
                value="ASC"
                onClick={orderChange}
            />
            <ParamsButton
                alphabet
                backgroundImage={AbtDownGraySVG}
                bgImageHover={AbtDownPinkSVG}
                id="order"
                value="DESC"
                onClick={orderChange}
            />
        </div>
    )
}

export default withContentHead(SearchParams)(true)
