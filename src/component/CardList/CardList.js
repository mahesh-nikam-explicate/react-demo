import React from "react";
import Card from "../Card/Card";

function CardList({robotsArr}) {

   // throw Error('Errrrrr');  // Uncomment when Check Error Boundry working

    const cardArray = robotsArr.map((user, i) => {
        return ( 
        <Card key={user.id} user={user} />
        );
    });

    return (
     <div> {cardArray}</div>
    )
}

export default CardList;