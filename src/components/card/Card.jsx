import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleLike, removeCard } from '../redux/actions';
import './card.css';
import like from '../assets/images/like.png';
import trash from '../assets/images/delete.png';

const Card = ({ card }) => {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card__title">
        <h3>{card.title}</h3>
        <p>{card.description}</p>
      </div>

      <div className="card__image">
        <img
          src={card.image}
          alt={card.title}
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = 'fallback-image-url';
          }}
        />
      </div>

      <div className="card__button">
        <button onClick={() => dispatch(toggleLike(card.id))}>
          <img src={like} alt="icon" />
        </button>
        <button onClick={() => dispatch(removeCard(card.id))}>
          <img src={trash} alt="icon" />
        </button>
      </div>
    </div>
  );
};

export default Card;
