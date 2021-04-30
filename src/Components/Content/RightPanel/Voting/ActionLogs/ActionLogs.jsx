import UserAction from './UserAction/UserAction.jsx'

import s from './ActionLogs.module.css'

const ActionLogs = () => {

  //map actions

  return (
    <section className={s.logsWrapper}>
      <UserAction></UserAction>
      <UserAction></UserAction>
      <UserAction></UserAction>
      <UserAction></UserAction>
    </section>
  )
}

export default ActionLogs;
