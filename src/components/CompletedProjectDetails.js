import React from 'react';
import { useParams } from 'react-router-dom';

function ProjectDetails() {
  // Access the project ID from the URL parameters
  const { id } = useParams();

  // Here you can fetch the project details based on the ID
  // For demonstration purposes, let's just display the ID
  return (
    <div>
      <h1>Project Details</h1>
      <p>Project ID: {id}</p>
      {/* Display other project details here */}
    </div>
  );
}

export default ProjectDetails;