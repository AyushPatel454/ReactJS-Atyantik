import { useState } from "react";
import NewProject from "./components/NewProject.jsx";
import NoProjectSelected from "./components/NoProjectSelected.jsx";
import ProjectsSidebar from "./components/ProjectsSidebar.jsx";

function App() {
  const [projectState, setProjectState] = useState({
    projects: [],
    selectedProjectId: undefined,
  });

  // ---> New Project (start)
  function handleStartAddProject() {
    setProjectState((prevState) => ({
      ...prevState,
      selectedProjectId: null,
    }));
  }

  // ---> Add new project (end)
  function handleAddProject(projectData) {
    setProjectState((prevState) => {
      const projectId = Math.random();
      const newProject = {
        ...projectData,
        id: projectId
      }

      return {
      ...prevState,
      selectedProjectId: undefined,
      projects: [...prevState.projects, newProject],
    }});
  }

  let content;

  if(projectState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if(projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar projects={projectState.projects} onStartAddProject={handleStartAddProject} />
        {content}
      </main>
    </>
  );
}

export default App;
