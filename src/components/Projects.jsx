import { projects, showEmptySlot } from "../content/site.js";
import { Prose } from "./Prose.jsx";
import { SectionDivider } from "./SectionDivider.jsx";

const projectFilesUrl =
  "https://drive.google.com/drive/folders/1JA4nK9Pn0_4lrwFnDebsGTKYKl0kriyb?usp=sharing";

function CardImage({ image }) {
  if (image?.src) {
    return <img src={image.src} alt={image.alt} />;
  }
  return <div className="image-slot">{image?.alt || "Screenshot"} — add an image</div>;
}

export function Projects({ onOpen }) {
  return (
    <>
      <SectionDivider />
      <section id="projects" className="section">
        <div className="section-inner">
          <p className="eyebrow">04 · Projects</p>
          <h2>Things I've Built Along the Way</h2>
          <p className="lede">
            Open a card to read the problem, my part in the work, what we delivered, and what I learned.
          </p>
          <div className="project-grid">
            {projects.map((project) => (
              <article key={project.id} className="project-card">
                <CardImage image={project.images[0]} />
                <span className="card-kicker">Project</span>
                <h3 className="card-title">{project.name}</h3>
                <Prose value={project.category} />
                <Prose value={project.summary} />
                <button
                  type="button"
                  className="button button-small project-detail-button"
                  onClick={() => onOpen(project.id)}
                >
                  Open project details
                </button>
                <a
                  className="button button-small project-files-link"
                  href={projectFilesUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  Open project ZIP folder
                </a>
              </article>
            ))}
            {showEmptySlot ? (
              <article className="empty-slot">
                <h3>Another project</h3>
                <p>
                  Space for a second project. Add it in <code>src/content/site.js</code> when the name
                  and confirmed details are ready.
                </p>
              </article>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
