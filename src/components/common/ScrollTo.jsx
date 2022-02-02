import React, { useEffect } from "react";
// import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";

export function ScrollTo(item) {
  console.log('scrollto');
    // ev.preventDefault();
    // const { pathname } = useLocation();
    useEffect(() => {
    switch (item) {
      case "About":
        return scroller.scrollTo("hero-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      case "Roadmap":
          return scroller.scrollTo("road-map-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      case "Team":
        return scroller.scrollTo("team-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      case "Collection":
        return scroller.scrollTo("filter-collection", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
      default:
        return scroller.scrollTo("hero-section", {
          duration: 800,
          delay: 0,
          smooth: "easeInOutQuart",
        });
    };
  }, []);
  };