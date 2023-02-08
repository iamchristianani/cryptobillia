import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Details.css';
import { AiFillFacebook, AiFillGithub, AiFillTwitterCircle, AiFillRedditCircle } from 'react-icons/ai';
import { getDetailsAction } from '../redux/coindetails/coindetails';

const Details = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.details);
  const { coinId } = useParams();

  useEffect(() => {
    dispatch(getDetailsAction(coinId));
  }, [dispatch, coinId]);

  const facebookUsername = data.links ? data.links.facebook_username : null;
  const facebookURL = "https://facebook.com/".concat(facebookUsername);
  const twitterUsername = data.links ? data.links.twitter_screen_name : null;
  const twitterURL = "https://twitter.com/".concat(twitterUsername);

  return (
    <div className='coinBox'>
      <div className="coinHeaderBox">
        <img src={data.image ? data.image.large : null} alt={data.name} />
        <div className="coinHeaderBoxDetails">
          <h2>{data.name}</h2>
          <h4>({data.symbol})</h4>
          {
            data.market_data?.current_price
            ? <p>
              $
              {data.market_data.current_price.usd}
            </p> : null
          }
        </div>
      </div>
      <div className="allDetailsInfo">
        <div className="coinDetails">
          <div className="coinDetailsHeader">
            <h3>Coin Details</h3>
          </div>
          <div className="coinDetailsInfo">
            <table>
              <tbody>
                <tr>
                  <td>Name: </td>
                  <td>{data.name}</td>
                </tr>
                <tr>
                  <td>USD Price: </td>
                  <td>${data.market_data?.current_price?data.market_data.current_price.usd : null}</td>
                </tr>
                <tr>
                  <td>EUR Price: </td>
                  <td>&#8364;{data.market_data?.current_price?data.market_data.current_price.eur : null}</td>
                </tr>
                <tr>
                  <td>GBP Price: </td>
                  <td>&#163;{data.market_data?.current_price?data.market_data.current_price.gbp : null}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="coinDetails">
          <div className="coinDetailsHeader">
            <h3>More Info</h3>
          </div>
          <div className="coinDetailsInfo">
          <table>
              <tbody>
                <tr>
                  <td>Market Rank: </td>
                  <td>{data.market_cap_rank}</td>
                </tr>
                <tr>
                  <td>Percentage Change: </td>
                  <td>{data.market_data?data.market_data.price_change_percentage_24h: null}</td>
                </tr>
                <tr>
                  <td>Circulating Supply: </td>
                  <td>{data.market_data?data.market_data.circulating_supply : null}</td>
                </tr>
                <tr>
                  <td>Market Supply: </td>
                  <td>{data.market_data?data.market_data.total_supply : null}</td>
                </tr>
                <tr>
                  <td>Market Cap: </td>
                  <td>${data.market_data?.market_cap?data.market_data.market_cap.usd : null}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="coinDetails">
          <div className="coinDetailsHeader">
            <h3>Socials</h3>
          </div>
          <div className="coinDetailsInfo">
            <ul>
              <li>
                <a href={facebookURL} target="_blank" rel="noreferrer">
                  <AiFillFacebook className="detailsIcons" />
                </a>
              </li>
              <li>
                <a href={twitterURL} target="_blank" rel="noreferrer">
                  <AiFillTwitterCircle className="detailsIcons" />
                </a>
              </li>
              <li>
                <a href={data.links?.repos_url ? data.links.repos_url.github[0] : null} target="_blank" rel="noreferrer">
                  <AiFillGithub className="detailsIcons" />
                </a>
              </li>
              <li>
                <a href={data.links ? data.links.subreddit_url : null} target="_blank" rel="noreferrer">
                  <AiFillRedditCircle className="detailsIcons" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
