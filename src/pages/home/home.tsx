import React from 'react';
import MyTeams from '../../components/my-teams/my-teams';
import Top5 from '../../components/top5/top5';
import './home.scss';

function Home() {
  return (
    <div className="wrapper">
      <MyTeams/>
      <Top5 />
    </div>
  );
}

export default Home;