import Image from "next/image";
import landownerImage from "../../public/landowner-card-image.jpg";

import "./landowners.css";

export default function page() {
  return (
    <section className="services">
      <div>
        <div className="image-container">
          <Image
            src={landownerImage}
            alt="An image of a housing development"
            className="services-image"
          />
        </div>
        <div className="content">
          <h1>Landowner/Agent</h1>
          <div className="content-paragraph">
            <p>
              When looking to sell a parcel of land for development, whether
              that be Greenfield/Greyfield/Brownfield, it is imperative that a
              suitable pack of information is available for review. The more
              information provided from day 1, the more comparable bids you will
              receive, in order to agree heads of terms.
            </p>
            <p>
              Enhance can provide expert advice and manage what needs to be
              considered and advise on beneficial reports to be produced ahead
              of bid to avoid further reductions to the land price further down
              the line.
            </p>
          </div>
          <hr />
          <div className="content-paragraph">
            <h2>What we offer:</h2>
            <ul>
              <div className="inner-list-item">
                <li>List of reports to include in a vendor's pack.</li>
                <li>
                  Existing constraints associated with the site for
                  consideration.
                </li>
                <li>Existing service records for review.</li>
                <li>
                  Investigate likely outfalls for both foul and surface water
                  drainage.
                </li>
                <li>
                  Review and identification of recommendations within reports.
                </li>
                <li>
                  Liaise with planning consultant and/or other 3rd parties as
                  necessary.
                </li>
                <li>
                  Provide anticipated likely costs for additional
                  investigations.
                </li>
                <li>
                  Provide a{" "}
                  <span className="underline">Technical Summaries Report</span>{" "}
                  for consideration as part of the bids which encompasses the
                  information as outlined above.
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
