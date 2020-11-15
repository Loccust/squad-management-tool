import React from 'react';
import './picked-players.scss';

function PickedPlayers(){
  return(
    <>
      <div className='picked-players'>
        <div className="player-container">
          <div className="text"> Most picked player </div>
          <div>
            <div className="text percent"> 75% </div>
            <div className="player dashed">
              <span>NJ</span>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="round"></div>
        </div>
        <div className="player-container">
          <div className="text">Lowest picked player </div>
          <div>
            <div className="text percent"> 25% </div>
            <div className="player">
              <span>CR</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PickedPlayers;