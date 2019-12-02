import React from 'react';
import './App.css';
import { AccountEditor } from './AccountEditor';
import{AccountDashboard} from './AccountDashboard'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

const App = () => <>
    <Router>
      <Switch>
        <Route path="/new" component={AccountEditor}/>
        <Route path="/" component={AccountDashboard}/>
        <Route path="/edit/:accountId" component={AccountEditor}/>

      </Switch>
    </Router>
    </>;

export default App;
