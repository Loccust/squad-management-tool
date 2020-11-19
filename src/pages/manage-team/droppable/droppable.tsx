import React from 'react';
import { useDrop } from "react-dnd";
import { MdAdd } from "react-icons/md";
import { connect } from 'react-redux';
import './droppable.scss'

function Droppable(props) {
  var { payload } = props;
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
const mapStateToProps = store => ({
  payload: store.dropState.payload
});
export default connect(mapStateToProps) (Droppable);