import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleShowLiked } from '../redux/actions';
import './header.css';

const Header = () => {
  const dispatch = useDispatch();
  const showLiked = useSelector((state) => state.showLiked);
  return (
    <header>
      <h1 className="header__title">Art Institute of Chicago</h1>
      <button
        className="header__btn"
        onClick={() => dispatch(toggleShowLiked())}
      >
        {showLiked ? 'Show All' : 'Show Liked'}
      </button>
    </header>
  );
};

export default Header;
