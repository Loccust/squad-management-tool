import React from 'react';
import { useDrop } from "react-dnd";
import { MdAdd } from "react-icons/md";
import './droppable.scss'

function Droppable(props) {
  const [{canDrop, isOver}, drop] = useDrop({
      accept: 'Card',
      drop: () => ({name: 'Player'}),
      collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
      }),
  });

  return (
      <div ref={drop}>
        <div className="player">
          <MdAdd className="icon-plus"/>
        </div>
      </div>
  )
}

export default Droppable;