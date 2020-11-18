import React, {useState} from 'react';
import Droppable from '../droppable/droppable';
import { useDrop } from "react-dnd";
import './field.scss';

function Field(){
  const[selectedFormation, setFormation] = useState([0, 0, 0]);
  const listFormations: Array<string> = [
    "",
    "3-4-3",
    "4-3-3"
  ];

  function setSelectedOption(index: string){
    var formationsValues = listFormations.map((
                      fundation) => fundation.split('-')
                      .map((number) => parseInt(number)));
    setFormation(formationsValues[parseInt(index)]);
  }

  function setPositions( formation: number ){
    var formations = [] as any[];
    for(var i = 0; i < formation; i++){
      formations.push(
        <Droppable key={i}/>
      );
    }
    return formations;
  }

  return(
      <div className="field-group">
        <span className="label">Formation 
          <select id="formation" onChange={e => setSelectedOption(e.target.value)}>
            {listFormations.map((fundation, index) => 
              <option 
              key={index} value={index}>{fundation}</option>)}
          </select>
        </span>

        <div className="management-field">   
          {selectedFormation.map((formation, index) => (
            <div key={index}>
              {setPositions(formation)}
            </div>
          ))}     
          <div id="goalkeeper">
            <Droppable/> 
          </div>
        </div>              
      </div>
)}

export default Field;