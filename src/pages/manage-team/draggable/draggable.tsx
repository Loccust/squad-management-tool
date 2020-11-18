import React from 'react';
import { useDrag } from "react-dnd";
import { connect } from 'react-redux';
import "./draggable.scss";

function Draggable(props) {
    var { newValue } = props;
    const [{ isDragging }, drag] = useDrag({
        item: { name: 'Player', type: 'Card' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            newValue = monitor.didDrop();
            console.log(newValue);
        },
    });


    const opacity = isDragging ? 0.6 : 1;
    
    return (
        <div ref={drag} key={props}  style={{ opacity }}>
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
    newValue: store.dropState.newValue
  });
export default connect(mapStateToProps) (Draggable);