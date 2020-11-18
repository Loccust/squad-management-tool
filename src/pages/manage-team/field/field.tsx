import React, {useState} from 'react';
import { MdAdd } from "react-icons/md";
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
  const [{canDrop, isOver}, drop] = useDrop({
    accept: 'Card',
    drop: () => ({name: 'Player'}),
    collect: (monitor) => ({
        isOver: monitor.isOver(),
        canDrop: monitor.canDrop(),
    }),
  });

  console.log('options', {canDrop, isOver});

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
      <div key={i}>
        <div key={i} className="player" ref={drop}>
          <MdAdd key={i} className="icon-plus"/>
        </div>
      </div>);
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
              <div className="player" ref={drop}>
                <MdAdd className="icon-plus"/>
            </div>
          </div> 
        </div>              
      </div>
)}

export default Field;