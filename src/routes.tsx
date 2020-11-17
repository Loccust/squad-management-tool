import React from 'react';
import Home from './pages/home/home';
import ManageTeam from './pages/manage-team/manage-team';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
  return(
    <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/manage-team" component={ManageTeam}/>
            </Switch>
        </BrowserRouter>
  );
}

export default Routes;