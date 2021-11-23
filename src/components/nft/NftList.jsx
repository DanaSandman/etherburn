import { NftPreview } from "./NftPreview.jsx";

export function NftList({ nfts }) {
  console.log('list', nfts);
  return (
    <section className="nft-list-container">
        <div className="nft-list flex">
          {nfts.map((nft) => (
            <NftPreview nft={nft} key={nft._id} />
          ))}
        </div>
    </section>
  );
}
