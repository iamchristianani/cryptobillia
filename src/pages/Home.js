import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { getCoinsAction } from '../redux/coinlist/coinlist';
import './Home.css';
import Coin from '../components/Coin';
import chartImg from '../assets/chart.png';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.coins);
  const navigate = useNavigate();
  const [search, setSearch] = useSearchParams();

  const clickArrow = (id) => {
    navigate(`/details/${id}`);
  };

  useEffect(() => {
    dispatch(getCoinsAction());
  }, [dispatch]);

  return (
    <>
      <div className="homeContainer">
        <div className="headerBox">
          <img src={chartImg} alt="Chart" />
          <div className="headerBoxDetails">
            <h2>Cryptobillia</h2>
            <p>
              {data.length}
              {' '}
              Coins Listed
            </p>
          </div>
        </div>
        <div className="searchBox">
          <input
            type="text"
            placeholder="Search Here"
            value={search.get('filter') || ''}
            onChange={(e) => {
              const filter = e.target.value;
              if (filter) {
                setSearch({ filter });
              } else {
                setSearch({});
              }
            }}
          />
        </div>
        <ul className="homeUL">
          {
          data.filter((coin) => {
            const filter = search.get('filter');
            if (!filter) return true;
            const name = coin.name.toLowerCase();
            return name.startsWith(filter.toLowerCase());
          }).map((coin) => (
            <Coin
              key={coin.id}
              id={coin.id}
              name={coin.name}
              currentPrice={coin.current_price}
              marketCap={coin.market_cap}
              totalVolume={coin.total_volume}
              image={coin.image}
              priceChange={coin.price_change_percentage_24h}
              clickArrow={clickArrow}
            />
          ))
}
        </ul>
      </div>
    </>
  );
};

export default Home;
