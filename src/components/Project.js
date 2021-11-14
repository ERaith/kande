import React from "react";
import { projectList } from "../assets/projectList";

export const Project = (props) => {
  const project = projectList.projects.find((project) => {
    return props.location.pathname.includes(project.routename);
  });

  const { about, challenges, wins, stack, stackBadges } = project.description;

  const renderBadges = () => {
    const badgeHTML = stackBadges.map((badge) => {
      return (
        <span class="col-content s12 m12 l2 mb-2 white-text badge blue">
          {badge}
        </span>
      );
    });
    return badgeHTML;
  };

  const renderList = () => {
    const list = challenges.text.map((item) => {
      return <li>{item}</li>;
    });
    return list;
  };

  const renderProject = () => {
    return (
      <div className="grey lighten-2 spacer" id="projects">
        <div class="row">
          <div class="col s12 m12 l7 p-5">
            <div class="row">
              <img class="responsive-img" src={about.url}></img>
            </div>
            <div class="row">
              <img class="responsive-img" src={challenges.url}></img>
            </div>
            <div class="row">
              <img class="responsive-img" src={wins.url}></img>
            </div>
          </div>
          <div class="col s12 m12 l5 p-2">
            <div class="row">
              <h3 class="">{project.title}</h3>
              <div class="col s12 m12 l12 ">
                Github Link: <a href={project.githuburl}>{project.githuburl}</a>
              </div>
              <div class="col s12 m12 l12 ">
                Live Link: <a href={project.liveSite}>{project.liveSite}</a>
              </div>
              <div class="col s12 m12 l12 ">{renderBadges()}</div>
            </div>

            <div class="row">
              <p>
                <strong>Description</strong>
              </p>
              <p>{about.text}</p>
            </div>
            <div class="row">
              <p>
                <strong>Challenges</strong>
              </p>

              <ul>{renderList()}</ul>
            </div>
            <div class="row">
              <p>
                <strong>Wins</strong>
              </p>

              <p>{wins.text}</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return renderProject();
};

export default Project;
