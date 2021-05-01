import s from './ThemeSwitcher.module.css'


const ThemeSwitcher = ({ cboxState, handleClick }) => {
    return (
        <div className={s.switch}>
            <input
                className={s.switch_checkbox}
                type="checkbox"
                checked={cboxState}
                onChange={e => handleClick(e.target.checked)}
                id="switch"
            />
            <label htmlFor="switch"></label>
            <div className={s.switch_indicator}/>
        </div>
    )
}

export default ThemeSwitcher
