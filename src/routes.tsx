import React from 'react';
import Home from './pages/home/home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function Routes() {
  return(
    <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={Home} />
                {/* <Route path="/activities" component={YourTeam}/> */}
            </Switch>
        </BrowserRouter>
  );
}

export default Routes;