import ParamsButton from
    './../../../../DefaultComponents/DefaultButton/DefaultButton.jsx'
import ParamsSelect from './ParamsSpecifySelect/ParamsSelect.jsx'
import ReloadPinkSVG from
    './../../../../../Dist/Content/RightPanel/Gallery/reloadPink.svg'
import ReloadWhiteSVG from
    './../../../../../Dist/Content/RightPanel/Gallery/reloadWhite.svg'
import { StyledWrapper } from './StyledWrapper.js'
import DefaultSelectOption from '../../../../DefaultComponents/DefaultSelect/DefaultSelectOption'

const SearchParams = ({ handleSubmit, handleChange, selectBreeds, queryParams }) => {

    const breedsNames = selectBreeds.map((el) => (
        <DefaultSelectOption
            key={`${el.id}_key`}
            id="breed"
            value={el.id}
            textValue={el.name}
        />
    ))

    return (
        <StyledWrapper
            onSubmit={handleSubmit}
        >
            <div>
                <ParamsSelect
                    title="ORDER"
                    gallery
                    width="50%"
                    initialValue="Random"
                    handleChange={handleChange}
                    id="order"
                >
                    <DefaultSelectOption
                        id="order"
                        value="Random"
                        textValue="Random"
                    />
                    <DefaultSelectOption
                        id="order"
                        value="Desc"
                        textValue="Desc"
                    />
                    <DefaultSelectOption
                        id="order"
                        value="Asc"
                        textValue="Asc"
                    />
                </ParamsSelect>
                <ParamsSelect
                    initialValue="Static"
                    handleChange={handleChange}
                    gallery
                    title="TYPE"
                    width="50%"
                    id="mime_types"
                >
                    <DefaultSelectOption
                        id="mime_types"
                        value="gif,jpg,png"
                        textValue="All"
                    />
                    <DefaultSelectOption
                        id="mime_types"
                        value="jpg,png"
                        textValue="Static"
                    />
                    <DefaultSelectOption
                        id="mime_types"
                        value="gif"
                        textValue="Animated"
                    />
                </ParamsSelect>
            </div>
            <div>
                <ParamsSelect
                    initialValue="None"
                    handleChange={handleChange}
                    gallery
                    title="BREED"
                    width="50%"
                    id="breed"
                >
                    <DefaultSelectOption
                        id="breed"
                        value="0"
                        textValue="None"
                    />
                    {breedsNames}
                    {/*  #mustupdate to saga  */}
                </ParamsSelect>
                <div className="form_part">
                    <ParamsSelect
                        gallery
                        width="100%"
                        initialValue={`Limit: ${queryParams.limit}`}
                        handleChange={handleChange}
                        id="limit"
                        title="LIMIT"
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
                    </ParamsSelect>
                    <ParamsButton
                        white
                        type="submit"
                        backgroundImage={ReloadPinkSVG}
                        bgImageHover={ReloadWhiteSVG}
                    />
                </div>

            </div>
        </StyledWrapper>
    )
}


export default SearchParams
