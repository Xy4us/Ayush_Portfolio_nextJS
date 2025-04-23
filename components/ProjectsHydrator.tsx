"use client";

import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addProjects } from "@/utils/projectsSlice";

interface ProjectsHydratorProps {
  projects: any; // Define the type of projects if needed
}

const ProjectsHydrator: React.FC<ProjectsHydratorProps> = ({ projects }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Dispatch the projects data to the Redux store
    dispatch(addProjects(projects));
  }, [dispatch, projects]);

  return null; // This component doesn't render anything
};

export default ProjectsHydrator;
