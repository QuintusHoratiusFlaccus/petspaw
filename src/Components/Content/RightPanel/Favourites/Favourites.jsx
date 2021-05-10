import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { createGalleryList } from '../../../../Functions/Content/RightPanel/createGallaryList'
import ContentHead from '../ContentHead/ContentHead'
import HeartCard from '../CardTypes/WithHeart/HeartCard'
import UserAction from '../../../UserAction/UserAction'

const Favourites = () => {
    const selector = useSelector(state => state.favouritesData.favouritesList)
    const votesSelector = useSelector(state => state.votesReducer)
    const [actionsState, setActionsState] = useState([])

    useEffect(() => {
        //part of voting/actionLogs functionality #mustupdate
        if (actionsState.length >= 4) {
            setActionsState([
                ...actionsState.slice(1),
                votesSelector
            ])
        } else {
            setActionsState([
                ...actionsState,
                votesSelector
            ])
        }

    }, [votesSelector])

    const actionsList = actionsState.map((el) =>
        <UserAction
            key={`${el.imgId}_${el.event}_${el.timeStamp}_key`}
            {...el}
        />
    )

    return (
        <>
            <ContentHead/>
            {createGalleryList(selector, HeartCard)}
            <section>
                {actionsList}
            </section>
        </>
    )
}

export default Favourites
