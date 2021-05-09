import React, { useEffect, useState } from 'react'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import ContentHead from '../ContentHead/ContentHead'
import { api } from '../../../../Services/Api'
import HeartCard from '../CardTypes/WithHeart/HeartCard'

const Likes = () => {
    const [dogsArr, setDogsArr] = useState([])

    useEffect(() => {
        const apiReq = async () => {
            const resp = await api.votes.getVotes()
            setDogsArr(resp.data.filter(el => el.value == 1))
        }
        apiReq()
    }, [])

    return (
        <>
            <ContentHead/>
            {createGalleryList(dogsArr, HeartCard)}
        </>
    )
}

export default Likes
