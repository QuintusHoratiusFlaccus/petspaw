import SearchParams from './ContentHeadAdd/SearchParams.jsx'
import { useEffect, useState } from 'react'
import { api } from '../../../../Services/Api'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import { createStructuredArr } from '../../../../Functions/Content/RightPanel/createStructuredArr'
import BreedCard from '../CardTypes/WithBreed/BreedCard'
import withPreloader from '../../../HOC/withPreloader'

const Breeds = ({ setLoading }) => {
    //#mustupdate
    const [queryParams, setQueryParams] = useState({
        breed: 0,
        limit: 10,
        order: 'DESC',
    })
    const [breedsData, setBreedsData] = useState([])
    const [selectBreeds, setSelectBreeds] = useState([])

    const handleChange = (e) => {
        setQueryParams({
            ...queryParams,
            [e.target.id]: e.target.attributes.value.value
        })
    }

    useEffect(() => {
        //Wheel. Have no time. #mustupdate
        if (queryParams.breed == 0) {
            const arrFilter = (data) => {
                const onlyNames = data.map((el) => ({
                    name: el.name,
                    id: el.id
                }))
                setSelectBreeds(onlyNames)
            }

            const apiReq = async (setState) => {
                const resp = await api.breeds.getBreeds()
                setBreedsData(resp.data.slice(0, (queryParams.limit)))
                setState(resp.data)
                setLoading(false)
            }
            apiReq(arrFilter)
        } else {
            const data = {
                breed_id: queryParams.breed,
                limit: queryParams.limit,
            }
            const apiReq = async (data) => {
                const resp = await api.images.getDogsByParams(data)
                setBreedsData(createStructuredArr(resp.data))
                setLoading(false)
            }

            apiReq(data)
        }
    }, [queryParams.breed, queryParams.limit])

    useEffect(() => {
        if (queryParams.order) {
            setBreedsData(breedsData.reverse())
        }
    }, [queryParams.order])

    //getBreeds request have no "order" property. #mustupdate.
    //upload arr of breeds once at app starting and push this into redux
    const orderChange = (e) => {
        if (e.target.value !== queryParams.order) {
            handleChange(e)
        }
    }

    return (
        <>
            <SearchParams
                queryParams={queryParams}
                handleChange={handleChange}
                selectBreeds={selectBreeds}
                orderChange={orderChange}
            />

            {createGalleryList(breedsData, BreedCard)}

        </>
    )
}

export default withPreloader(Breeds)
