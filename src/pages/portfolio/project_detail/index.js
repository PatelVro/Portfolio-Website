// src/components/ProjectDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import { dataportfolio } from '../../../content_option'; // Adjust the import path as needed

const ProjectDetail = () => {
    const { projectId } = useParams();
    const project = dataportfolio.find((item) => item.title === projectId);

    if (!project) {
        return <div>Project not found!</div>;
    }

    return (
        <div className="project-detail">
            <h1>{project.title}</h1>
            <img src={project.img} alt={project.title} />
            <p>{project.description}</p>
            <h3>Details</h3>
            <p>{project.details}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Live Project</a>
        </div>
    );
};

export default ProjectDetail;
