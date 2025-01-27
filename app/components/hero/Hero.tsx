"use client";
import "./hero.css";

import gsap from "gsap";
import useGSAP from "@gsap/react";

import { useRef } from "react";

export default function Hero() {
  const heroRef = useRef(null);

  return (
    <section className="hero" ref={heroRef}>
      <div className="hero-content">
        <div className="hero-container-left">
          <h1 className="hero-heading">Enhance</h1>
          <h2 className="hero-subheading">Technical Consulting</h2>
        </div>
        <div className="hero-container-right"></div>
      </div>
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/hero.mp4" type="video/mp4" />
      </video>
    </section>
  );
}
