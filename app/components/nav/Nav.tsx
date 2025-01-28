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
    path: "/services",
    label: "Services",
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

const columnOneLinks = [
  {
    label: "Home",
    path: "/",
  },
];

const columnTwoLinks = [
  {
    label: "Services",
    path: "/services",
  },
];

const columnThreeLinks = [
  {
    label: "Portfolio",
    path: "/portfolio",
  },
  {
    label: "Contact",
    path: "/contact",
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
        .to(".overlay", {
          left: 0,
          duration: 0.1,
          ease: "power4.inOut",
        })
        .to(".overlay", {
          opacity: 1,
          duration: 0.1,
          delay: 0.1,
        })
        .to(".nav-mobile-menu", {
          left: 0,
          duration: 0.3,
          delay: -0.1,
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
          <p className="nav-logo">
            Enhance
            <br />
            Technical
            <br />
            Consulting
          </p>
        </div>
        <div>
          <div className="block lg:hidden nav-button" onClick={handleClick}>
            <p>Menu</p>
          </div>
          <div className="nav-large-menu">
            <div className="nav-large-container">
              {columnOneLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.path}
                    className="nav-large-link hover:underline"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="nav-large-container">
              {columnTwoLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.path}
                    className="nav-large-link hover:underline"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
            <div className="nav-large-container">
              {columnThreeLinks.map((link, index) => (
                <div key={index}>
                  <Link
                    href={link.path}
                    className="nav-large-link hover:underline"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
      <div className="overlay"></div>
      <div className="nav-mobile-menu">
        <div className="close-button" onClick={handleClick}>
          <button>Close</button>
        </div>
        <div>
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
      </div>
    </header>
  );
}
