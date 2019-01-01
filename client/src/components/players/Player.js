import React from 'react'

const Player = (props) => {
    const player = props.player;
    return (
        <div className="col-md-8 card text-center m-1 border border-0">
        <hr/>
            <div className="card-img mt-3">
                <img src={`${player.Avatar}`} alt=""/>
            </div>
            <p className="lead">
                {player.Name}
            </p>
            <div className="card-body py-0 my-0">
                <ul className="list-group border border-0 py-0 my-0">
                    <li className="list-group-item border-0 py-0 my-0">
                        <strong>Hume Runs: </strong>{player.HRuns}
                    </li>
                    <li className="list-group-item border-0 ">
                    <strong>RBIs: </strong>{player.RBIs}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Player;
