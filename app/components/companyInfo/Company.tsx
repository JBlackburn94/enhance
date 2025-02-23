import ServicesCard from "../servicesCard/ServicesCard";
import "./company.css";

import homeownerImage from "../../../public/homeowner-card-image.jpg";
import developerImage from "../../../public/developer-card-image.jpg";
import landownerImage from "../../../public/landowner-card-image.jpg";

export default function Portfolio() {
  return (
    <div className="company-section">
      <div className="container-wrapper">
        <ServicesCard
          cardHeading="Landowners"
          src={landownerImage}
          alt="An image of some land developement"
        />
        <ServicesCard
          cardHeading="Developers"
          src={developerImage}
          alt="An image of a new build housing development"
        />
        <ServicesCard
          cardHeading="Homeowners"
          src={homeownerImage}
          alt="An image of a refurbished kitchen"
        />
      </div>
    </div>
  );
}
