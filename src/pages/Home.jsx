import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//Store
import { loadNfts } from "../store/nft/nft.action.js";
//Cmps
import { NftListCarousel } from "../components/util/Carousel.jsx";
import { web3, contract, web3service } from "../services/web3.service.js";
//Img
import HeroImg from "../assets/img/Logo.png";

export function Home(props) {
  const initialContractData = {};
  const [contractData, setcontractData] = useState(initialContractData);
  const dispatch = useDispatch();

  const nfts = useSelector((state) => state.nftModule.nfts);

  useEffect(() => {
      dispatch(loadNfts());
    web3.eth.getBlockNumber().then((num) => console.log("web3 block num", num));
    console.log("contractData", contractData);
    getContractData();
  }, []);
  
  useEffect(() => {
    console.log("contractData", contractData);
  }, [contractData]);

  const getContractData = async () => {
    const dataFromContract = await web3service.read();
    setcontractData(dataFromContract);
  };
  const mint = async () => {
    console.log("start miting");
    const mintData = await web3service.write();
    console.log("mintData", mintData);
  };

  return (
    <div className="home-page">
      <section className="hero-section flex">
        {/* <div className='account-details'>
          <p>{contractData.cost}</p>
          <p>{contractData.timeToMinting}</p>
          <p>{contractData.maxMintAmount}</p>
          <p>{contractData.maxSupply}</p>
          <p>{props.currentAccount}</p>
          <p> Your Balance: {props.balance} ETH</p>
          <button onClick = {mint} > MINT</button>
          </div> */}
        <img className="hero-img" src={HeroImg} alt="hero-image" />
        <div className="content-hero flex column">
          <h2>Ether Burn</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            natus maiores illum, voluptatibus quidem dignissimos accusamus
            excepturi obcaecati eius sunt nisi facilis quod, dolor non molestias
            rerum quae velit reprehenderit?
          </p>
        </div>
      </section>
      <section className="cards-carousel-section">
        <NftListCarousel nfts={nfts} />
      </section>
      <section className="collection-data-section flex column">
        <Link to="/collection" className="collection-link-main">
          ALL COLLECTION
        </Link>
        <div className="table-collection-data">
          <div className="flex column">
            <h3>13.8</h3>
            <h5>items</h5>
          </div>
          <div className="flex column">
            <h3>286</h3>
            <h5>owners</h5>
          </div>
          <div className="flex column">
            <h3>3.99 ETH</h3>
            <h5>floor price</h5>
          </div>
          <div className="flex column">
            <h3>12.8K ETH</h3>
            <h5>volume traded</h5>
          </div>
        </div>
      </section>
    </div>
  );
}
