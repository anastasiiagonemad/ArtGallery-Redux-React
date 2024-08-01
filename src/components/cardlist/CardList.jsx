import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setCards } from '../redux/actions';
import Card from '../card/Card';
import './cardlist.css';

const CardList = () => {
  const dispatch = useDispatch();
  const cards = useSelector((state) => state.cards);
  const showLiked = useSelector((state) => state.showLiked);

  useEffect(() => {
    axios
      .get('https://api.artic.edu/api/v1/artworks')
      .then((response) => {
        const formattedData = response.data.data.map((entry) => {
          const imageUrl = entry.image_id
            ? `https://www.artic.edu/iiif/2/${entry.image_id}/full/843,/0/default.jpg`
            : '';

          return {
            id: entry.id,
            title: entry.title,
            description: entry.artist_title || 'No description available',
            image: imageUrl,
            liked: false,
          };
        });
        dispatch(setCards(formattedData));
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  }, [dispatch]);

  const filteredCards = showLiked ? cards.filter((card) => card.liked) : cards;

  return (
    <div className="card-list">
      {filteredCards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
};

export default CardList;
