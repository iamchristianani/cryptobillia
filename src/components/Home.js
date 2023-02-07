import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoinsAction } from '../redux/coinlist/coinlist';
import './Home.css';
import Coin from './Coin';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(getCoinsAction());
  }, [dispatch]);

  return (
    <>
      <div className="homeContainer">
        <ul className="homeUL">
          {data.map((coin) => (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              currentPrice={coin.current_price}
              marketCap={coin.market_cap}
              totalVolume={coin.total_volume}
              image={coin.image}
            />
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
