"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import "./nav.css";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const menuLinks = [
  {
    path: "/",
    label: "Home",
  },
  {
    path: "/about",
    label: "About",
  },
  {
    path: "/residential",
    label: "Residential",
  },
  {
    path: "/commercial",
    label: "Commercial",
  },
  {
    path: "/development",
    label: "Development",
  },
  {
    path: "/portfolio",
    label: "Portfolio",
  },
  {
    path: "/contact",
    label: "Contact",
  },
];

export default function Nav() {
  const container = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const tl = useRef<gsap.core.Timeline | null>(null);

  const handleClick = (): void => {
    setIsOpen(!isOpen);
  };

  useGSAP(
    () => {
      tl.current = gsap
        .timeline({ paused: true })
        .to(".nav-overlay", {
          top: "0",
          duration: 0.4,
          ease: "power4.inOut",
        })
        .to(".link", {
          translateY: 0,
          duration: 0.2,
          delay: -0.1,
          stagger: 0.1,
          ease: "power4.out",
        });
    },
    { scope: container }
  );

  useEffect(() => {
    if (isOpen) {
      tl.current?.play();
    } else {
      tl.current?.reverse();
    }
  });

  return (
    <header ref={container}>
      <nav className="navbar">
        <div>
          <p className="nav-logo">Enhance</p>
        </div>
        <div onClick={handleClick}>
          <p className="nav-button">{isOpen ? "Close" : "Menu"}</p>
        </div>
      </nav>
      <div className="nav-overlay">
        <div className="nav-left-container">
          {menuLinks.map((link, index) => (
            <div key={index} className="nav-link-container">
              <div className="link">
                <Link
                  href={link.path}
                  className="link-item"
                  onClick={handleClick}
                >
                  {link.label}
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div></div>
      </div>
    </header>
  );
}
