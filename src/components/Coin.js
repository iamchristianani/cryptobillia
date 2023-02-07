import React from 'react';
import { BsArrowRightCircle } from "react-icons/bs";

const Coin = ({id, name, market_cap, current_price, total_volume, image}) => {

  return (
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
          <div className="coinName">Name: {name}</div>
          <div className="coinPrice">Current Price: {current_price}</div>
          <div className="marketCap">Market Cap: {market_cap}</div>
          <div className="totalVolume">Total Volume: {total_volume}</div>
        </div>
      </li>
    </>
  )
};

export default Coin;
