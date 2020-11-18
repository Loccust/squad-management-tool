import React from 'react';
import { useDrag } from "react-dnd";
import "./draggable.scss";

function Draggable() {
    const [{ isDragging }, drag] = useDrag({
        item: { name: 'Player', type: 'Card' },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const opacity = isDragging ? 0.6 : 1;

    return (
        <div ref={drag} className='card' style={{  opacity }}>
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

export default Draggable;