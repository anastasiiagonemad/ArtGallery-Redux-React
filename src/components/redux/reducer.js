const initialState = {
  cards: [],
  showLiked: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_CARDS':
      return { ...state, cards: action.payload };
    case 'TOGGLE_LIKE':
      return {
        ...state,
        cards: state.cards.map((card) =>
          card.id === action.payload ? { ...card, liked: !card.liked } : card,
        ),
      };
    case 'REMOVE_CARD':
      return {
        ...state,
        cards: state.cards.filter((card) => card.id !== action.payload),
      };
    case 'TOGGLE_SHOW_LIKED':
      return { ...state, showLiked: !state.showLiked };
    default:
      return state;
  }
};

export default reducer;
