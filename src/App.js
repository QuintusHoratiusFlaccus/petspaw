import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import LeftPanel from './Components/Content/LeftPanel/LeftPanel.jsx';
import Home from
  './Components/Content/RightPanel/Home/Home.jsx';
import Voting from
  './Components/Content/RightPanel/Voting/Voting.jsx';
import Breeds from
  './Components/Content/RightPanel/Breeds/Breeds.jsx';
import Gallery from
  './Components/Content/RightPanel/Gallery/Gallery.jsx';
import Selected from
  './Components/Content/RightPanel/Selected/Selected.jsx';
import {ReactComponent as GirlAndPetSVG} from
  './Dist/Content/RightPanel/Home/girl-and-pet.svg';

import {StyledApp} from './StyledApp.js';

function App() {
  const selector = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={selector}>
      <StyledApp>
        <Switch>
          <Route exact path="/">
            <LeftPanel/>
            <Home home/>
          </Route>
          <Route exact path="/voting">
            <LeftPanel/>
            <Voting/>
          </Route>
          <Route exact path="/breeds">
            <LeftPanel/>
            <Breeds/>
          </Route>
          <Route path="/gallery">
            <LeftPanel/>
            <Gallery/>
          </Route>
          <Route path="/breeds/selected">
            <LeftPanel/>
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
  );
}

export default App;
