import React from "react";
import Json from "../../Json/projectJson.json";

const Project = () => {
  const projectData = Json;
  return (
    <div>
      {projectData.map((data) => (
        <div key={data.id}>
          <ul>
            <li>
              <h1>{data.title}</h1>
              <h2>{data.dsc.point_1}</h2>
              <h3>{data.links.code}</h3>
            </li>
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Project;
