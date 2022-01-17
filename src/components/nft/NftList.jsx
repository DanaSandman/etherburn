import { NftPreview } from './NftPreview.jsx';

export function NftList({ nfts, page }) {
        return (
            <section className="nft-list-commponent flex">
                <div className={"nft-list flex" + (page === 'collection' ? ' wrap margin-zero' : '')}>
                    {nfts.map(nft => <NftPreview nft={nft} page={page} key={nft.title} />)}
                </div>
            </section>
        )
   

}