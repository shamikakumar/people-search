import React from 'react';

const Card = (props) => {
    return(
        <div className="bg-light-blue dib br3 pa3 ma2 grow bw2 shadow5">
            <img alt="people" src={`https://robohash.org/${props.id}?set=set5`}/>
            <div>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;