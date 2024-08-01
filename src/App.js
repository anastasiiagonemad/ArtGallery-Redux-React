import React from 'react';
import { Provider } from 'react-redux';
import store from './components/redux/store';
import Header from './components/header/Header';
import CardList from './components/cardlist/CardList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <div className="main">
          <CardList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
