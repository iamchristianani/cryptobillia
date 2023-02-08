import { createAsyncThunk } from '@reduxjs/toolkit';

const GET_DETAILS = 'cryptobillia/coindetails/GET_DETAILS';
const URL = 'https://api.coingecko.com/api/v3/coins/';

const getDetailsAction = createAsyncThunk(
  GET_DETAILS,
  async (id, { dispatch }) => {
    const res = await fetch(`${URL}/${id}`);
    const data = await res.json();
    const details = data;
    dispatch({
      type: GET_DETAILS,
      payload: details,
    });
  },
);

const detailsReducer = (state = [], action = {}) => {
  switch (action.type) {
    case GET_DETAILS:
      return action.payload;
    default: return state;
  }
};

export { getDetailsAction };
export default detailsReducer;
