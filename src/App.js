import { useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

// import './App.css';

import {StyledApp} from './StyledApp.js';
import LeftPanel from './Components/Content/LeftPanel/LeftPanel.jsx';
import RightPanel from
  './Components/Content/RightPanel/RightPanel.jsx';
import {ReactComponent as GirlAndPetSVG} from
  './Dist/Content/RightPanel/Home/girl-and-pet.svg';

function App() {
  const selector = useSelector(state => state.theme);

  return (
    <ThemeProvider theme={selector}>
      <StyledApp>
        <Switch>
          <Route exact path="/">
            <LeftPanel/>
            <RightPanel backgroundImg>
              <div className="wrapperSvg">
                <GirlAndPetSVG/>
              </div>
            </RightPanel>
          </Route>
          <Route exact path="/voting">
            <LeftPanel/>
            <RightPanel>
              
            </RightPanel>
          </Route>
          <Route exact path="/breeds">

          </Route>
          <Route path="/gallery">

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
