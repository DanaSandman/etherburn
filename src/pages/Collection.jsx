import React, { useEffect, useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
//Cmps
import { NftList } from '../components/nft/NftList.jsx'
//Store
import { loadNfts } from '../store/nft/nft.action.js'

export function Collection() {
  const dispatch = useDispatch()
  const nfts = useSelector((state) => state.nftModule.nfts)
  const [nftsData, setNftsData] = useState()
  const btnRef = useRef(null);

  useEffect(() => {
   if (!nfts[0]) dispatch(loadNfts())  
   btnRef.current.focus();
  }, [])

  useEffect(() => {
    setNftsData(nfts)
  }, [nfts])

  const filter = (category) => {
    if (category === 'all') {
      setNftsData(nfts)
    } else {
      const items = nfts.filter((nft) => {
        return nft.category === category
      })
      console.log('items', items)
      setNftsData(items)
    }
  }

  return (
    <div className="collection-page">
      <section className="filter-collection margin-auto">
         <h2>ETHER BURN COLLECTION</h2>
        <ul className="margin-auto flex">
          <li>
            <button onClick={() => filter('all')} ref={btnRef} >ALL</button>
          </li>
          <li>
            <button onClick={() => filter('daily')}>Daily</button>
          </li>
          <li>
            <button onClick={() => filter('weekly')}>Weekly</button>
          </li>
          <li>
            <button onClick={() => filter('monthly')}>Monthly</button>
          </li>
          <li>
            <button onClick={() => filter('million')}>Million</button>
          </li>
          <li>
            <button onClick={() => filter('yearly')}>Yearly</button>
          </li>
          <li>
            <button onClick={() => filter('billion')}>Billion</button>
          </li>
        </ul>
      </section>
      <section className="nft-list-section">
        {nftsData && (
          <div className="nft-list-container flex justify-center">
            <NftList nfts={nftsData} />
          </div>
        )}
      </section>
    </div>
  )
}
