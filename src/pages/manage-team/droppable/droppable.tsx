import React from 'react';
import { useDrop } from "react-dnd";

const Droppable = (children) => {
  const [{canDrop, isOver}, drop] = useDrop({
      accept: 'Card',
      drop: () => ({name: 'Player'}),
      collect: (monitor) => ({
          isOver: monitor.isOver(),
          canDrop: monitor.canDrop(),
      }),
  });

  console.log('options', {canDrop, isOver});

  return (
      <div ref={drop}>
        {children}
      </div>
  )
}

export default Droppable;