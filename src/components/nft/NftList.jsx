import { NftPreview } from './NftPreview.jsx';

// export function ArtList({ arts , search}) {
export function NftList({ nfts }) {
    return (
        <section className="nft-list-container">
        {/* {search && <div className="nft-list-search" > */}
            <div className="nft-list flex">
                {nfts.map(nft => <NftPreview nft={nft} key={nft.title} />)}
            </div>
            {/* </div>} */}
            {/* { !search && <div className="nft-list11" >
            <div className="nft-list">
                {nfts.map(nft => <NftPreview nft={nft} key={nft.title} />)}
            </div></div>} */}
        </section>
    )
}