import { hrefFor, links, nextAdventure, profile } from "../content/site.js";
import { Prose } from "./Prose.jsx";
import { SectionDivider } from "./SectionDivider.jsx";

export function NextAdventure() {
  return (
    <>
      <SectionDivider />
      <section id="next" className="section">
        <div className="section-inner">
          <p className="eyebrow">06 · Next</p>
          <h2>The Next Adventure</h2>
          <p className="lede">{nextAdventure.direction}</p>
          <div className="next-layout">
            {nextAdventure.fields.map((field) => (
              <article key={field.label} className="panel">
                <h3>{field.label}</h3>
                <Prose value={field.value} />
              </article>
            ))}
          </div>
          <blockquote className="closing">
            <p>{nextAdventure.closing}</p>
          </blockquote>
        </div>
      </section>
      <footer className="footer">
        <div className="section-inner">
          <div className="footer-line">
            <p className="footer-identity">
              <span>{profile.name}</span>
              <span>EIF Cohort 11</span>
              <span>AI Solution Development</span>
            </p>
            <ul className="contact-list">
              {links.map((link) => {
                const href = hrefFor(link);
                const external = href.startsWith("http");
                return (
                  <li key={link.id}>
                    {href ? (
                      <a href={href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
                        {link.label}
                      </a>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
