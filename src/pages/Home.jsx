import React, { useEffect }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { loadNfts } from "../store/nft/nft.action.js";

//Cmps
import { NftList } from '../components/util/Carousel.jsx';
//Img
import HeroImg from "../assets/img/Logo.png";

export function Home() {

  const dispatch = useDispatch();
  const  nfts  = useSelector((state) => state.nftModule);

  useEffect(() => {
    dispatch(loadNfts());
  }, []);

  return (
      <div className="home-page">
        <section className="hero-section flex">
          <img className='hero-img' src={HeroImg} alt="hero-image" />
          <div className='content-hero flex column'>
          <h2>Ether Burn</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus maiores illum, voluptatibus quidem dignissimos accusamus excepturi obcaecati eius sunt nisi facilis quod, dolor non molestias rerum quae velit reprehenderit?</p>
          </div>
        </section>
        <section className='cards-carousel-section'>
        <NftList nfts={nfts.nfts} />
        </section>
        <section className='collection-data-section flex column'>
          <div className='table-collection-data'>
            <div className='flex column'>
              <h3>13.8</h3>
              <h5>items</h5>
            </div>
            <div className='flex column'>
              <h3>286</h3>
              <h5>owners</h5>
            </div>
            <div className='flex column'>
              <h3>3.99 ETH</h3>
              <h5>floor price</h5>
            </div>
            <div className='flex column'>
              <h3>12.8K ETH</h3>
              <h5>volume traded</h5>
            </div>
            </div>
          <div  className="link-main-rerible"><a href="https://rarible.com/danasandman">Go to Rerible</a></div>
        </section>
      </div>
  );
}
