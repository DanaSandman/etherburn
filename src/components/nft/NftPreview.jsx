import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from 'react-router-dom';
import ETHlogo from "../../assets/img/ethLogo.svg";
import { loadNfts } from "../../store/nft/nft.action.js";
import { web3service } from "../../services/web3.service.js";

export function NftPreview({ nft }) {

  // const [currNft, setNft] = useState(nft);
  const dispatch = useDispatch()
  const contractData = useSelector((state) => state.contractModule.contractData);
  const openSeaLink = `https://opensea.io/assets/${contractData.contractAddress}/${nft.tokenId}`;

const mint = async () => {
  console.log('start minting');
  await web3service.mint([Math.round(nft.tokenId)]);
  dispatch(loadNfts())  
};

  return (
      <div className="nft-preview flex column">
          {/* <Link to={`/nft/${nft.tokenId}`} > */}
          <div className="content-img-card">
            {(nft.image)?(
              <img className="nft-img" src={nft.image} alt={nft.name} />
            ):(
              <video width="238px" height="250px" loop autoPlay muted>
              <source src={nft.video} type="video/mp4" />
              </video>
            )}
          </div>
          <div className="content-card flex column">
            <div className="flex space-between">
              <h4 className="nft-title">{nft.name}</h4>
              <span>1/1</span>
            </div>
            <h6>Price</h6>
            <h4><img className='eth-logo' src={ETHlogo} alt="eth-logo" />{contractData.cost / 1e18}</h4>
            {(nft.isMinted === "false") ? (
              <button onClick={()=>mint()}  className="mint-btn">MINT</button>
            ):(
              <button onClick={()=>window.open(`${openSeaLink}`)} className="mint-btn minted">OPENSEA </button> 
            )}
          </div>
          {/* </Link> */}
      </div>
  );
}
