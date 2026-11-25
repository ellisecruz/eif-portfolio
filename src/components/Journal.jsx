import { journal } from "../content/site.js";
import { Prose } from "./Prose.jsx";
import { SectionDivider } from "./SectionDivider.jsx";

export function Journal() {
  return (
    <>
      <SectionDivider />
      <section id="journal" className="section">
        <div className="section-inner">
          <p className="eyebrow">06 · Journal</p>
          <h2>A Page From My Learning Journal</h2>
          <p className="card-aligned-copy">{journal.intro}</p>
          <div className="journal-grid">
            {journal.entries.map((entry) => (
              <article key={entry.id} className="journal-page">
                <h3>{entry.title}</h3>
                <Prose value={entry.body} />
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
