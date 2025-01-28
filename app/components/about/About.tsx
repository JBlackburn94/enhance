import "./about.css";

import Link from "next/link";

export default function About() {
  return (
    <section className="about-section">
      <div className="about-wrapper">
        <h2 className="about-header">Who are Enhance?</h2>
        <p className="about-p">
          We are an experienced Development Technical Consultancy that provide a
          multi product service for all aspects of build and planning. If you
          require a simple extension application all the way through to full
          scale housing/commercial development we are your one stop shop
          advisory Technical expert.
        </p>
        <div className="about-link-wrapper">
          <Link
            className="hover:w-[200px] transition-all ease-in-out duration-200"
            href={"/"}
          >
            Contact
          </Link>
          <Link
            className="hover:w-[200px] transition-all ease-in-out duration-200"
            href={"/"}
          >
            Services
          </Link>
        </div>
      </div>
    </section>
  );
}
