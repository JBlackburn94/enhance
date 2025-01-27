"use client";
import "./about.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { useRef, useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutRef = useRef(null);

  const tl = gsap.timeline();

  useGSAP(() => {
    tl.to(".about", {
      margin: "20px",
      boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
      scrollTrigger: {
        trigger: ".about",
        start: "top 50%",
        end: "center 50%",
        toggleActions: "play reverse play reverse",
        scrub: true,
      },
    })
      .to(".about-header", {
        opacity: 1,
        x: 0,
        scrollTrigger: {
          trigger: ".about",
          start: "-20% 50%",
          end: "20% 50%",
          toggleActions: "play reverse play reverse",
          scrub: true,
        },
      })
      .to(".about-content", {
        y: 0,
        scrollTrigger: {
          trigger: ".about",
          start: "-20% 50%",
          end: "20% 50%",
          toggleActions: "play reverse play reverse",
          scrub: true,
        },
      });
  });

  return (
    <section className="about" ref={aboutRef}>
      <h2 className="about-header">About</h2>
      <div className="about-content-wrapper">
        <p className="about-content">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ipsum
          odio quibusdam ullam. Blanditiis, velit, dolor vel aliquid quasi
          tempora, sapiente aliquam hic quaerat optio magnam inventore ducimus!
          Magni, inventore?
        </p>
      </div>
    </section>
  );
}
