import React, {useState} from 'react';
import './manage-team.scss';
import { MdAdd } from "react-icons/md";
import { JsxElement } from 'typescript';

interface Props{
  id: string;
}
const ManageTeam: React.FC<Props> = ( id ) => {
  var i = 0;
  const[real, setType] = useState(false);
  const[selectedFormation, setFormation] = useState([0, 0, 0]);
  const listFormations: Array<string> = [
    "3-4-4",
    "4-4-3"
  ];

  var formations = listFormations.map((fundation) => fundation.split('-').map((number) => parseInt(number)));
  function setSelectedOption(index: string){
    setFormation(formations[parseInt(index)]);
    console.log(selectedFormation)
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
                {selectedFormation.map(() => (
                  <div>
                    {selectedFormation.map((formation) => {
                      while(i < formation){
                        return(
                          <div className="player">
                              <MdAdd className="icon-plus"/>
                          </div>
                        )
                    }})}
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
              <input type="text" placeholder="Ronal"/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ManageTeam;