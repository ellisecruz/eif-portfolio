import { journey } from "../content/site.js";
import { SectionDivider } from "./SectionDivider.jsx";

export function Journey() {
  return (
    <>
      <SectionDivider />
      <section id="journey" className="section">
        <div className="section-inner">
          <p className="eyebrow">03 · Journey</p>
          <h2>My Journey Through EIF</h2>
          <ol className="journey-list">
            {journey.stops.map((stop, index) => (
              <li key={stop.id} className="journey-card">
                <span className="stop-index">{String(index + 1).padStart(2, "0")}</span>
                <h3>{stop.title}</h3>
                <p className="journey-description">{stop.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </>
  );
}
