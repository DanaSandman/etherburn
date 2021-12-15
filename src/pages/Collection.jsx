import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NftList } from '../components/nft/NftList.jsx'
//Store
import { loadNfts } from '../store/nft/nft.action.js'

export function Collection() {
  const dispatch = useDispatch()
  // const [category, setCategory] = useState("{}");
  const nfts = useSelector((state) => state.nftModule.nfts)
  const [nftsData, setNftsData] = useState()

  useEffect(() => {
    dispatch(loadNfts())
  }, [])

  useEffect(() => {
    setNftsData(nfts)
  }, [nfts])

  const filter = (category) => {
    console.log('filter category', category)
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
        <ul className="margin-auto flex">
          <li>
            <button onClick={() => filter('all')}>ALL</button>
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
          <div className="nft-list-container flex">
            <NftList nfts={nftsData} />
          </div>
        )}
        {/* :(
        <div>
          <h2>Loading...</h2>
        </div>
        ) */}
      </section>
    </div>
  )
}
