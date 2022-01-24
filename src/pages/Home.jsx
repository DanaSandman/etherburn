import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//Store
import { loadNfts } from "../store/nft/nft.action.js";
import { loadContractData } from "../store/contract/contract.action.js";
//Cmps
import { web3 } from "../services/web3.service.js";
import { NftList } from "../components/nft/NftList.jsx";
import { Loader } from "../components/common/Loader.jsx";
import { FAQ } from "../components/util/FAQ.jsx"
import NFT from "../assets/NFT.mp4";
//Img
import HeroImg from "../assets/img/FullLogo.png";
//imgs team
import TeamImg1 from "../assets/img/team/TeamImg1.png";
import TeamImg2 from "../assets/img/team/TeamImg2.jpeg";
import TeamImg3 from "../assets/img/team/TeamImg3.png";
//items-types
import daily from "../assets/img/items_types/daily.png";
import weekly from "../assets/img/items_types/weekly.png";
import monthly from "../assets/img/items_types/monthly.png";
import yearly from "../assets/img/items_types/yearly.png";
import million from "../assets/img/items_types/million.png";
import anniversary from "../assets/img/items_types/billion.png";

export function Home() {
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nftModule.nfts);
  const linkedinTeamPath = {
    IsraelPerez: "https://www.linkedin.com/in/israel-perez-84b69322/",
    DanaSandman: "https://www.linkedin.com/in/dana-sandman-451a2b168/",
    MeirZach: "https://www.linkedin.com/in/meir-zach-a2565a17/",
  };

  useEffect(() => {
    // window.scrollTo(0, 0);
    dispatch(loadNfts());
    dispatch(loadContractData());
    web3.eth.getBlockNumber().then((num) => console.log("web3 block num", num));
  }, []);

  if (!nfts)
    return (
      <div>
        {" "}
        <Loader />
      </div>
    );
  return (
    <div className="home-page">
      <section className="hero-section flex">
        <img className="hero-img" src={HeroImg} alt="hero-image" />
        <div className="content-hero flex column">
          <h1>
            Own the burn<br></br>of Ether
          </h1>
          <p>
            EtherBurn is an NFT collection produced from the Ethereum blockchain
            burnt fees. Each NFT is a unique 3d plot collectible generated from
            an algorithmic combination of the timestamps, blocks, base fee and
            gas used. Once you’ve minted it, no one else can get it.
          </p>
        </div>
      </section>
      <section className="cards-carousel-section flex column">
        {nfts ? (
          <div className="home-carousel">
            <NftList nfts={nfts} page="home" />
          </div>
        ) : (
          <h1>loding</h1>
        )}
        <Link to="/collection" className="collection-link-main primery-btn">
          ALL COLLECTION
        </Link>
      </section>
      <section className="eco-system-section flex column">
        <h2>Eco System</h2>
        <p className="p-description">
          Whether it's daily, monthly or yearly burn collectible, you can now
          own, buy and sell a piece of Ethereum history. mark pivotal moments in
          Ethereum history will be pre-minted and put up for auction.
        </p>
        <div className="item-types">
          <div className="daily flex column">
            <img className="img" src={daily} alt="hero-image" />
            <p>
              Every day at 00:00:00 UTC a unique piece of history is documented,
              a minted NFT recording forever the amount of Ether that was burned
              on this day. The NFT is algorithmically illustrated based on the
              Ethereum blocks’ activity during the documented day. Only one copy
              is minted per day (365 unique pieces only per year).
            </p>
          </div>
          <div className="weekly flex column">
            <img className="img" src={weekly} alt="hero-image" />
            <p>
              Every week, on Monday 00:00:00 UTC a unique piece of history is
              documented, a minted NFT recording forever the amount of Ether
              that was burned on this week. The NFT is algorithmically
              illustrated based on the Ethereum blocks’ activity during the
              documented week. Only one copy is minted per week (52 unique
              pieces only per year).
            </p>
          </div>
          <div className="monthly flex column">
            <img className="img" src={monthly} alt="hero-image" />
            <p>
              On the first of every month, on 00:00:00 UTC a unique piece of
              history is documented, a minted NFT recording forever the amount
              of Ether that was burned on this month. The NFT is algorithmically
              illustrated based on the Ethereum blocks’ activity during the
              documented month. Only one copy is minted per month (12 unique
              pieces only per year).
            </p>
          </div>
          <div className="million flex column">
            <img className="img" src={million} alt="hero-image" />
            <p>
              Each time the Ether burn counter hits a 1M total ETH burned
              landmark, a unique piece of history is documented, a minted NFT
              recording forever the amount of Ether that was burned on this
              period. The NFT is algorithmically illustrated based on the
              Ethereum blocks’ activity during the documented period. Only one
              copy is minted per 1 Million ETH burned (Once in each 100 days
              approximately).
            </p>
          </div>
          <div className="yearly flex column">
            <img className="img" src={yearly} alt="hero-image" />
            <p>
              On the first of every year, on 00:00:00 UTC a unique piece of
              history is documented, a minted NFT recording forever the amount
              of Ether that was burned on this year. The NFT is algorithmically
              illustrated based on the Ethereum blocks’ activity during the
              documented year. Only one copy is minted per year (1 unique piece
              only per year).
            </p>
          </div>
          <div className="anniversary flex column">
            <img className="img" src={anniversary} alt="hero-image" />
            <p>
              Each August 5 at 00:00:00 UTC a unique piece of history is
              documented to celebrate the anniversary date of the Ethereum burn.
              A minted NFT recording forever the amount of Ether that was burned
              on this period. The NFT is algorithmically illustrated based on
              the Ethereum blocks’ activity during the documented period. Only
              one copy is minted per each anniversary (1 unique piece only per
              year).
            </p>
          </div>
        </div>
      </section>
      <section className="road-map-section flex column">
        <h2>Road Map</h2>
        <p className="p-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
          eveniet error tenetur odit facilis, fuga ipsum eos dignissimos quam
          mollitia corporis quos inventore voluptatem natus maiores quas placeat
          iure aliquid!
        </p>
        <div className="road-map">
          <div className="q1 flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              quae exercitationem, odio nesciunt laboriosam commodi in nisi ad
              ex, perspiciatis debitis omnis voluptatibus ipsam, eaque sequi
              numquam? Iusto, aliquid vero!
            </p>
          </div>
          <div className="q2 flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              quae exercitationem, odio nesciunt laboriosam commodi in nisi ad
              ex, perspiciatis debitis omnis voluptatibus ipsam, eaque sequi
              numquam? Iusto, aliquid vero!
            </p>
          </div>
          <div className="q3 flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
              quae exercitationem, odio nesciunt laboriosam commodi in nisi ad
              ex, perspiciatis debitis omnis voluptatibus ipsam, eaque sequi
              numquam? Iusto, aliquid vero!
            </p>
          </div>
        </div>
      </section>
      <section className="team-section flex column">
        <div className="content-area-team flex justify-center ">
          <div className="title">
            <h2>OUR TEAM</h2>
            <p>
              We are lorem ipsum dolor sit<br></br> amet, consectetur
            </p>
          </div>
          {/* <button className="btn-team-about-us">
            <div className="btn-content">about us</div>
          </button> */}
        </div>
        <div className="members flex space-between">
          <div className="member1">
            <div className="member-img">
              <img src={TeamImg1} alt="member1-img"></img>
              <a
                href={linkedinTeamPath.IsraelPerez}
                className="linkedin-team-link"
              ></a>
            </div>
            <h3>israel perez</h3>
            <h4>The Crypto Guy</h4>
            <p>
              Entrepreneur, Founder, programer and Product designer with more
              than 10 years of experience.
            </p>
          </div>
          <div className="member2">
            <div className="member-img">
              <img src={TeamImg2} alt="member2-img"></img>
              <a
                href={linkedinTeamPath.DanaSandman}
                className="linkedin-team-link"
              ></a>
            </div>
            <h3>dana sandman</h3>
            <h4>Programming Lady</h4>
            <p>
              Entrepreneur, Founder, programer and Product designer with more
              than 10 years of experience.
            </p>
          </div>
          <div className="member3">
            <div className="member-img">
              <img src={TeamImg3} alt="member3-img"></img>
              <a
                href={linkedinTeamPath.MeirZach}
                className="linkedin-team-link linkedin-team3"
              ></a>
            </div>
            <h3>meir zach</h3>
            <h4>Financial Guru</h4>
            <p>
              Entrepreneur, Founder, programer and Product designer with more
              than 10 years of experience.
            </p>
          </div>
        </div>
      </section>
      <section className="faq-section">
          <FAQ q='wooww' a='trtrtrtr'></FAQ>
          <FAQ q='loremmm' a='fffff'></FAQ>
          <FAQ q='whaat is meta' a='hhh'></FAQ>
          <FAQ q='whaat is meta' a='blabla'></FAQ>
      </section>
    </div>
  );
}
