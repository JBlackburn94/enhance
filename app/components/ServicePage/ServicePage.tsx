import Image, { StaticImageData } from "next/image";

import "./servicePage.css";

interface ServicePageProps {
  title: string;
  content: string;
  extraContent?: string;
  listDesc: string;
  listItems: string[];
  image: StaticImageData;
}

export default function ServicePage({
  title,
  content,
  extraContent,
  listDesc,
  listItems,
  image,
}: ServicePageProps) {
  return (
    <div>
      <div className="image-container">
        <Image
          src={image}
          alt="An image of a housing development"
          className="services-image"
        />
      </div>
      <div className="content">
        <h1>{title}</h1>
        <div className="content-paragraph">
          <p>{content}</p>
          <p>{extraContent}</p>
        </div>
        <hr />
        <div className="content-paragraph">
          <p>{listDesc}</p>
          <ul>
            <li className="font-bold">Pre-Development</li>
            <div className="inner-list-item">
              <li>{listItems[0]}</li>
              <li>{listItems[1]}</li>
              <li>Planning submission support and management.</li>
            </div>
            <li className="main-list-item">Live Development</li>
            <div className="inner-list-item">
              <li>Project lead on demolition, refurbs and new build.</li>
              <li>
                Project management throughout any of the build stage, inclusive
                of utility coordination.
              </li>
              <li>Planning & building control condition discharge.</li>
            </div>
            <li className="main-list-item">Post-Development</li>
            <div className="inner-list-item">
              <li>Adoption and site closure services.</li>
            </div>
          </ul>
          <div className="content-paragraph">
            <p>
              Should you have any queries or wish to enquire further regarding
              the services we can offer, please contact:{" "}
              <a href="mailto:hollie@enhancetechconsulting.co.uk">
                hollie@enhancetechconsulting.co.uk
              </a>{" "}
              or call on 07908941301.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
