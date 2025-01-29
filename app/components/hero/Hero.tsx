"use client";
import "./hero.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".hero-video", {
      padding: "10rem",
      scrollTrigger: {
        trigger: ".hero-content",
        start: "40% 30%",
        end: "bottom 30%",
        scrub: true,
      },
    }).to(".hero-overlay", {
      opacity: 1,
      scrollTrigger: {
        trigger: ".hero-content",
        start: "60% 10%",
        end: "bottom 30%",
        scrub: true,
      },
    });
  });

  return (
    <section className="hero">
      <div className="hero-overlay"></div>
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
