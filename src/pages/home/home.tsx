import React from 'react';
import MyTeams from '../../components/my-teams/my-teams';
import Top5 from '../../components/top5/top5';
import PickedPlayers from '../../components/picked-players/picked-players';

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