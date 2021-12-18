import { NftPreview } from './NftPreview.jsx';

export function NftList({ nfts }) {

    return (
        <section className="nft-list-commponent flex">
            <div className="nft-list flex">
                {nfts.map(nft => <NftPreview nft={nft} key={nft.title} />)}
            </div>
        </section>
    )
}