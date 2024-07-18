import React from "react";
import { useDispatch } from "react-redux";
import { removeCard } from "../store/cardsSlice";
const Card = ({ card, cardView }) => {
    const dispatch = useDispatch()
    return (
        <div className={`card ${card.cardView}`}>
            <div className={`${cardView === 'default' ? 'cards-first' : 'card-second'}`}>
                <h2>{card.title}</h2>
                <p>{card.body}</p>
            </div>
            <button onClick={() => dispatch(removeCard(card.id))} style={{ height: "40px", width: "40px", border: 'none', color: 'red', marginTop: "50px", backgroundColor: 'white', borderRadius: '50%' }}>X</button>
        </div>
    )
}
export default Card