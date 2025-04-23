"use client";

import React, { useEffect } from "react";

interface ProjectDetailsClientProps {
  id: string;
}

const ProjectDetailsClient: React.FC<ProjectDetailsClientProps> = ({ id }) => {
  useEffect(() => {
    const fetchProjectDetails = async () => {
      try {
        const response = await fetch(
          `https://api.vercel.com/v9/projects/${id}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_API_KEY}`,
            },
            cache: "no-store",
          }
        );

        if (!response.ok) {
          throw new Error(
            `Failed to fetch project details: ${response.statusText}`
          );
        }

        const project = await response.json();

        // Log the API response to the browser console
        console.log("API Response:", project);
      } catch (error) {
        console.error("Error fetching project details:", error);
      }
    };

    fetchProjectDetails();
  }, [id]);

  return (
    // <div className="p-8">
    //   {/* @ts-ignore */}
    //   <h1 className="text-3xl font-bold">{project?.name}</h1>
    //   <p className="text-gray-600 mt-4">
    //     {/* @ts-ignore */}
    //     {project?.description || "No description available."}
    //   </p>
    //   <div className="mt-6">
    //     <h2 className="text-xl font-semibold">Details:</h2>
    //     <ul className="list-disc ml-6 mt-2">
    //       {/* @ts-ignore */}
    //       <li>Framework: {project?.framework || "N/A"}</li>
    //       <li>
    //         {/* @ts-ignore */}
    //         Created At: {new Date(project?.createdAt).toLocaleDateString()}
    //       </li>
    //       <li>
    //         {/* @ts-ignore */}
    //         Updated At: {new Date(project?.updatedAt).toLocaleDateString()}
    //       </li>
    //     </ul>
    //   </div>
    // </div>

    <div>hi</div>
  );
};

export default ProjectDetailsClient;
