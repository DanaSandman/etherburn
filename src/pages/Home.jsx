import React, { useEffect, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import ReactDOM from "react-dom";
//Store
import { loadNfts } from "../store/nft/nft.action.js";
import { loadContractData } from "../store/contract/contract.action.js";
//Cmps
import { web3 } from "../services/web3.service.js";
import { NftList } from "../components/nft/NftList.jsx";
import { Loader } from "../components/common/Loader.jsx";
import { FAQ } from "../components/util/FAQ.jsx";
import NFT from "../assets/NFT.mp4";
//Img
import heroCard from "../assets/img/hero/heroCard.svg";
// import HeroImg from "../assets/img/FullLogo.png";
// import { svg }  from "../assets/img/hero/heroSvg.js";
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
//framer-motion
import { motion } from "framer-motion/dist/es/index";
import { useInView } from "react-intersection-observer";

// const loadSVG = container => {
//   var dataURL = svg.HeroImg
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", dataURL);
//   xhr.addEventListener("load", function(ev) {
//     var xml = ev.target.response;
//     var dom = new DOMParser();
//     var svg = dom.parseFromString(xml, "image/svg+xml");
//     container.appendChild(svg.rootElement);
//   });
//   xhr.send(null);
// };

export function Home() {
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nftModule.nfts);
  const ref = useRef();
  const [inViewRef, inView] = useInView();
  const [inViewRef1, inView1] = useInView();
  const [inViewRef2, inView2] = useInView();
  const [inViewRef3, inView3] = useInView();
  const linkedinTeamPath = {
    IsraelPerez: "https://www.linkedin.com/in/israel-perez-84b69322/",
    DanaSandman: "https://www.linkedin.com/in/dana-sandman-451a2b168/",
    MeirZach: "https://www.linkedin.com/in/meir-zach-a2565a17/",
  };

  useEffect(() => {
    dispatch(loadNfts());
    dispatch(loadContractData());
    // loadSVG(refContainer.current);
    web3.eth.getBlockNumber().then((num) => console.log("web3 block num", num));
  }, []);
  const setRefs = useCallback(
    (node) => {
      ref.current = node;
      inViewRef(node);
      inViewRef1(node);
    },
    [inViewRef, inViewRef1]
  );
  const setRefs1 = useCallback(
    (node) => {
      ref.current = node;
      inViewRef1(node);
    },
    [inViewRef1]
  );
  const setRefs2 = useCallback(
    (node) => {
      ref.current = node;
      inViewRef2(node);
    },
    [inViewRef2]
  );
  const setRefs3 = useCallback(
    (node) => {
      ref.current = node;
      inViewRef3(node);
    },
    [inViewRef3]
  );

  // if (!nfts)
  //   return (
  //     <div>
  //       {" "}
  //       <Loader />
  //     </div>
  //   );
  return (
    <motion.div
      className="home-page"
      animate={{ opacity: [0, 1] }}
      transition={{ duration: 3 }}
    >
      <section ref={setRefs} className="hero-section flex">
        <img className="hero-img" src={heroCard} alt="hero-image" />
        {/* <div className="hero-img" ref={refContainer} /> */}
        <div className="content-hero flex column">
          {inView && (
            <>
              <motion.h1
                animate={{ opacity: [0, 1], y: [100, 100, 0] }}
                transition={{ ease: "easeOut", duration: 1 }}
              >
                Own the burn<br></br>of Ether
              </motion.h1>
              <motion.p
                animate={{ opacity: [0, 1], y: [150, 0] }}
                transition={{ ease: "easeOut", delay: 0.7 }}
              >
                EtherBurn is an NFT collection that captures Ethereum burnt fee
                metadata. Each EtherBurn NFT features a unique 3D design
                generated by an algorithmic combination of timestamps, blocks
                and burnt fee data. Once you’ve minted it, nobody else can get
                it.
              </motion.p>
            </>
          )}
        </div>
      </section>
      <section className="cards-carousel-section flex column">
        {nfts ? (
          <div className="home-carousel">
            <NftList nfts={nfts} page="home" />
          </div>
        ) : (
          <Loader />
        )}
        <Link to="/collection" className="collection-link-main primery-btn">
          ALL COLLECTION
        </Link>
      </section>
      <section ref={setRefs1} className="eco-system-section flex column">
        {inView1 && (
          <>
            <motion.h1
              animate={{ opacity: [0, 1], y: [150, 0] }}
              transition={{ ease: "easeOut", delay: 0.3 }}
              className="gradient-color"
            >
              eco system
            </motion.h1>
            <motion.p
              className="p-description"
              animate={{ opacity: [0, 1], y: [150, 0] }}
              transition={{ ease: "easeOut", delay: 0.4 }}
            >
              Whether composed of daily, weekly, monthly or yearly burnt
              metadata, you can now own, buy and sell a piece of Ethereum
              history as an EtherBurn NFT.
              <br /> <br />
              EtherBurn will also pre-mint and auction off pivotal landmarks in
              Ethereum burn history e.g. each 1 million Ether burnt.
              <br /> <br /> The total EtherBurn collection supply is limited to
              1,559 items, a number that symbolizes Ethereum’s revolutionary
              EIP-1559 London Fork proposal.
              <br /> <br />
              Each EtherBurn NFT features a unique algorithmic 3D illustration
              composed of Ethereum block burn activity during the specified time
              period, creating a mesmerizing piece of digital art that
              represents the progress of the Ethereum ecosystem and blockchain
              era of history alike.
              <br /> <br />
            </motion.p>
            <motion.h1
              animate={{ opacity: [0, 1], y: [150, 0] }}
              transition={{ ease: "easeOut", delay: 0.7 }}
              className="gradient-color"
            >
              NFT Variants
            </motion.h1>
          </>
        )}
        <div className="item-types">
          <div className="daily flex column">
            {/* <img className="img" src={daily} alt="hero-image" /> */}
            <h4 className="variant">DAILY</h4>
            <p>
              <h4>When?</h4>Every day at 15:00:00 UTC <br />
              <br /> <h4>What is captured?</h4> The amount of Ether burnt the
              previous day <br />
              <br /> <h4>How many?</h4> One copy minted per day, beginning from
              the day of the first burn (August 5, 2021)
              <br />
              <br />
              <h4> Collection items: </h4> 1,311/1,559 Total supply
            </p>
          </div>
          <div className="weekly flex column">
            {/* <img className="img" src={weekly} alt="hero-image" /> */}
            <h4 className="variant">WEEKLY</h4>
            <p>
              <h4>When?</h4> Every week on Monday at 15:00:00 UTC <br />
              <br />
              <h4>What is captured?</h4> The amount of Ether burnt the previous
              week <br />
              <br /> <h4>How many?</h4> One copy minted per week, beginning from
              the genesis burn week (August 4-8, 2021) <br />
              <br />
              <h4> Collection items: </h4>187/1,559 Total supply
            </p>
          </div>
          <div className="monthly flex column">
            {/* <img className="img" src={monthly} alt="hero-image" /> */}
            <h4 className="variant">MONTHLY</h4>
            <p>
              <h4> When? </h4>On the first of every month at 15:00:00 UTC <br />
              <br /> <h4>What is captured?</h4> The amount of Ether burnt the
              previous month <br />
              <br /> <h4>How many?</h4> One copy minted per month, beginning
              from the genesis burnt month (August 2021) <br />
              <br /> <h4>Collection items: </h4>43/1,559 Total supply
            </p>
          </div>
          <div className="million flex column">
            {/* <img className="img" src={million} alt="hero-image" /> */}
            <h4 className="variant">MILLION</h4>
            <p>
              <h4> When?</h4> Each time the EtherBurn counter hits a 1 million
              total Ether burnt landmark, the NFT is captured the following day
              at 15:00:00 UTC <br />
              <br /> <h4>What is captured?</h4> The last 1 million Ether burnt{" "}
              <br />
              <br />
              <h4>How many?</h4> One copy minted per 1 million Ether burnt
              (first 1 million landmark reached November 24, 2021) <br />
              <br />
              <h4> Collection items:</h4> 12/1,559 Total supply
            </p>
          </div>
          <div className="yearly flex column">
            {/* <img className="img" src={yearly} alt="hero-image" /> */}
            <h4 className="variant">YEARLY</h4>
            <p>
              <h4> When? </h4>January 1st, 2022-24 at 15:00:00 UTC <br />
              <br /> <h4>What is captured? </h4>The amount of Ether burnt the
              previous year <br />
              <br /> <h4>How many?</h4> One copy minted per year, beginning from
              the year of the first burn (2021) <br />
              <br />
              <h4>Collection items: </h4>3/1,559 Total supply
            </p>
          </div>
          <div className="anniversary flex column">
            {/* <img className="img" src={anniversary} alt="hero-image" /> */}
            <h4 className="variant">ANNIVERSARY</h4>
            <p>
              <h4>When? </h4> Every August 5, on the anniversary of the first
              Ether burnt.
              <br />
              <br />
              <h4>What is captured? </h4> The amount of Ether burnt the previous
              year
              <br />
              <br />
              <h4>How many?</h4> One copy minted per anniversary (first
              anniversary will be August 5, 2022)
              <br />
              <br />
              <h4> Collection items: </h4> 3/1,559 Total supply 2022) Collection
              items: 3/1,559 Total supply
            </p>
          </div>
        </div>
      </section>
      <section ref={setRefs2} className="road-map-section flex column">
        {inView2 && (
          <>
            <motion.h1
              animate={{ opacity: [0, 1], y: [100, 100, 0] }}
              transition={{ ease: "easeOut", delay: 0.3 }}
              className="gradient-color"
            >
              Road Map
            </motion.h1>
            {/* <motion.p
              className="p-description"
              animate={{ opacity: [0, 1], y: [150, 0] }}
              transition={{ ease: "easeOut", delay: 0.7 }}
            >
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas
              eveniet error tenetur odit facilis, fuga ipsum eos dignissimos
              quam mollitia corporis quos inventore voluptatem natus maiores
              quas placeat iure aliquid!
            </motion.p> */}
          </>
        )}
        <div className="road-map">
          <div className="q1 flex column">
            {/* <img className="img" src={anniversary} alt="hero-image" /> */}
            <p>
              <h4 className="variant">Genesis Minting</h4>
              <br />
              Every EtherBurn NFT produced between the Genesis Burn Date (August
              5, 2021) and Presale End Date (Feb 1, 2022) will be sold to
              whitelisted wallets with a maximum allocation of one item per
              wallet.
              <ul>
                <li>180 daily items</li>
                <li>25 weekly items</li>
                <li>6 monthly items</li>
              </ul>
              <br />
              The 2021 Yearly NFT and 1 Millionth Burnt NFT stand as two
              landmark NFTs that will be raffled off to presale participants:
              <ul>
                <li>
                  The 2021 Yearly EtherBurn NFT does not simply represent a
                  yearly burn. It also bears significant symbolic value as the
                  first year of the burning mechanism
                </li>
                <li>
                  The 1 Millionth Burnt EtherBurn NFT represents a significant
                  landmark in the Ether burning mechanism, which has so far only
                  been reached once (November 24, 2021)
                </li>
              </ul>
            </p>
          </div>
          <div className="q2 flex column">
            {/* <img className="img" src={anniversary} alt="hero-image" /> */}
            <p>
              <h4 className="variant">Ongoing Minting</h4>
              <br />
              As soon as the EtherBurn NFT presale ends, items will be minted as
              follows:
              <ul>
                <li>
                  Daily NFTs will be dropped for minting every following day at
                  15:00:00 UTC{" "}
                </li>
                <li>
                  Weekly NFTs will be dropped for minting every Monday at
                  15:00:00 UTC (except Weekly NFTs that capture burn data from
                  the first week of every month, and will be raffled off to
                  stakers)
                </li>
                <li>
                  Monthly, Yearly, Millionth and Anniversary NFTs will be
                  pre-minted and put up for auction - with 60% of auction
                  revenues donated to charities. EtherBurn NFT stakers will be
                  invited to vote on the charitable organizations that will
                  receive auction revenue donations.
                </li>
              </ul>
            </p>
          </div>
          <div className="q3 flex column">
            {/* <img className="img" src={anniversary} alt="hero-image" /> */}
            <p>
              <h4 className="variant">Club 1559</h4>
              <br />
              <h4>1559 items collection</h4>
              The total EtherBurn NFT supply will be limited to 1,559 exclusive
              items. This supply limit is a symbolic amount representing
              Ethereum’s revolutionary EIP-1559 London Fork proposal.
              <br />
              <br />
              <h4>Stake-to-win!</h4>
              Two items will be raffled off to stakers as follows:
              <ul>
                <li>
                  The EtherBurn Weekly NFT that captures burn data from the
                  first week of every month
                </li>
                <li>
                  The EtherBurn Monthly NFT that captures burn data from the
                  first month of every year
                </li>
              </ul>
              To be eligible for entry, members simply need to stake an
              EtherBurn NFT in a secure vault. One raffle ticket will be
              obtained per staked EtherBurn NFT.
            </p>
          </div>
        </div>
      </section>
      <section ref={setRefs3} className="team-section flex column">
        <div className="content-area-team flex justify-center ">
          <div className="title">
            {inView3 && (
              <>
                <motion.h1
                  animate={{ opacity: [0, 1], y: [100, 100, 0] }}
                  transition={{ ease: "easeOut", duration: 1 }}
                  className="gradient-color"
                >
                  OUR TEAM
                </motion.h1>
                <motion.p
                  className="p-description"
                  animate={{ opacity: [0, 1], y: [150, 0] }}
                  transition={{ ease: "easeOut", delay: 0.7 }}
                >
                  We are lorem ipsum dolor sit<br></br> amet, consectetur
                </motion.p>
              </>
            )}
          </div>
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
        <h1 className="gradient-color">FAQ</h1>
        <div className="faq">
          <FAQ
            q="What is EtherBurn? &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            a="EtherBurn is an NFT collection capturing astounding digital collectibles produced using Ethereum burnt fee metadata.
"
          ></FAQ>
          <FAQ
            q="What makes each item one of a kind?"
            a="Each NFT features a unique 3D design generated from an algorithmic combination of timestamps, blocks and burnt fee data within a specified time range. Only one EtherBurn NFT shall ever represent a specific time range, so they are truly one of a kind. Once you’ve minted it, no one else can get it.
"
          ></FAQ>
          <FAQ
            q="How do I become a Club 1559 member?"
            a="Easy! Just stake an EtherBurn NFT in a secure vault and you will obtain a free ticket for the monthly Club 1559 raffle - as well as unlock many more exciting utilities as the EtherBurn NFT project grows.
"
          ></FAQ>
          <FAQ
            q="What is the Club 1559 monthly raffle?"
            a="The first Weekly NFT of every month will be raffled off to stakers. Each staked EtherBurn NFT will generate a participation ticket for its holder. There is no limit to the number of items you can stake and raffle tickets you can gain..
"
          ></FAQ>
          <FAQ
            q="What can I vote for? &nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"
            a="EtherBurn’s Monthly, Yearly, Millionth and Anniversary NFTs will be pre-minted and put up for an auction, with 60% of auction revenues donated to charities. Stakers will be invited to vote on the charitable organizations that will receive donations.
"
          ></FAQ>
          <FAQ
            q="Are there royalties from secondary sales?"
            a="Yes! Anytime a piece is resold, a 7.5% royalty will be sent directly to the EtherBurn DAO wallet.
"
          ></FAQ>
          <FAQ
            q="How many items can I mint during presale?"
            a="Whitelisted members will be able to mint one item per wallet. Public sale participants will be able to mint five items.
"
          ></FAQ>
          <FAQ
            q="When will I be able to start minting EtherBrun?"
            a="The EtherBurn Presale Event officially starts on February 15th, 2022. The EtherBurn Public Sale Event will launch on the _________. Both events will take place at 9:00 PM (21:00) GMT/UTC
"
          ></FAQ>
          <FAQ
            q="What is the number of items per collection?"
            a="The total supply of EtherBurn NFTs is limited to 1,559 items. This limitation is symbolic of Ethereum’s historic EIP-1559 London Fork proposal. 

          The 1,559 EtherBurn NFTs will be distributed among the various collections as follows:
          
          Daily collection: 1,311 items*
          Weekly collection: 187 items
          Monthly collection: 43 items
          One Millionth collection: 12 items*
          Yearly collection: 3 items
          Anniversary collection: 3 items 
          
          *Since 1 Millionth ETH burnt fees is an estimation, minor changes to a certain collection’s total number may occur e.g. the 1 Millionth collection could end up as 13 items at the expense of the Daily collection, which could drop from 1,311 to 1,310 items.          
"
          ></FAQ>
        </div>
      </section>
    </motion.div>
  );
}
