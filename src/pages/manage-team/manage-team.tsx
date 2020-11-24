import React, {useState} from 'react';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Draggable from './draggable/draggable';
import Droppable from './droppable/droppable';
import Field from "./field/field";
import './manage-team.scss';
import Player from '../../models/player-model';
import { connect } from 'react-redux';
import Position from '../../models/position-model';

function ManageTeam(props) {
  const players: Array<Player> = props.players;
  const positions:Array<Position> = props.positions;
  const[real, setType] = useState(false);
  const id:number = props.id;
  console.log(props);  

  const removeSelected = player => {
    if(positions.some(position => position.playerId !== player.id))
      return player;
  };

  return (
    <>
      <div className="manage-team">
        <div className="title">
          <span>{id ? "Create your team" : "Edit your team" }</span>
        </div>
        <div className="info">TEAM INFORMATION</div>
        <div className="manage-team-content">
          <div>
            <div className="field-group">
              <span className="label">Team name</span>
              <input type="text" placeholder="insert a team name"/>
            </div>

            <div className="field-group">
              <span className="label">Description</span>
              <textarea id="team-description"></textarea>
            </div>
          </div>

          <div>
            <div className="field-group">
              <span className="label" >Team website</span>
              <input type="text" placeholder="http://myteam.com"/>
            </div>

            <div className="field-group" id="team-type">
              <span className="label">Team type</span>
              <div className="container-radio">
                <div>
                  <span onClick={() => setType(real ? false : true) }
                    className={real ? 'custom-radio selected' : 'custom-radio'}>
                  </span>
                  <span className="label-radio">Real</span>
                </div>
                
                <div>
                  <span onClick={() => setType(real ? false : true) } 
                    className={real ? 'custom-radio' : 'custom-radio selected'}>
                  </span>
                  <span className="label-radio">Fantasy</span>
                </div>
              </div>
            </div>

            <div className="field-group">
              <span className="label">Tags</span>
              <textarea id="tags"></textarea>
            </div>
          </div>
        </div>
        <div className="info">CONFIGURE SQUAD</div>
        <DndProvider backend={HTML5Backend}>
          <div className="manage-team-content">
            <div>
              <Field/>
              <div className="field-group">
                <button type="submit" id="save">Save</button>
              </div>
            </div>
            <div>
              <div className="field-group">
                <span className="label">Search players</span>
                <input type="text" placeholder="player name"/>
              </div>
                <div className="cards-players">
                  {players.map((player, index)=> (
                    <div className="card" key={index}>
                      <Draggable key={index} player={player}/>
                    </div>
                  ))}
                </div>
            </div>
          </div>
        </DndProvider>
      </div>
    </>
  );
}

const mapStateToProps = store => ({
  positions: store.dropState.positions,
  players: store.dropState.players,
});

export default connect(mapStateToProps)(ManageTeam);