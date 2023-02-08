import coinsReducer from '../redux/coinlist/coinlist';

test('Testing the Book Reducer', () => {
  const stateBefore = [];
  const FETCH_COINS = 'cryptobillia/coinlist/FETCH_COINS';

  const allCoins = {
    id: 'eth',
    name: 'Ethereum',
    currentPrice: '200',
    marketCap: '10000',
    totalVolume: '300000',
    image: 'https://dummyimage.com',
    priceChange: '0.363',
  };

  const action = {
    type: FETCH_COINS,
    payload: allCoins,
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

  expect(coinsReducer(stateBefore, action)).toEqual(stateAfter);
});
