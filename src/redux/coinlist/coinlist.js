import { createAsyncThunk } from '@reduxjs/toolkit';

const FETCH_COINS = 'cryptobillia/coinlist/FECTH_COINS';
const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

const getCoinsAction = createAsyncThunk(
  FETCH_COINS,
  async (post, { dispatch }) => {
    const res = await fetch(URL);
    const data = await res.json();
    const allCoins = data.slice(0, 40);
    dispatch({
      type: FETCH_COINS,
      payload: allCoins,
    });
  },
);

const coinsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_COINS:
      return action.payload;
    default: return state;
  }
};

export { getCoinsAction };
export default coinsReducer;
