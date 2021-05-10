import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useDogState } from './Functions/useDogState.js'
import { voteEvent } from './Functions/voteEvent.js'
import { api } from './../../../../Services/Api.js'
import ContentHead from './../ContentHead/ContentHead.jsx'
import LawCourt from './LawCourt/LawCourt.jsx'
import ActionLogs from './ActionLogs/ActionLogs.jsx'
import withPreloader from '../../../HOC/withPreloader'

const Voting = (props) => {
    const { setLoading } = props
    const dispatch = useDispatch()
    const [suspect, getRandomDog,
        isFav, favClick] = useDogState()

    const withGetRandomDog = (fn) => (e) => {
        fn(e)
        getRandomDog()
    }

    useEffect(() => {
        const apiReq = async () => {
            await getRandomDog()
            setLoading(false)
        }
        apiReq()
    }, [])

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

export default withPreloader(Voting)
