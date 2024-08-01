export const setCards = (cards) => ({
  type: 'SET_CARDS',
  payload: cards,
});

export const toggleLike = (id) => ({
  type: 'TOGGLE_LIKE',
  payload: id,
});

export const removeCard = (id) => ({
  type: 'REMOVE_CARD',
  payload: id,
});

export const toggleShowLiked = () => ({
  type: 'TOGGLE_SHOW_LIKED',
});
