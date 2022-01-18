import React from "react";
import { useSelector } from "react-redux";
import ETHlogo from "../../assets/img/ethLogo.svg";
import  { MintModal } from "../util/MintModal.jsx"
import { PreviewModal } from "../util/PreviewModal.jsx"

export function NftPreview({ nft, page }) {

  const contractData = useSelector((state) => state.contractModule.contractData);
  const openSeaLink = `https://opensea.io/assets/${contractData.contractAddress}/${nft.tokenId}`;

  return (
      <div className="nft-preview flex column">
          <PreviewModal page={page} nft={nft}/>
          <div className="content-card flex column">
            <div className="flex space-between">
              <h4 className="nft-title">{nft.name}</h4>
              <span>1/1</span>
            </div>
            <h6>Price</h6>
            <h4><img className='eth-logo' src={ETHlogo} alt="eth-logo" />{contractData.cost / 1e18}</h4>
            <div className={(page === 'collection' ? 'card-btn-collection' : '')}>
            {(nft.isMinted === false) ? (
              <MintModal nft={nft}/>
            ):(
              <button onClick={()=>window.open(`${openSeaLink}`)} className="opensea-btn">OPENSEA </button> 
            )}
          </div>
          </div>
      </div>
  );
}
