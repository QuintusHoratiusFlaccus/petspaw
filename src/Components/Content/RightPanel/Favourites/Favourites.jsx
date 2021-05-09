import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import ContentHead from '../ContentHead/ContentHead'
import HeartCard from '../CardTypes/WithHeart/HeartCard'

const Favourites = () => {
    const selector = useSelector(state => state.favouritesData.favouritesList)

    return (
        <>
            <ContentHead/>
            {createGalleryList(selector, HeartCard)}
        </>
    )
}

export default Favourites
