import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
//Store
import { loadNfts } from "../store/nft/nft.action.js";
import { loadContractData } from "../store/contract/contract.action.js";
//Cmps
import { NftListCarousel } from "../components/util/Carousel.jsx";
import { web3, web3service } from "../services/web3.service.js";
import  SVGComponent  from "../components/svg.jsx"
import NFT from '../assets/NFT.mp4';

//Img
import HeroImg from "../assets/img/Logo.png";
//imgs team
import TeamImg1 from "../assets/img/team/TeamImg1.png";
import TeamImg2 from "../assets/img/team/TeamImg2.png";
import TeamImg3 from "../assets/img/team/TeamImg3.png";
import TeamImg4 from "../assets/img/team/TeamImg4.png";


export function Home() {
  
  const dispatch = useDispatch();
  const nfts = useSelector((state) => state.nftModule.nfts);
  // const contractData = useSelector((state) => state.contractModule.contractData);
  const linkedinTeamPath = {
    IsraelPerez: "https://www.linkedin.com/in/israel-perez-84b69322/",
    DanaSandman: "https://www.linkedin.com/in/dana-sandman-451a2b168/",
    MeirZach: "https://www.linkedin.com/in/meir-zach-a2565a17/",
  };

  useEffect(() => {
    dispatch(loadNfts());
    dispatch(loadContractData());
    web3.eth.getBlockNumber().then((num) => console.log("web3 block num", num));
  }, []);

  return (
    <div className="home-page">
      <section className="hero-section flex">
          {/* <div className='account-details'> */}
          {/* <p>{props.currentAccount}</p>
          <p> Your Balance: {props.balance} ETH</p>
          <button onClick ={ {mint} > MINT</button> */}
           {/* {contractData && <p>{contractData.presalePrice}</p>} */}
           {/* {contractData && <p>{contractData.presaleMintMax}</p>} */}
           {/* {contractData && <p>{contractData.publicPresalePrice}</p>} */}
           {/* {contractData && <p>{contractData.publicPresaleMintMax}</p>} */}
           {/* {contractData && <p>{contractData.stage}</p>} */}
          {/* </div> */}
          {/* <SVGComponent/> */}
        <img className="hero-img" src={HeroImg} alt="hero-image" />
        <div className="content-hero flex column">
          <h2>Ether Burn</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque
            natus maiores illum, voluptatibus quidem dignissimos accusamus
            excepturi obcaecati eius sunt nisi facilis quod, dolor non molestias
            rerum quae velit reprehenderit?
          </p>
        </div>
      </section>
      <section className="cards-carousel-section flex column">
      {nfts ? ( <div className="home-carousel"><NftListCarousel /></div> ):(<h1>loding</h1>)}
        <Link to="/collection" className="collection-link-main">
          ALL COLLECTION
        </Link>
      </section>
      <section className="eco-system-section flex column">
        <h2>Eco System</h2>
        <p className="p-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis
          commodi sequi error eveniet culpa quia corporis, temporibus natus
          dolorem doloribus nesciunt porro nisi iure harum ipsam iste suscipit
          explicabo quae.
        </p>
        <div className="item-types">
          <div className="daily flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae exercitationem, odio nesciunt laboriosam commodi in nisi ad ex, perspiciatis debitis omnis voluptatibus ipsam, eaque sequi numquam? Iusto, aliquid vero!</p>
          </div>
          <div className="weekly flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae
              corporis ut obcaecati non consequuntur dolores asperiores
              laboriosam modi necessitatibus, quis excepturi enim accusantium
              perspiciatis in rem iusto neque temporibus ducimus!
            </p>
          </div>
          <div className="monthly flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              iste vero minima dolorem, perspiciatis amet fugit a accusantium
              voluptatem rerum quae sunt unde, recusandae reiciendis, voluptate
              laboriosam dicta reprehenderit? Ullam!
            </p>
          </div>
          <div className="million flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, eos cupiditate ut numquam, aspernatur fugiat, beatae
              aperiam ex optio repellendus dolore quia aut soluta ducimus.
              Aliquid cupiditate delectus iure esse.
            </p>
          </div>
          <div className="yearly flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, eos cupiditate ut numquam, aspernatur fugiat, beatae
              aperiam ex optio repellendus dolore quia aut soluta ducimus.
              Aliquid cupiditate delectus iure esse.
            </p>
          </div>
          <div className="billion flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Voluptas, eos cupiditate ut numquam, aspernatur fugiat, beatae
              aperiam ex optio repellendus dolore quia aut soluta ducimus.
              Aliquid cupiditate delectus iure esse.
            </p>
          </div>
        </div>
      </section>
      <section className="road-map-section flex column">
          <h2>Road Map</h2>
          <p className="p-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptas eveniet error tenetur odit facilis, fuga ipsum eos dignissimos quam mollitia corporis quos inventore voluptatem natus maiores quas placeat iure aliquid!
          </p>
          <div className="road-map">
            <div className="q1 flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae exercitationem, odio nesciunt laboriosam commodi in nisi ad ex, perspiciatis debitis omnis voluptatibus ipsam, eaque sequi numquam? Iusto, aliquid vero!</p>
            </div>
            <div className="q2 flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae exercitationem, odio nesciunt laboriosam commodi in nisi ad ex, perspiciatis debitis omnis voluptatibus ipsam, eaque sequi numquam? Iusto, aliquid vero!</p>
            </div>
            <div className="q3 flex">
            <img className="img" src={HeroImg} alt="hero-image" />
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore quae exercitationem, odio nesciunt laboriosam commodi in nisi ad ex, perspiciatis debitis omnis voluptatibus ipsam, eaque sequi numquam? Iusto, aliquid vero!</p>
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
              <a href={linkedinTeamPath.IsraelPerez} className="linkedin-team-link"></a>
            </div>
            <h3>
            israel<br></br>perez
            </h3>
            <h4>Co-Founder & CEO </h4>
            <p>
              Entrepreneur, Founder, programer and Product designer with more
              than 10 years of experience.
            </p>
          </div>
          <div className="member2">
            <div className="member-img">
              <img src={TeamImg2} alt="member2-img"></img>
              <a href={linkedinTeamPath.DanaSandman} className="linkedin-team-link"></a>
            </div>
            <h3>
            dana<br></br>sandman
            </h3>
            <h4>co-founder & Software Developer</h4>
            <p>
              Entrepreneur, Founder, programer and Product designer with more
              than 10 years of experience.
            </p>
          </div>
          <div className="member3">
            <div className="member-img">
              <img src={TeamImg3} alt="member3-img"></img>
              <a href={linkedinTeamPath.MeirZach} className="linkedin-team-link"></a>
            </div>
            <h3>
              meir<br></br>zach
            </h3>
            <h4>co-founder & CFO</h4>
            <p>
              Entrepreneur, Founder, programer and Product designer with more
              than 10 years of experience.
            </p>
          </div>
          <div className="member4">
            <div className="member-img">
              <img src={TeamImg4} alt="member4-img"></img>
              <a href={linkedinTeamPath.IsraelPerez} className="linkedin-team-link"></a>
            </div>
            <h3>
              israel<br></br>perez
            </h3>
            <h4>co-founder</h4>
            <p>
              Entrepreneur, Founder, programer and Product designer with more
              than 10 years of experience.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
//למחוק גם בסיאסאס
  {/* <section className="collection-data-section flex column">
        <div className="table-collection-data">
          <div className="flex column">
            <h3>13.8</h3>
            <h5>items</h5>
          </div>
          <div className="flex column">
            <h3>286</h3>
            <h5>owners</h5>
          </div>
          <div className="flex column">
            <h3>3.99 ETH</h3>
            <h5>floor price</h5>
          </div>
          <div className="flex column">
            <h3>12.8K ETH</h3>
            <h5>volume traded</h5>
          </div>
        </div>
      </section> */}//למחוק גם בסיאסאס
