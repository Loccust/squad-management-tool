import React from 'react';
import { useDrag } from "react-dnd";
import { setDropPlayer } from '../../../redux/actions/actions';
import { CARD } from '../../../redux/actions/action-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "./draggable.scss";
import Player from '../../../models/player-model';

function Draggable(props) {
    var setDropPlayer = props.setDropPlayer,
        positions: Array<any> = props.positions, 
        player: Player = props.player;

    const [{ isDragging }, drag] = useDrag({
        item: { name: 'Player', type: CARD },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (dropResult, monitor) => {
            positions.forEach((position, index) =>{
                if(position.lastDropped)
                    setDropPlayer(player.id, index, getInitials(player.name));
            });
        },
    });
    const opacity = isDragging ? 0.8 : 1;

    const getInitials = (name:string) => {
        var [firstName, lastName] = name.split(' ');
        var initials = firstName.split('')[0] + lastName.split('')[0];
        return initials;
    }
    
    return (
        <div ref={drag} key={props.index}  style={{ opacity }}>
            <div>
                <span className="player-name">
                    <span className="label">Name: </span>
                    <span className="value">{player.name}</span>
                </span>
                <span className="player-age">
                    <span className="label">Age: </span> 
                    <span className="value">{player.age}</span>
                </span>
            </div>
            <div>
                <span className="player-nacionality">
                    <span className="label">Nacionality: </span> <span className="value">{player.nacionality}</span>
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