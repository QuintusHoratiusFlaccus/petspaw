import { useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import axios from 'axios'
import {
    BreedsWithPanel,
    GalleryWithPanel,
    VotingWithPanel,
    FavouritesWithPanel,
    SelectedWithPanel,
    SearchWithPanel,
    VoteWithPanel,
} from './Components/Content/RightPanel/main'
import LeftPanel from './Components/Content/LeftPanel/LeftPanel.jsx'
import Home from './Components/Content/RightPanel/Home/Home.jsx'
import Modal from './Components/Content/RightPanel/Modal/Modal'

import { StyledApp } from './StyledApp.js'
import { apiKey } from './Services/Api'
import { getAllFavourites } from './Redux/Actions/getAllFavourites'

function App() {
    const dispatch = useDispatch()
    const selector = useSelector(state => state.theme)

    useLayoutEffect(() => {
        axios.defaults.headers.common['x-api-key'] = apiKey
        dispatch(getAllFavourites())
    }, [])

    return (
        <ThemeProvider theme={selector}>
            <StyledApp>
                <LeftPanel/>
                <Modal/>

                <Switch>
                    <Route exact path="/">
                        <Home/>
                    </Route>
                    <Route exact path="/voting">
                        <VotingWithPanel/>
                    </Route>
                    <Route exact path="/breeds">
                        <BreedsWithPanel/>
                    </Route>
                    <Route exact path="/gallery">
                        <GalleryWithPanel/>
                    </Route>
                    <Route exact path="/breeds/selected">
                        <SelectedWithPanel/>
                    </Route>
                    <Route exact path="/search">
                        <SearchWithPanel/>
                    </Route>
                    <Route exact path="/favourites">
                        <FavouritesWithPanel/>
                    </Route>
                    <Route exact path="/likes">
                        <VoteWithPanel
                            type="like"
                        />
                    </Route>
                    <Route exact path="/dislikes">
                        <VoteWithPanel
                            type="dislike"
                        />
                    </Route>
                </Switch>
            </StyledApp>
        </ThemeProvider>
    )
}

export default App
