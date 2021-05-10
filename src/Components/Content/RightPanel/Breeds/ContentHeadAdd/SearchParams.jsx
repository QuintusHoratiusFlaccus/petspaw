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
import DefaultSelect from './../../../../DefaultComponents/DefaultSelect/DefaultSelect.jsx'
import DefaultSelectOption from '../../../../DefaultComponents/DefaultSelect/DefaultSelectOption'

const SearchParams = ({ selectBreeds, queryParams, orderChange, handleChange }) => {

    const breedsNames = selectBreeds.map((el) => (
        <DefaultSelectOption
            key={`${el.id}_key`}
            id="breed"
            value={el.id}
            textValue={el.name}
        />
    ))

    return (
        <div className={s.wrapper}>
            <DefaultSelect
                breeds
                initialValue="All breeds"
                handleChange={handleChange}
                id="breed"
            >
                <DefaultSelectOption
                    id="breed"
                    textValue="All breeds"
                    value="0"
                />
                {breedsNames}
            </DefaultSelect>
            <DefaultSelect
                breeds
                width="25%"
                initialValue={`Limit: ${queryParams.limit}`}
                handleChange={handleChange}
                id="limit"
            >
                <DefaultSelectOption
                    id="limit"
                    textValue="Limit: 5"
                    value="5"
                />
                <DefaultSelectOption
                    id="limit"
                    textValue="Limit: 10"
                    value="10"
                />
                <DefaultSelectOption
                    id="limit"
                    textValue="Limit: 15"
                    value="15"
                />
                <DefaultSelectOption
                    id="limit"
                    textValue="Limit: 20"
                    value="20"
                />
            </DefaultSelect>
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
