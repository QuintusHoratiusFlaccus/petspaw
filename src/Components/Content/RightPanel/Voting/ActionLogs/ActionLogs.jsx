import UserAction from '../../../../DefaultComponents/UserAction/UserAction.jsx'

import s from './ActionLogs.module.css'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const ActionLogs = () => {
    const [actionsState, setActionsState] = useState([])
    const selector = useSelector(state => state.votesReducer)

    useEffect(() => {
        if (actionsState.length >= 4) {
            setActionsState([
                ...actionsState.slice(1),
                selector
            ])
        } else {
            setActionsState([
                ...actionsState,
                selector
            ])
        }
    }, [selector])

    const actionsList = actionsState.map((el) =>
        <UserAction
            key={`${el.imgId}_${el.event}_${el.timeStamp}_key`}
            {...el}
        />
    )

    return (
        <section className={s.logsWrapper}>
            {actionsList}
        </section>
    )
}

export default ActionLogs
