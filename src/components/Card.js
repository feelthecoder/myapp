import React from "react";
import '../Card.css';

const Card = ({value,isFlipped,onClick,isActive})=>{
    return (
        <div className={`card ${isFlipped?'flipped':''} ${isActive?'enableCard':'disableCard'}`} onClick={onClick}>
            <div className="card-inner">
                <div className="card-front">?</div>
                <div className="card-back">{value}</div>
            </div>
        </div>
    );
};

export default Card;