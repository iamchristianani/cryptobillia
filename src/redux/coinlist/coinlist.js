import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

const FETCH_COINS = 'cryptobillia/coinlist/FECTH_COINS';
const URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

// const fetchMissions = createAsyncThunk(FETCH_COINS,
//   () => fetch(URL)
//     .then((res) => res.json())
//     .then((data) => data.map((coin) => ({
//       id: coin.id,
//       symbol: coin.symbol,
//       name: coin.name,
//       image: coin.image,
//       current_price: coin.current_price,
//       market_cap: coin.market_cap,
//       total_volume: coin.total_volume,
//     })))
// );

const getCoinsAction = createAsyncThunk(
  FETCH_COINS,
  async (post, { dispatch }) => {
    const res = await fetch(URL);
    if (!res.ok) return [];
    const data = await res.json();
    const allCoins = data.slice(0, 40);;
    dispatch({
      type: FETCH_COINS,
      payload: allCoins,
    })
  },
);

const initialState = [];

// const coinsReducer1 = createReducer(initialState, (builder) => {
//   builder.addCase(getCoinsAction.fulfilled, (state, action) => {
//     let updatedState = [...state];
//     updatedState = action.payload;
//     return updatedState;
//   });
// });

const coinsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case FETCH_COINS:
      return action.payload;
    default: return state;
  }
};

export { getCoinsAction };
export default coinsReducer;
