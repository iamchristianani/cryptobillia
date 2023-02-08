import React from 'react';
import PropTypes from 'prop-types';
import { BsArrowRightCircle } from 'react-icons/bs';

const Coin = ({
  id, name, currentPrice, image, priceChange, clickArrow,
}) => (
  <>
    <li className="eachCoin">
      <div className="imgNdIcon">
        <div className="coinImage">
          <img src={image} alt={id} />
        </div>
        <div className="backIcon">
          <BsArrowRightCircle title="backIcon" className="arrowCircle" onClick={() => (clickArrow(id))} />
        </div>
      </div>
      <div className="coinInfo">
        <h2 className="coinName">
          {name}
        </h2>
        <div className="coinPrice">
          $
          {currentPrice}
        </div>
        <div className={priceChange < 0 ? 'priceLess' : 'priceMore'}>
          {priceChange}
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
