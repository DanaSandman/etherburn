import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { NftPreview } from "../nft/NftPreview.jsx";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

let gNfts = [];
export function NftList({ nfts }) {
  console.log("carousel list", nfts);
  gNfts = nfts;
  return (
    <div>
      <Carousel nfts={gNfts} />
    </div>
  );
}

export function Carousel(gNfts) {
  const items = [];
  gNfts.nfts.map((nft) => {
    var i = 0;
    items.push(
      <div className="item" data-value={`"${i}"`}>
        <NftPreview nft={nft}/>
      </div>
    );
    return items;
  });

  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
}
