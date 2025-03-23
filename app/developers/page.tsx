import ServicePage from "../components/ServicePage/ServicePage";
import developerImage from "../../public/developer-card-image.jpg";

import "./developers.css";

export default function page() {
  return (
    <section className="services">
      <ServicePage
        image={developerImage}
        title="Developers"
        content="As the building industry continues to expand and competition grows
            fiercer, it is becoming ever more critical to utilise resources that
            are available to you. That's where we come in."
        extraContent="At Enhance we empower developers to foster collaborative working to
            further drive progression within their business. We offer a wide
            range of support that is varied to each individual client at any
            stage of the build process."
        listDesc="The 3 key stages of developer services we provide are:"
        listItems={[
          "Land acquisition/bid appraisal work which incorporates high end due diligence and technical reporting, inclusive of constraints identification & initial engineering appraisals to consider all costs.",
        ]}
      />
    </section>
  );
}
