import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NftList } from "../components/nft/NftList.jsx";
//Store
import { loadNfts } from "../store/nft/nft.action.js";

export function Collection() {
  const dispatch = useDispatch();
  const [nftsData, setNftsData] = useState([]);
  const [category, setCategory] = useState('{}');

  const nfts = useSelector((state) => state.nftModule);

  useEffect(() => {
    console.log("category", category);
    console.log('nftsData',nftsData);
    dispatch(loadNfts(category));
    setNftsData([...nfts.nfts]);
    console.log("nfts", nfts);
    console.log('nftsData',nftsData);
  }, []);

  useEffect(() => {
    dispatch(loadNfts(category));
    setNftsData([...nfts.nfts]);
  }, [category]);

  const handleChange = (ev) => {
    setCategory(ev);
  };

  return (
    <div className="collection-page">
      <section className="filter-collection margin-auto">
        <ul className="margin-auto flex">
          <li>
            <button onClick={() => handleChange("{}")}>ALL</button>
          </li>
          <li>
            <button onClick={() => handleChange("daily")}>Daily</button>
          </li>
          <li>
            <button onClick={() => handleChange("weekly")}>Weekly</button>
          </li>
          <li>
            <button onClick={() => handleChange("monthly")}>Monthly</button>
          </li>
          <li>
            <button onClick={() => handleChange("million")}>Million</button>
          </li>
          <li>
            <button onClick={() => handleChange("yearly")}>Yearly</button>
          </li>
          <li>
            <button onClick={() => handleChange("billion")}>Billion</button>
          </li>
        </ul>
      </section>
      <section className="nft-list-section">
        {nftsData === [] ? (
          <div>
            <h2>Loading...</h2>
          </div>
          ) : (
          <div className="nft-list-container flex">
            <NftList nfts={nftsData} />
          </div>
        )}
      </section>
    </div>
  );
}

// const filter = (category) =>{
//   console.log('category',category);
//     dispatch(loadNfts());
//     setNftsData(nfts.nfts);
//   if (category === 'all'){
//     setNftsData(nfts.nfts);
//   }else{
//     const items = nftsData.filter((nft)=>{
//      return nft.category === category
//     })
//     setNftsData(items);
//   }
// }
