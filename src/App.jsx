import { useEffect, useState } from "react";
import { projects } from "./content/site.js";
import { Hud } from "./components/Hud.jsx";
import { Welcome } from "./components/Welcome.jsx";
import { About } from "./components/About.jsx";
import { Journey } from "./components/Journey.jsx";
import { Projects } from "./components/Projects.jsx";
import { Webinar } from "./components/Webinar.jsx";
import { ProjectDialog } from "./components/ProjectDialog.jsx";
import { Journal } from "./components/Journal.jsx";
import { NextAdventure } from "./components/NextAdventure.jsx";
import { BackToTop } from "./components/BackToTop.jsx";

function projectFromHash() {
  const match = window.location.hash.match(/^#project-([a-z0-9-]+)$/);
  const id = match?.[1];
  return projects.find((project) => project.id === id) ?? null;
}

export default function App() {
  const [openProject, setOpenProject] = useState(null);

  useEffect(() => {
    function sync() {
      setOpenProject(projectFromHash());
    }
    sync();
    window.addEventListener("hashchange", sync);
    window.addEventListener("popstate", sync);
    return () => {
      window.removeEventListener("hashchange", sync);
      window.removeEventListener("popstate", sync);
    };
  }, []);

  function openById(id) {
    const nextHash = `#project-${id}`;
    if (window.location.hash !== nextHash) {
      history.pushState(null, "", nextHash);
    }
    setOpenProject(projects.find((project) => project.id === id) ?? null);
  }

  function closeProject() {
    if (window.location.hash.startsWith("#project-")) {
      history.pushState(null, "", `${window.location.pathname}${window.location.search}`);
    }
    setOpenProject(null);
  }

  return (
    <>
      <a className="skip-link" href="#content">
        Skip to content
      </a>
      <Hud />
      <main id="content">
        <Welcome />
        <About />
        <Journey />
        <Projects onOpen={openById} />
        <Webinar />
        <Journal />
        <NextAdventure />
      </main>
      <BackToTop />
      {openProject ? <ProjectDialog project={openProject} onClose={closeProject} /> : null}
    </>
  );
}
