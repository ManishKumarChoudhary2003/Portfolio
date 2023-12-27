import React from "react";
import Json from "../../Json/ExperienceJson.json";

const Experience = () => {
  const experienceData = Json;
  return (
    <div>
      {experienceData.map((data) => (
        <div key={data.id}>
          <ul>
            <li>
              <h1>{data.title}</h1>
              <h2>{data.role}</h2>
              <h3>{data.location}</h3>
            </li>
          </ul>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Experience;
