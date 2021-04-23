import { Switch, Route } from 'react-router-dom';

import './App.css';

import LeftPanel from './Components/Content/LeftPanel/LeftPanel.jsx';
import ContentWrapper from
  './Components/Content/ContentWrapper/ContentWrapper.jsx';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <LeftPanel/>
          <ContentWrapper/>
        </Route>
        <Route exact path="/voting">

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
    </div>
  );
}

export default App;
