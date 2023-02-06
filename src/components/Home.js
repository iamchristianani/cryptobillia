import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCoinsAction } from '../redux/coinlist/coinlist';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.coins);

  useEffect(() => {
    dispatch(getCoinsAction());
  }, [dispatch]);
  console.log(data);

  return (
    <>
      <div className="homeContainer">
        <ul>
          {data.map((coin) => (
            <li key={coin.id}>
              Name:
              {' '}
              {coin.name}
              <br />
              Current Price:
              {' '}
              {coin.current_price}
              <br />
              Market Cap:
              {' '}
              {coin.current_price}
              <br />
              Total Volume:
              {' '}
              {coin.total_volume}
              <br />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Home;
