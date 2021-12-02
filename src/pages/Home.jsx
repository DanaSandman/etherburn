import React, { useEffect, useState }from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
//Store
import { loadNfts } from "../store/nft/nft.action.js";
//Cmps
import { NftList } from '../components/util/Carousel.jsx';
import  { web3, contract, web3service }   from '../services/web3.service.js';
//Img
import HeroImg from "../assets/img/Logo.png";

export function Home(props) {

  const initialContractData = {};
  const myWallet ='0x42f91354b885328b56A624eD0f7bDADF9a6F75ba';
  const [contractData, setcontractData] = useState(initialContractData)
  const dispatch = useDispatch();
  const  nfts  = useSelector((state) => state.nftModule);


  useEffect(() => {

    dispatch(loadNfts());
    web3.eth.getBlockNumber()
    .then((num) => console.log('web3', num));
    console.log('contractData',contractData);
    getContractData()
  }, []);

  const getContractData = async () => {
    await  web3service.read();
     setcontractData(web3service.gContractData);
     console.log('contractData',contractData.cost);
  };

  return (
      <div className="home-page">
        <section className="hero-section flex">
          <div className='account-details'>
          <p>{contractData.cost}</p>
          <p>{props.currentAccount}</p>
          <p> Your Balance: {props.balance} ETH</p>
          </div>
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
