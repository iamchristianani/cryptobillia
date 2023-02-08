import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Coin from '../components/Coin';

describe('Coin Test', () => {
  test('to test the onClick event: ', () => {
    const clickArrow = jest.fn();
    const id = 'eth';
    const name = 'Ethereum';
    const currentPrice = '200';
    const marketCap = '10000';
    const totalVolume = '300000';
    const image = 'https://dummyimage.com';
    const priceChange = '0.363';

    const { queryByTitle } = render(
      <Coin
        id={id}
        name={name}
        currentPrice={currentPrice}
        marketCap={marketCap}
        totalVolume={totalVolume}
        image={image}
        priceChange={priceChange}
        clickArrow={clickArrow}
      />,
    );
    const backIcon = queryByTitle('backIcon');
    fireEvent.click(backIcon);
    expect(clickArrow).toHaveBeenCalledTimes(1);
  });
});
