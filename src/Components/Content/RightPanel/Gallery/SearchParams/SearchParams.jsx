import ParamsButton from
    './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx'
import ParamsSelect from './ParamsSpecifySelect/ParamsSelect.jsx'

import ReloadPinkSVG from
    './../../../../../Dist/Content/RightPanel/Gallery/reloadPink.svg'
import ReloadWhiteSVG from
    './../../../../../Dist/Content/RightPanel/Gallery/reloadWhite.svg'
import { StyledWrapper } from './StyledWrapper.js'

const SearchParams = ({ handleSubmit, handleChange, selectBreeds, queryParams }) => {


    return (
        <StyledWrapper
            onSubmit={handleSubmit}
        >
            <div>
                <ParamsSelect
                    gallery
                    title="ORDER"
                    width="50%"
                    id="order"
                    value={queryParams.order}
                    onChange={handleChange}
                >
                    <option id="order" value="Random">Random</option>
                    <option id="order" value="Desc">Desc</option>
                    <option id="order" value="Asc">Asc</option>
                </ParamsSelect>
                <ParamsSelect
                    gallery
                    title="TYPE"
                    width="50%"
                    id="mime_types"
                    value={queryParams.mime_types}
                    onChange={handleChange}
                >
                    <option id="mime_types" value="gif,jpg,png">All</option>
                    <option id="mime_types" value="jpg,png">Static</option>
                    <option id="mime_types" value="gif">Animated</option>
                </ParamsSelect>
            </div>
            <div>
                <ParamsSelect
                    gallery
                    title="BREED"
                    width="50%"
                    id="breed"
                    value={queryParams.breed}
                    onChange={handleChange}
                    base={selectBreeds}
                >
                    <option
                        value="0"
                        id="0item"
                    >
                        None
                    </option>
                    {/*  update to saga  */}
                </ParamsSelect>
                <ParamsSelect
                    gallery
                    title="LIMIT"
                    id="limit"
                    value={queryParams.limit}
                    onChange={handleChange}
                >
                    <option id="limit" value="5">5 items per page</option>
                    <option id="limit" value="10">10 items per page</option>
                    <option id="limit" value="15">15 items per page</option>
                    <option id="limit" value="20">20 items per page</option>
                </ParamsSelect>
                <ParamsButton
                    white
                    type="submit"
                    backgroundImage={ReloadPinkSVG}
                    bgImageHover={ReloadWhiteSVG}
                />
            </div>
        </StyledWrapper>
    )
}


export default SearchParams
