import UploadButton from './ContentHeadAdd/UploadButton.jsx'
import SearchParams from './SearchParams/SearchParams.jsx'

import { useDispatch } from 'react-redux'
import { modalAction } from '../../../../Redux/Actions/modalAction'
import { useEffect, useState } from 'react'
import { api } from '../../../../Services/Api'
import { createStructuredArr } from '../../../../Functions/Content/RightPanel/createStructuredArr'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import HeartCard from '../CardTypes/WithHeart/HeartCard'

const Gallery = () => {
    const dispatch = useDispatch()
    const [queryParams, setQueryParams] = useState({
        breed: 0,
        limit: 5,
        order: 'RANDOM',
        mime_types: 'jpg,png'
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
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        //changing of state names can remove data restructurings #mustupdate
        let data = {
            limit: queryParams.limit,
            order: queryParams.order,
            mime_types: queryParams.mime_types,
        }

        if(queryParams.breed) {
            data = {
                ...data,
                breed_id: queryParams.breed,
            }
        }

        const apiReq = async (data) => {
            const resp = await api.images.getDogsByParams(data)
            setBreedsData(createStructuredArr(resp.data))
        }

        apiReq(data)
    }

    const openModal = () => {
        dispatch(modalAction(true))
    }

    return (
        <>
            <UploadButton
                onClick={openModal}
            />
            <SearchParams
                queryParams={queryParams}
                selectBreeds={selectBreeds}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
            {createGalleryList(breedsData, HeartCard)}
        </>
    )
}

export default Gallery
