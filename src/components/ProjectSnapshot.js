import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Projects = ({
  title,
  githuburl,
  imageurl,
  project,
  routename,
}) => {
  return (
    <Link
      to={{
        pathname: `/projects/${routename}`,
        info: { project },
      }}
    >
      <div class="col s12 m12 l6 xl4 wrapper">
        <div class="overlay">
          <div class="content">{title}</div>
        </div>
        <img class="responsive-img" src={imageurl} />
      </div>
    </Link>
  );
};

export default Projects;
