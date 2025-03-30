import Image from "next/image";
import homeownerImage from "../../public/homeowner-card-image.jpg";

import "./homeowners.css";

export default function page() {
  return (
    <section className="services">
      <div>
        <div className="image-container">
          <Image
            src={homeownerImage}
            alt="An image of a housing development"
            className="services-image"
          />
        </div>
        <div className="content">
          <h1>Homeowner</h1>
          <div className="content-paragraph">
            <p>
              Considering an extension to add more space or simply to increase
              the properties worth, submitting a planning application can be
              somewhat daunting if you are unfamiliar with what is required.
            </p>
            <p>
              At Enhance we can provide expert advice and support as much as its
              required to ensure a smooth planning application.
            </p>
          </div>
          <hr />
          <div className="content-paragraph">
            <h2>What we offer:</h2>
            <ul>
              <div className="inner-list-item">
                <li>Advice on permitted development rights.</li>
                <li>Submit planning applications for consideration.</li>
                <li>
                  Submit and coordinate building control application and
                  documentation.
                </li>
                <li>
                  Produce initial basic drawing designs & proposals for
                  submission.
                </li>
                <li>
                  Provide recommendations on local trustworthy Architects and
                  Engineers.
                </li>
                <li>
                  Provide reccomendations on local trustworthy contractors.
                </li>
              </div>
            </ul>
            <div className="content-paragraph">
              <p>
                The items above allow you the homeowner to have as much
                involvement or as little as you like. Advice, support and
                project management can be provided to suit your needs and your
                budget.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
