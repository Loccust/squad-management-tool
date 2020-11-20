import React, {useState} from 'react';
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Draggable from './draggable/draggable';
import Droppable from './droppable/droppable';
import Field from "./field/field";
import './manage-team.scss';

interface Props{
  id: string;
}

const ManageTeam: React.FC<Props> = ( id ) => {
  const[real, setType] = useState(false);

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
                  <div className="card">
                    <Draggable text="CR"/>
                  </div>
                </div>
            </div>
          </div>
        </DndProvider>
      </div>
    </>
  );
}

export default ManageTeam;