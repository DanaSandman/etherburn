import React, { useEffect, Fragment }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";

import { loadNfts } from "../store/nft/nft.action.js";

//Cmps
import { NftList } from '../components/nft/NftList.jsx';
//Img
import HeroImg from "../assets/img/Logo.png";

export function Home() {

  const dispatch = useDispatch();
  const  nfts  = useSelector((state) => state.nftModule);
  console.log('home nts', nfts.nfts);
  useEffect(() => {
    dispatch(loadNfts());
  }, []);

  return (
      <div className="home-page">
        <section className="hero-section flex column">
          <img className='hero-img' src={HeroImg} alt="hero-image" />
          <h2>Ether Burn</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus maiores illum, voluptatibus quidem dignissimos accusamus excepturi obcaecati eius sunt nisi facilis quod, dolor non molestias rerum quae velit reprehenderit?</p>
        </section>
        <section className='cards-carousel-section'>
        <NftList nfts={nfts.nfts} />
        {/* <button>some button</button> */}
        </section>
        <section className='home-section3'>
          <h2>section3</h2>
        </section>
      </div>
  );
}
