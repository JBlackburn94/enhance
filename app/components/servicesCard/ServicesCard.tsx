import "./servicesCard.css";
import Image, { StaticImageData } from "next/image";

interface cardProps {
  src: StaticImageData;
  alt: string;
  cardHeading: string;
}

export default function ServicesCard({ src, alt, cardHeading }: cardProps) {
  return (
    <div className="company-container hover:scale-[101%] transition-all ease-in-out duration-150">
      <div className="card-image-container">
        <Image src={src} alt={alt} className="card-image" />
      </div>
      <div className="card-heading">
        <h2>{cardHeading}</h2>
      </div>
    </div>
  );
}
