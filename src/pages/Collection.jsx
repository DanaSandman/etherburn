import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//Cmps
import { NftList } from '../components/nft/NftList.jsx'
//Store
import { loadNfts } from '../store/nft/nft.action.js'

export function Collection() {
  const dispatch = useDispatch()
  const nfts = useSelector((state) => state.nftModule.nfts)
  const [nftsData, setNftsData] = useState()
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
   if (!nfts[0]) dispatch(loadNfts())
  }, [])

  useEffect(() => {
    setNftsData(nfts)
  }, [nfts])

  const filter = (category) => {
    console.log('filter category', category);
    setActiveCategory(category);
    if (category === 'all') {
      setNftsData(nfts)
    } else {
      const items = nfts.filter((nft) => {
        return nft.category === category
      })
      setNftsData(items)
    }
  }

  const categories = ['all', 'daily', 'weekly', 'monthly', 'million', 'yearly', 'billion'];
  const item = categories.map((category, index) => {
    return (
      <button
        key={index}
        onClick={() => filter(category)}
        className={activeCategory === category ? "active" : "unactive"}
      >
        {category}
      </button>
    );
  });

  return (
    <div className="collection-page">
      <section className="filter-collection margin-auto">
         <h2>ETHER BURN COLLECTION</h2>
         <ul>
           <li>{item}</li>
         </ul>
      </section>
      <section className="nft-list-section">
        {nftsData && (
          <div className="nft-list-container flex justify-center">
            <NftList nfts={nftsData} page='collection' />
          </div>
        )}
      </section>
    </div>
  )
}
