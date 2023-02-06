import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinsReducer from './coinlist/coinlist';

const store = configureStore(
  {
    reducer: {
      coins: coinsReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
