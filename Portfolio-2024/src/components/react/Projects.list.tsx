import type { FC } from "react";
import type { IProject } from "../../interfaces/IProject";

import "./Projects.list.style.css";

const ProjectsList: FC<{ projects: Array<IProject> }> = (props) => {
  const { projects } = props;

  return (
    <div className="project-list__content">
      {projects?.map((project, index) => (
        <ul key={index}>
          <li>
            <span className="project-list__title">{project.title}:</span>
            <span className="project-list__description">
              {project.description}
            </span>

            {project.demo && (
              <a href={project.demo} target="_blank">
                [Demo]
              </a>
            )}
            <a href={project.url} target="_blank">
              [GitHub]
            </a>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default ProjectsList;
