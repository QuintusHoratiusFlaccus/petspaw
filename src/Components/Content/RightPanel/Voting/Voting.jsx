import React, { useEffect, useLayoutEffect } from 'react'
import { useDogState } from './Functions/useDogState.js'
import { voteEvent } from './Functions/voteEvent.js'
import { api } from './../../../../Services/Api.js'
import ContentHead from './../ContentHead/ContentHead.jsx'
import LawCourt from './LawCourt/LawCourt.jsx'
import ActionLogs from './ActionLogs/ActionLogs.jsx'

import Wrapper from './../Wrappers/Wrapper.jsx'
import { useFavouriteState } from './Functions/useFavouriteState'
import { useDispatch } from 'react-redux'
import { getAllFavourites } from '../../../../Redux/Actions/getAllFavourites'


const Voting = () => {
    const dispatch = useDispatch()
    const [suspect, getRandomDog, componentMounted] = useDogState()
    const [isFav, setFav, setId] = useFavouriteState()

    const withGetRandomDog = (fn) => (e) => {
        fn(e)
        getRandomDog()
    }

    if (!componentMounted) {
        return <></>
    }

    useEffect(() => {
        dispatch(getAllFavourites())

    }, [])

    return (
        <>
            <ContentHead/>
            <LawCourt
                image={suspect?.url}
                voteEvent={withGetRandomDog(voteEvent(suspect?.id))}
            />

            <ActionLogs></ActionLogs>
        </>
    )
}

export default Voting
