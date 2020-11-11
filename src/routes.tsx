import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import MyTeams from './pages/my-teams/my-teams';

function Routes() {
  return(
    <BrowserRouter>
            <Switch>
                <Route path="/" exact={true} component={MyTeams} />
                {/* <Route path="/activities" component={YourTeam}/> */}
            </Switch>
        </BrowserRouter>
  );
}

export default Routes;