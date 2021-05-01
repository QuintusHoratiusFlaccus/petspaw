import React from 'react'
import { useDogState } from './Functions/useDogState.js'
import { voteEvent } from './Functions/voteEvent.js'
import { api } from './../../../../Services/Api.js'
import ContentHead from './../ContentHead/ContentHead.jsx'
import LawCourt from './LawCourt/LawCourt.jsx'
import ActionLogs from './ActionLogs/ActionLogs.jsx'

import Wrapper from './../Wrappers/Wrapper.jsx'


const Voting = () => {
    const [suspect, setSuspect, componentMounted] = useDogState({})

    if (!componentMounted) {
        return null
    }

    return (
        <Wrapper>
            <ContentHead/>

            <LawCourt
                image={suspect.url}
                id={suspect.id}
                voteEvent={voteEvent}
            />

            <ActionLogs></ActionLogs>
        </Wrapper>
    )
}

export default Voting
