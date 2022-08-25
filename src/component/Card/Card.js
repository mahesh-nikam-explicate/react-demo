import React from "react";
import './Card.css';

function Card(props) {

    const {user} = props;

    return (
    <div className="tc bg-light-green dib br3 pa2 ma2 grow bw2 shadow-5 pointer">
        <img alt="robot" src={`https://robohash.org/${user.id}?100x100`} className="img"/>

        <div>
            <h4>{user.name}</h4>
            <p>{user.email}</p>
        </div>
    </div>
    );
}

export default Card;