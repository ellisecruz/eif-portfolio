import { useEffect, useId, useRef } from "react";
import { Prose } from "./Prose.jsx";

function OutputItem({ item }) {
  if (item.href) {
    const external = item.href.startsWith("http");
    return (
      <li>
        <a href={item.href} {...(external ? { target: "_blank", rel: "noreferrer" } : {})}>
          {item.label}
        </a>
      </li>
    );
  }
  return (
    <li>
      <strong>{item.label}</strong>
      <Prose value={{ pending: true, text: item.note }} />
    </li>
  );
}

export function ProjectDialog({ project, onClose }) {
  const titleId = useId();
  const dialogRef = useRef(null);
  const screenshots = project.images.filter((image) => image.src);
  const screenshotNote = project.outputs.find((item) => item.label === "Screenshots")?.note;
  const outputs = project.outputs.filter((item) => item.label !== "Screenshots");

  useEffect(() => {
    const dialog = dialogRef.current;
    const previous = document.activeElement;
    const getFocusable = () =>
      [...dialog.querySelectorAll("a[href], button, textarea, input, select, [tabindex]:not([tabindex='-1'])")];

    getFocusable()[0]?.focus();

    function onKey(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKey);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previousOverflow;
      if (previous instanceof HTMLElement) previous.focus();
    };
  }, [onClose, project.id]);

  return (
    <div
      className="dialog-backdrop"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        className="dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        ref={dialogRef}
      >
        <div className="dialog-header">
          <p className="eyebrow">Project</p>
          <h2 id={titleId}>{project.name}</h2>
          <button type="button" className="button button-small" onClick={onClose}>
            Close
          </button>
        </div>

        <Prose value={project.category} />

        <section>
          <h3>Overview</h3>
          <Prose value={project.overview} />
        </section>

        <section>
          <h3>Screenshots</h3>
          {screenshots.length ? (
            <div className="project-screenshots">
              {screenshots.map((image) => (
                <figure key={image.alt}>
                  <img src={image.src} alt={image.alt} />
                  <figcaption>{image.alt}</figcaption>
                </figure>
              ))}
            </div>
          ) : (
            <Prose value={screenshotNote || "No screenshots have been added yet."} />
          )}
        </section>

        <section>
          <h3>Context and problem</h3>
          <dl>
            <dt>Problem</dt>
            <dd><Prose value={project.context.problem} /></dd>
            <dt>Why it mattered</dt>
            <dd><Prose value={project.context.why} /></dd>
            <dt>Who it was for</dt>
            <dd><Prose value={project.context.users} /></dd>
          </dl>
        </section>

        <section>
          <h3>My role and contributions</h3>
          <dl>
            <dt>Responsibility</dt>
            <dd><Prose value={project.role.responsibility} /></dd>
            <dt>Tasks I did</dt>
            <dd>
              {Array.isArray(project.role.tasks) ? (
                <ul className="task-list">
                  {project.role.tasks.map((task) => <li key={task}>{task}</li>)}
                </ul>
              ) : (
                <Prose value={project.role.tasks} />
              )}
            </dd>
            <dt>Decisions and ideas</dt>
            <dd><Prose value={project.role.decisions} /></dd>
            <dt>Collaboration</dt>
            <dd><Prose value={project.role.collaboration} /></dd>
          </dl>
        </section>

        {outputs.length || project.deliverables ? (
          <section>
            <h3>Outputs and deliverables</h3>
            {outputs.length ? (
              <ul className="output-list">
                {outputs.map((item) => (
                  <OutputItem key={item.label} item={item} />
                ))}
              </ul>
            ) : null}
            {project.deliverables ? (
              <>
                <h4>Deliverables</h4>
                <ul className="deliverables-list">
                  {project.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </>
            ) : null}
          </section>
        ) : null}

        <section>
          <h3>Skills demonstrated</h3>
          {Array.isArray(project.skills) ? (
            <ul className="skills">
              {project.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <Prose value={project.skills} />
          )}
        </section>

        <section>
          <h3>Learnings</h3>
          <dl>
            <dt>What I learned</dt>
            <dd><Prose value={project.learnings.learned} /></dd>
            <dt>What I would change</dt>
            <dd><Prose value={project.learnings.improve} /></dd>
          </dl>
        </section>
      </div>
    </div>
  );
}
