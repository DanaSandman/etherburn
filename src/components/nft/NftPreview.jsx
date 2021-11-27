import React from "react";
import { Link } from "react-router-dom";
import ETHlogo from "../../assets/img/ethLogo.svg";


export function NftPreview({ nft }) {
  return (
      <div className="nft-preview flex column">
        {/* <Link to={`/nft/${nft._id}`} > */}
        <a href="https://rarible.com/">
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
          </div>
          {/* <div className="owners-card">
        <h5>{nft.owners[0].ownerName}</h5>
        <img src={nft.owners[0].ownerImg} alt={nft.owners[0].ownerName}></img>
        <h5>{nft.owners[1].ownerName}</h5>
        <img src={nft.owners[1].ownerImg} alt={nft.owners[1].ownerName}></img>
      </div> */}
          {/* </Link> */}
        </a>
      </div>
  );
}
