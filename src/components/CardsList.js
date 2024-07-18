import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from './Card'
import { fetchCards, setCurrentPage } from "../store/cardsSlice";
import { current } from "@reduxjs/toolkit";
const CardsList = () => {
    const [page, setPage] = useState(3)
    const dispatch = useDispatch();
    const { cards, loading, currentPage, cardsPerPage, cardView } = useSelector(state => state.cards);
    useEffect(() => {
        setTimeout(() => dispatch(fetchCards()), 5000)
    }, [dispatch])
    if (loading) {
        return <div>Loading...</div>
    }
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cards.slice(indexOfFirstCard, indexOfLastCard);
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(cards.length / cardsPerPage); i++) {
        pageNumbers.push(i);
    }
    function handlePagnination(index) {
        if (index >= 0 && index <= pageNumbers.length - 1) {
            dispatch(setCurrentPage(index + 1))
        }
    }
    return (
        <div>
            <div className={`cards-container ${cardView === 'alternate' ? 'alternates' : ''}`}>
                {currentCards.map(card => (
                    <Card key={card.id} card={card} cardView={cardView} />
                ))}

            </div>
            <div className="pagination">

                {[...Array(page)].map((_, i) => (
                    <button key={i} onClick={() => handlePagnination(i + 1)}>{i + 1}</button>

                ))}
            </div>
        </div>
    )
}
export default CardsList
