"use client";
import "./hero.css";

import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-container">
          <div>
            <h1 className="hero-heading">Enhance</h1>
            <h2 className="hero-subheading">Technical Consulting</h2>
          </div>
          <p className="tagline">Enhance, Support, Thrive</p>
        </div>
      </div>
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
