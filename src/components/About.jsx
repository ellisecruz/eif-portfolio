import { about, publicAsset } from "../content/site.js";
import { Prose } from "./Prose.jsx";
import { SectionDivider } from "./SectionDivider.jsx";
import { Strawberry } from "./PixelArt.jsx";

export function About() {
  return (
    <>
      <SectionDivider showStrawberry={false} />
      <section id="about" className="section">
        <div className="section-inner">
          <p className="eyebrow">02 · About</p>
          <h2>About me</h2>
          <article className="profile-card">
            <figure className="portrait">
              <img
                className="portrait-photo"
                src={publicAsset("profile-photo.jpg")}
                alt="Portrait of Hannah Ellise L. Cruz"
              />
            </figure>
            <div className="profile-details">
              <Strawberry className="profile-card-berry" />
              <p className="profile-kicker">Character card</p>
              <h3>Liz</h3>
              <p className="meta">Computer Science · Intelligent Systems</p>
              <p className="meta">Track · AI Solutions Development</p>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <Prose value={about.pending} />
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
