import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import coinsReducer from './coinlist/coinlist';
import detailsReducer from './coindetails/coindetails';

const store = configureStore(
  {
    reducer: {
      coins: coinsReducer,
      details: detailsReducer,
    },
  },
  applyMiddleware(thunk),
);

export default store;
