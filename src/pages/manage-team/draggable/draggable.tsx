import React from 'react';
import { useDrag } from "react-dnd";
import { setDropPlayer } from '../../.../../../actions/actions';
import { CARD } from '../../.../../../actions/action-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "./draggable.scss";

function Draggable(props) {
    var setDropPlayer = props.setDropPlayer,
        positions: Array<any> = props.positions, 
        text: string = props.text;
      console.log(positions);

    const [{ isDragging }, drag] = useDrag({
        item: { name: 'Player', type: CARD },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            positions.forEach((position, index) =>{
                if(position.lastDropped)
                    setDropPlayer(index, text);
            });
            //if(monitor.didDrop())
        },
    });
    const opacity = isDragging ? 0.8 : 1;    
    
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
    positions: store.dropState.positions
  });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ setDropPlayer }, dispatch);
export default connect(mapStateToProps, mapDispatchToProps) (Draggable);