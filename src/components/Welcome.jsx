import { profile } from "../content/site.js";
import { GardenBackdrop } from "./GardenBackdrop.jsx";
import { Strawberry } from "./PixelArt.jsx";

export function Welcome() {
  return (
    <section id="welcome" className="hero">
      <GardenBackdrop />
      <div className="hero-inner">
        <div className="hero-copy">
          <p className="eyebrow">{profile.program}</p>
          <h1>{profile.headline}</h1>
          <p className="hero-name">
            {profile.name} ({profile.nickname})
          </p>
          <p className="hero-track">{profile.track}</p>
          <p className="lede">{profile.welcome}</p>
          <p className="lede">{profile.subtitle}</p>
          <a className="button" href="#about">
            Explore My Journey
          </a>
        </div>
        <div className="hero-art">
          <Strawberry className="hero-berry berry-bob" />
        </div>
      </div>
    </section>
  );
}
