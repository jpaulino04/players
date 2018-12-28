import React from 'react'

const Player = (props) => {
    const player = props.player;
    return (
        <div className="col-md-4 card text-center m-1">
            <div className="card-img-top">
                <img src={`${player.avatar}`} alt=""/>
            </div>
            <div className="card-header">
                Jose Paulino
            </div>
            <div className="card-body">
                Top Player in the us
            </div>
        </div>
    )
}

export default Player;
