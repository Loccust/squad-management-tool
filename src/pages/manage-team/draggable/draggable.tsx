import React from 'react';
import { useDrag } from "react-dnd";
import { dropItem } from '../../.../../../actions/actions'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "./draggable.scss";

function Draggable(props) {
    var {
        dropItem,
        payload
      } = props;
    console.log(props);
    const [{ isDragging }, drag] = useDrag({
        item: { name: 'Player', type: 'Card' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            payload = monitor.didDrop();
            console.log(payload);
            dropItem(payload, 1, 'CR');
        },
    });
    const opacity = isDragging ? 0.6 : 1;    
    
    return (
        <div ref={drag} key={props.index}  style={{ opacity }}>
            <div>
                <span className="player-name">
                    <span className="label">Name: </span>
                    <span className="value">Cristiano Ronaldo</span>
                </span>
                <span className="player-age">
                    <span className="label">Age: </span> 
                    <span className="value">32</span>
                </span>
            </div>
            <div>
                <span className="player-nacionality">
                    <span className="label">Nacionality: </span> <span className="value">Portugal</span>
                </span>
            </div>
        </div>
    )
}

const mapStateToProps = store => ({
    payload: store.dropState.payload
  });

  const mapDispatchToProps = dispatch =>
  bindActionCreators({ dropItem }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Draggable);