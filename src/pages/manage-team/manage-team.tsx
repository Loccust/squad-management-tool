import React, {useState} from 'react';
import './manage-team.scss';
import { MdAdd } from "react-icons/md";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

interface Props{
  id: string;
}
const ManageTeam: React.FC<Props> = ( id ) => {
  const[real, setType] = useState(false);
  const[selectedFormation, setFormation] = useState([0, 0, 0]);
  const listFormations: Array<string> = [
    "3-4-4",
    "4-4-3"
  ];

  function setSelectedOption(index: string){
    var formationsValues = listFormations.map((fundation) => fundation.split('-').map((number) => parseInt(number)));
    setFormation(formationsValues[parseInt(index)]);
    console.log(selectedFormation);

    // selectedFormation.forEach(formation =>{
    //   setPositions(formation)
    // });
  }
  function setPositions( formation: number ){
    console.log(formation)
    for(var i = 0; i < formation; i++){
        return( <div className="player">
        <MdAdd key={i} className="icon-plus"/>
      </div>);
    }
  }

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
        <div className="manage-team-content">
          <div>
            <div className="field-group">
              <span className="label">Formation 
                <select id="formation" onChange={e => setSelectedOption(e.target.value)}>
                  {listFormations.map((fundation, index) => <option key={index} value={index}>{fundation}</option>)}
                </select>
              </span>

              <div className="management-field">   
                {selectedFormation.map((formation, index) => (
                  <div key={index}>
                    {setPositions(formation)}
                  </div>
                ))}     
                  <div>
                    <div className="player">
                      <MdAdd className="icon-plus"/>
                  </div>
                </div> 
              </div>              
            </div>
          </div>
          <div>
            <div className="field-group">
              <span className="label">Search players</span>
              <input type="text" placeholder="player name"/>
            </div>
            <div className="cards-players">
              <div className="card">
                <div>
                  <span className="player-name">
                    <span className="label">Name: </span> <span className="value">Cristiano Ronaldo</span>
                  </span>
                  <span className="player-age">
                    <span className="label">Age: </span> <span className="value">32</span>
                  </span>
                </div>
                <div>
                  <span className="player-nacionality">
                    <span className="label">Nacionality: </span> <span className="value">Portugal</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageTeam;