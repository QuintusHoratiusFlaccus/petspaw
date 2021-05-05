import { useLayoutEffect } from 'react'
import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'
import { BreedsWithPanel, GalleryWithPanel, VotingWithPanel } from './Components/Content/RightPanel/main'
import LeftPanel from './Components/Content/LeftPanel/LeftPanel.jsx'
import Home from './Components/Content/RightPanel/Home/Home.jsx'
import Selected from './Components/Content/RightPanel/Selected/Selected.jsx'
import Modal from './Components/Content/RightPanel/Modal/Modal'
import { ReactComponent as GirlAndPetSVG } from
    './Dist/Content/RightPanel/Home/girl-and-pet.svg'

import { StyledApp } from './StyledApp.js'
import { apiKey } from './Services/Api'

function App() {
    const selector = useSelector(state => state.theme)

    useLayoutEffect(() => {
        axios.defaults.headers.common['x-api-key'] = apiKey
    }, [])

    return (
        <ThemeProvider theme={selector}>
            <StyledApp>
                <LeftPanel/>
                <Modal/>

                <Switch>
                    <Route exact path="/">
                        <Home home/>
                    </Route>
                    <Route exact path="/voting">
                        <VotingWithPanel/>
                    </Route>
                    <Route exact path="/breeds">
                        <BreedsWithPanel/>
                    </Route>
                    <Route path="/gallery">
                        <GalleryWithPanel/>
                    </Route>
                    <Route path="/breeds/selected">
                        <Selected/>
                    </Route>
                    <Route path="/search">

                    </Route>
                    <Route path="/favourites">

                    </Route>
                    <Route path="/likes">

                    </Route>
                    <Route path="/dislikes">

                    </Route>
                </Switch>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App
