import React from 'react';
import MyTeams from './my-teams/my-teams';
import Top5 from './top5/top5';
import PickedPlayers from './picked-players/picked-players';

import './home.scss';

function Home() {
  return (
    <div className="wrapper">
      <MyTeams/>
      <div className="container">
        <Top5 />
        <PickedPlayers />
      </div>
    </div>
  );
}

export default Home;