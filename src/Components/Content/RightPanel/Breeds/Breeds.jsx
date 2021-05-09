import SearchParams from './ContentHeadAdd/SearchParams.jsx'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { api } from '../../../../Services/Api'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import { createStructuredArr } from '../../../../Functions/Content/RightPanel/createStructuredArr'
import BreedCard from '../CardTypes/WithBreed/BreedCard'

const Breeds = () => {
    //code used twice, #mustupdate
    //believable issue may be somes like factory
    const history = useHistory()
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
            [e.target.id]: e.target.value
        })
    }

    useEffect(() => {
        //Wheel. Have no time. #mustupdate
        if (queryParams.breed === 0) {
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
            }

            apiReq(data)
        }
    }, [queryParams.breed, queryParams.limit])

    useEffect(() => {
        if (queryParams.order) {
            setBreedsData(breedsData.reverse())
        }
    }, [queryParams.order])

    //allbreeds request have no "order" property
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

export default Breeds
