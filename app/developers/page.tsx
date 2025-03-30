import Image from "next/image";
import developerImage from "../../public/developer-card-image.jpg";

import "./developers.css";

export default function page() {
  return (
    <section className="services">
      <div>
        <div className="image-container">
          <Image
            src={developerImage}
            alt="An image of a housing development"
            className="services-image"
          />
        </div>
        <div className="content">
          <h1>Developer</h1>
          <div className="content-paragraph">
            <p>
              As the building industry continues to expand and competition grows
              fiercer, it is becoming ever more critical to utilise resources
              that are available to you, in order to win a site and commence
              building.
            </p>
          </div>
          <hr />
          <div className="content-paragraph">
            <p></p>
            <ul>
              <li className="font-bold">Pre-Development</li>
              <div className="inner-list-item">
                <li>
                  Land acquisition/bid appraisal work which incorporates high
                  end due diligence and technical reporting, inclusive of
                  constraints identification & initial engineering appraisals to
                  consider all costs.
                </li>
                <li>
                  Cost analysis tendering & instruction for recommended reports
                  ahead of planning
                </li>
                <li>Planning submission support and management.</li>
              </div>
              <li className="main-list-item">Live Development</li>
              <div className="inner-list-item">
                <li>Project lead on demolition, refurbs and new build.</li>
                <li>
                  Project management throughout any of the build stage,
                  inclusive of utility coordination.
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
                the services we can offer, please contact us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
