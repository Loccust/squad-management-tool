import React from 'react';
import { useDrop } from "react-dnd";
import { setDropPosition } from '../../../redux/actions/actions';
import { CARD } from '../../../redux/actions/action-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './droppable.scss'

function Droppable(props) {
  var {
    index,
    setDropPosition,
    positions
  } = props;

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
      <div ref={drop} key={index}>
        <div className="player" key={index}>
          <span key={index}>{positions[index].text == ''? '+' : positions[index].text}</span>
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