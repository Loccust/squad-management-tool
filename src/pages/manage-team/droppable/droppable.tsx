import React from 'react';
import { useDrop } from "react-dnd";
import { MdAdd } from "react-icons/md";
import { setDropPosition } from '../../.../../../actions/actions';
import { CARD } from '../../.../../../actions/action-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './droppable.scss'

function Droppable(props) {
  var {
    index,
    setDropPosition,
    positions
  } = props;
  console.log(props);

  const [{canDrop, isOver}, drop] = useDrop({
      accept: CARD,
      drop() {
        setDropPosition(index, true);
      },
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
  positions: store.dropState.positions
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setDropPosition }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Droppable);