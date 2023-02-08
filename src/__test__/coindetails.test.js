import detailsReducer from '../redux/coindetails/coindetails';

test('Testing the Book Reducer', () => {
  const stateBefore = [];
  const GET_DETAILS = 'cryptobillia/coindetails/GET_DETAILS';

  const details = {
    id: 'eth',
    name: 'Ethereum',
    currentPrice: '200',
    marketCap: '10000',
    totalVolume: '300000',
    image: 'https://dummyimage.com',
    priceChange: '0.363',
  };

  const action = {
    type: GET_DETAILS,
    payload: details,
  };

  const stateAfter = {
    id: 'eth',
    name: 'Ethereum',
    currentPrice: '200',
    marketCap: '10000',
    totalVolume: '300000',
    image: 'https://dummyimage.com',
    priceChange: '0.363',
  };

  expect(detailsReducer(stateBefore, action)).toEqual(stateAfter);
});
