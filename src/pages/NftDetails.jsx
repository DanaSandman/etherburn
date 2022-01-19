import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { Loader } from "../components/common/Loader.jsx";
import { setSelectedNft } from '../store/nft/nft.action.js';

  export const NftDetails = () => {

    const { tokenId } = useParams();
    const [nft, setNft] = useState (null)
    const dispatch = useDispatch();
    const selectedNft = useSelector((state) => state.nftModule.selectedNft);

  useEffect(() => {
   if (!nft) dispatch( setSelectedNft(tokenId))
    const loadNft = async () => {
        console.log('selectedNft',selectedNft);
        setNft(selectedNft)
    };
    loadNft()
  }, [])

  useEffect(() => {
    setNft(selectedNft)
}, [selectedNft])

if (!selectedNft) return <div> <Loader /></div>
  return (
    <div className='nft-details-page'>
        <div className='nft-details-main'>
        <h1>{tokenId}</h1>
        <h1>{selectedNft.tokenId}</h1>
        </div>
    </div>
  );
}
