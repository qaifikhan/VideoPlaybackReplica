import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import HomePage from './Containers/HomePage/HomePage';

import './App.css';
import Topbar from './Components/Topbar/Topbar';
import WatchPage from './Containers/WatchPage/WatchPage';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Topbar />
        <Switch>
          <Route path={'/watch/:id'} component={WatchPage} />
          <Route exact path={'/'} component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
