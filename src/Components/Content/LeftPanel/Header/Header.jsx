import { ReactComponent as DoggyFootprintSVG }
    from './../../../../Dist/Content/LeftPanel/Header/Logo.svg'
import s from './Header.module.css'
import { useDarkTheme } from './useDarkTheme.js'
import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher.jsx'

const Header = () => {
    const [cboxState, setCboxState, componentMounted] = useDarkTheme()

    if (!componentMounted) {
        return false
    }

    const handleClick = (state) => {
        setCboxState(state)
    }

    return (
        <header className={s.header}>
            <DoggyFootprintSVG/>
            <h1 className={s.header_title}>PetsPaw</h1>
            <ThemeSwitcher cboxState={cboxState} handleClick={handleClick}/>
        </header>
    )
}

export default Header
