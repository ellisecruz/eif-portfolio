import { webinar } from "../content/site.js";
import { SectionDivider } from "./SectionDivider.jsx";

export function Webinar() {
  return (
    <>
      <SectionDivider />
      <section id="webinar" className="section">
        <div className="section-inner">
          <p className="eyebrow">05 · Webinar</p>
          <h2>Webinar</h2>
          <article className="webinar-card">
            <img className="webinar-poster" src={webinar.image} alt={webinar.imageAlt} />
            <div className="webinar-details">
              <h3>{webinar.title}</h3>
              <p className="webinar-feature">{webinar.feature}</p>
              <p>{webinar.description}</p>
              <p className="webinar-event-details">
                📞 Via Zoom
                <br />
                Date: November 13, 2026
              </p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
