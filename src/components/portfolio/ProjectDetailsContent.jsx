import React from "react";
import Image from "next/image";

const ProjectDetailsContent = ({ data }) => {
  const projectData = data; // Assuming data contains one object per portfolio
  console.log("data", data);

  return (
    <>
      <div className="project-details-items">
        <div className="project-thumb">
          <Image
            src={`/assets/img/portfolio/${projectData.projectMainThumb}`}
            alt="Thumb"
            width={1175}
            height={515}
          />
        </div>
        <div className="top-info">
          <div className="row">
            <div className="col-xl-12 left-info">
              <div className="project-info mt-md-50 mt-xs-40 mb-40">
                <div className="content">
                  <ul className="project-basic-info">
                    <li>
                      Project <span>{projectData.project}</span>
                    </li>
                    <li>
                      Project Type <span>{projectData.projectType}</span>
                    </li>
                  </ul>
                  <ul className="social">
                    <li>
                      <h4>Link to Project: </h4>
                    </li>
                    <a
                      href={projectData.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Website
                    </a>
                  </ul>
                </div>
              </div>
              <h2>Overview</h2>
              <p>{projectData.overview}</p>
              <ul className="check-list mt-40">
                <li>
                  <h4>Features</h4>
                  <ul>
                    {projectData.features.map((feature, index) => (
                      <li key={index} style={{ listStyle: "circle" }}>
                        <strong>{feature.title}:</strong>
                        <br />
                        {feature.description}
                      </li>
                    ))}
                  </ul>
                </li>
                <li>
                  <h4>Technologies Used</h4>
                  <ul>
                    {projectData.technologies.map((tech, index) => (
                      <li key={index} style={{ listStyle: "circle" }}>
                        <strong>{tech.title}:</strong>
                        <br />
                        {tech.description}
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="main-content mt-40">
          <p>
            The {projectData.project} platform successfully engages young
            learners, making coding accessible and fun. It has received positive
            feedback from both parents and educators for its ease of use and
            educational value.
          </p>
          <div className="row">
            {projectData?.thumbs?.map((thumb, index) => (
              <div key={index} className="col-lg-6 col-md-6">
                <Image
                  width={515}
                  height={515}
                  src={`/assets/img/portfolio/${thumb}`}
                  alt="Thumb"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailsContent;
