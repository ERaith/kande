import React from "react";
import {projectList} from "../assets/projectList";

import ProjectSnapshot from './ProjectSnapshot.js'

export const Projects = () => {
  const renderProjects = () => {
    return projectList.projects.map((project)=>{
      return (
        <ProjectSnapshot 
          title= {project.title}
          githuburl= {project.githuburl}
          imageurl= {project.imageurl}
          project = {project}
          routename = {project.routename}
        />
      )
    })
  }
  return  (
    <div className = "projects-container  grey " id="projects">
      <div class="row">
      {renderProjects()}

      </div>
    </div>
  )

};

export default Projects;
