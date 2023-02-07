import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const Coin = ({
  id, name, marketCap, currentPrice, totalVolume, image,
}) => (
  <>
    <li className="eachCoin">
      <div className="imgNdIcon">
        <div className="coinImage">
          <img src={image} alt={id} />
        </div>
        <div className="backIcon">
          <BsArrowRightCircle />
        </div>
      </div>
      <div className="coinInfo">
        <div className="coinName">
          Name:
          {name}
        </div>
        <div className="coinPrice">
          Current Price:
          {currentPrice}
        </div>
        <div className="marketCap">
          Market Cap:
          {marketCap}
        </div>
        <div className="totalVolume">
          Total Volume:
          {totalVolume}
        </div>
      </div>
    </li>
  </>
);

Coin.propTypes = {
  name: PropTypes.string,
  marketCap: PropTypes.string,
  img: PropTypes.string,
  currentPrice: PropTypes.string,
  totalVolume: PropTypes.string,
  id: PropTypes.string,
}.isRequired;

export default Coin;
