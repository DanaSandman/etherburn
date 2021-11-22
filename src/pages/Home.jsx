import React from "react";
import HeroImg from "../assets/img/Logo.png";
import { Link } from "react-router-dom";

export function Home() {
  return (
      <div className="home-page">
        <section className="hero-section flex column">
          <img className='hero-img' src={HeroImg} alt="hero image" />
          <h2>Ether Burn</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque natus maiores illum, voluptatibus quidem dignissimos accusamus excepturi obcaecati eius sunt nisi facilis quod, dolor non molestias rerum quae velit reprehenderit?</p>
        </section>
        <section className='home-section2'>
        <p>woow</p>
        </section>
        <section className='home-section3'>
          <h2>section3</h2>
        </section>
      </div>
  );
}
