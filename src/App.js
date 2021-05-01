import { useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { BreedsWithPanel, GalleryWithPanel, VotingWithPanel } from './Components/Content/RightPanel/main'
import LeftPanel from './Components/Content/LeftPanel/LeftPanel.jsx'
import Home from
    './Components/Content/RightPanel/Home/Home.jsx'
import Selected from
    './Components/Content/RightPanel/Selected/Selected.jsx'
import { ReactComponent as GirlAndPetSVG } from
    './Dist/Content/RightPanel/Home/girl-and-pet.svg'

import { StyledApp } from './StyledApp.js'

function App() {
    const selector = useSelector(state => state.theme)

    return (
        <ThemeProvider theme={selector}>
            <StyledApp>
                <LeftPanel/>
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
