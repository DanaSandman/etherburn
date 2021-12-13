import React from "react";
import { Link } from "react-router-dom";
import ETHlogo from "../../assets/img/ethLogo.svg";

export function NftPreview({ nft }) {

  const openSeaLink = nft.openSeaLink;

  return (
      <div className="nft-preview flex column">
        {/* <Link to={`/nft/${nft._id}`} > */}
          <div className="content-img-card">
            <img className="nft-img" src={nft.nftImg} alt={nft.title} />
          </div>
          <div className="content-card flex column">
            <div className="flex space-between">
              <h4 className="nft-title">{nft.title}</h4>
              <span>{nft.copies}</span>
            </div>
            <h6>Price</h6>
            <h4><img className='eth-logo' src={ETHlogo} alt="eth-logo" />{nft.price}</h4>
            <p>{nft.description}</p>
            {(nft.minted === "false") ? (
              <button onClick={()=>alert('minted yay')} className="mint-btn">MINT</button>
            ):(
              <button onClick={()=>window.open(`${openSeaLink}`)} className="mint-btn minted">OPENSEA </button> 
            )}
          </div>
          {/* </Link> */}
      </div>
  );
}
