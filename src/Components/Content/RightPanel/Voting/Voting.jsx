import React from 'react'
import { useDispatch } from 'react-redux'
import { useDogState } from './Functions/useDogState.js'
import { voteEvent } from './Functions/voteEvent.js'
import { api } from './../../../../Services/Api.js'
import ContentHead from './../ContentHead/ContentHead.jsx'
import LawCourt from './LawCourt/LawCourt.jsx'
import ActionLogs from './ActionLogs/ActionLogs.jsx'

const Voting = () => {
    const dispatch = useDispatch()

    const [suspect, getRandomDog,
        isFav, favClick,
        componentMounted] = useDogState()

    const withGetRandomDog = (fn) => (e) => {
        fn(e)
        getRandomDog()
    }

    if (!componentMounted) {
        return <></>
    }

    return (
        <>
            <ContentHead/>
            <LawCourt
                image={suspect?.url}
                voteEvent={withGetRandomDog(voteEvent(suspect?.id, dispatch))}
                isFav={isFav}
                favClick={favClick}
            />

            <ActionLogs></ActionLogs>
        </>
    )
}

export default Voting
