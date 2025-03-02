import "./servicesCard.css";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface cardProps {
  src: StaticImageData;
  alt: string;
  cardHeading: string;
}

export default function ServicesCard({ src, alt, cardHeading }: cardProps) {
  return (
    <div className="company-container">
      <div className="card-image-container">
        <Image src={src} alt={alt} className="card-image" />
      </div>
      <div className="card-heading">
        <h2>{cardHeading}</h2>
        <Link className="services-button hover:underline" href={"#"}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
