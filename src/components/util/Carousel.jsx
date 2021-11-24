import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 2 },
  1024: { items: 3 },
};

const items = [
  <div className="item primary-color" data-value="1">
    1
  </div>,
  <div className="item secondary-color" data-value="2">
    2
  </div>,
  <div className="item primary-color" data-value="3">
    3
  </div>,
  <div className="item secondary-color" data-value="4">
    4
  </div>,
  <div className="item primary-color" data-value="5">
    5
  </div>,
];

export function Carousel() {
  return (
    <AliceCarousel
      mouseTracking
      items={items}
      responsive={responsive}
      controlsStrategy="alternate"
    />
  );
}
