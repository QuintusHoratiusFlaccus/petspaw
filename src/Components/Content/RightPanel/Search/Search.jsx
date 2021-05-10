import React, { useEffect, useState } from 'react'
import ContentHead from '../ContentHead/ContentHead'
import { useLocation } from 'react-router-dom'
import { api } from '../../../../Services/Api'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import { StyledSpan } from './StyledSpan'
import BreedCard from '../CardTypes/WithBreed/BreedCard'
import withPreloader from '../../../HOC/withPreloader'

const Search = ({ setLoading }) => {
    const searchQuery = useLocation().search.split('=')[1]
    const [dogsArr, setDogsArr] = useState([])

    //req dont provide img url prop
    //i may send req to api just 4 getting imgs, but its would be annoying to server: 1 req to get 1 img_url
    //It's be relevant? | i think that api dont give interface to getting package of current images
    useEffect(() => {
        const data = {
            q: searchQuery,
        }

        const apiReq = async () => {
            const resp = await api.breeds.getCurrentBreed(data)

            setDogsArr(resp.data)
            setLoading(false)
        }

        apiReq()
    }, [searchQuery])

    return (
        <>
            <ContentHead/>
            <StyledSpan>
                Search result for: <span>{searchQuery}</span>
            </StyledSpan>
            {createGalleryList(dogsArr, BreedCard)}
        </>
    )
}

export default withPreloader(Search)
