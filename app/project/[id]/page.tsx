// import Contact from "@/components/Contact";
// import CopyrightFooter from "@/components/CopyrightFooter";
// import Header from "@/components/Header";
// import Image from "next/image";
// import React from "react";

// interface ProjectDetailsProps {
//   params: { id: string }; // Define the type for params
// }

// const ProjectDetails = async ({ params }: { params: { id: string } }) => {
//   // Ensure params is awaited properly
//   const id = params?.id;

//   if (!id) {
//     return (
//       <div className="p-8 flex min-h-[100vh] min-w-[100vw]  items-center justify-center">
//         <h1 className="text-3xl font-bold">Error</h1>
//         <p className="text-gray-600 mt-4">Project ID is missing.</p>
//       </div>
//     );
//   }

//   try {
//     const response = await fetch(`https://api.vercel.com/v9/projects/${id}`, {
//       method: "GET",
//       headers: {
//         Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_API_KEY}`,
//       },
//       cache: "no-store", // Ensure fresh data is fetched
//     });

//     if (!response.ok) {
//       throw new Error(
//         `Failed to fetch project details: ${response.statusText}`
//       );
//     }

//     const project = await response.json();
//     // Log the API response to the terminal
//     console.log("API Response:", project);

//     // Format the name
//     const formatName = (name: string) => {
//       return name
//         .replace(/-/g, " ") // Replace all "-" with a space
//         .split(" ") // Split the name into words
//         .map(
//           (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
//         ) // Capitalize the first letter of each word
//         .join(" "); // Join the words back together
//     };

//     const getMonthsAgo = (timestamp: number): string => {
//       const createdAt = new Date(timestamp); // Convert timestamp to Date object
//       const now = new Date(); // Current date
//       const diffInMonths =
//         (now.getFullYear() - createdAt.getFullYear()) * 12 +
//         (now.getMonth() - createdAt.getMonth()); // Calculate the difference in months

//       return diffInMonths > 0
//         ? `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`
//         : "Less than a month ago";
//     };

//     return (
//       // <div className="p-8">
//       //   <h1 className="text-3xl font-bold">{project.name}</h1>
//       //   <p className="text-gray-600 mt-4">
//       //     {project.description || "No description available."}
//       //   </p>
//       //   <div className="mt-6">
//       //     <h2 className="text-xl font-semibold">Details:</h2>
//       //     <ul className="list-disc ml-6 mt-2">
//       //       <li>Framework: {project.framework || "N/A"}</li>
//       //       <li>
//       //         Created At: {new Date(project.createdAt).toLocaleDateString()}
//       //       </li>
//       //       <li>
//       //         Updated At: {new Date(project.updatedAt).toLocaleDateString()}
//       //       </li>
//       //     </ul>
//       //   </div>
//       // </div>

//       <div className="flex flex-col items-center ">
//         {/* Header */}
//         <Header />

//         {/* main container */}
//         <div className="mt-[130px] flex flex-col w-full items-center gap-y-10">
//           {/* heading */}
//           <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white ">
//             Project Details
//           </div>
//           {/* @ts-ignore */}
//           <h1 className="text-6xl font-sans font-medium tracking-wide">
//             {formatName(project?.name)}
//           </h1>
//           {/* About Project */}
//           <p className="text-[#999999] text-lg font-sans text-center w-[50%]">
//             {/* @ts-ignore */}
//             {project?.env?.find((item: any) => item.key === "ABOUT_PROJECT")
//               ?.comment || "No description available."}
//           </p>

//           {/* Links */}
//           <div className="w-[30%] flex items-center justify-between">
//             {/*  constant web design  */}
//             <div className="rounded-lg py-2 px-5 border-[#333333] border-2 bg-[#0e0e0e] text-[#999999] capitalize flex items-center gap-x-2 ">
//               <i className="fa-solid fa-seedling"></i>
//               Web Design
//             </div>

//             {/* created at time  */}
//             <div className="rounded-lg py-2 px-5 border-[#333333] border-2 bg-[#0e0e0e] text-[#999999] capitalize flex items-center gap-x-2 ">
//               <i className="fa-solid fa-clock"></i>{" "}
//               {getMonthsAgo(project?.createdAt)}
//             </div>

//             {/* Live link */}
//             <div className="rounded-lg py-2 px-5 border-[#333333] border-2 bg-[#0e0e0e] text-[#999999] capitalize flex items-center gap-x-2">
//               <i className="fa-solid fa-earth-americas"></i>
//               {(() => {
//                 // Check if LIVE_LINK exists in the env array
//                 const liveLinkFromEnv = project?.env?.find(
//                   (item: any) => item.key === "LIVE_LINK"
//                 )?.comment;

//                 // Fallback to targets.production.alias[0] if LIVE_LINK is not found
//                 const liveLinkFromAlias =
//                   project?.targets?.production?.alias?.[0];

//                 const liveLink = liveLinkFromEnv || liveLinkFromAlias;

//                 return liveLink ? (
//                   <a
//                     href={
//                       liveLink.startsWith("http")
//                         ? liveLink
//                         : `https://${liveLink}`
//                     } // Ensure the link starts with "https://"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="hover:underline"
//                   >
//                     Visit project
//                   </a>
//                 ) : (
//                   "No live link available"
//                 );
//               })()}
//             </div>
//           </div>

//           {/* image */}
//           <div>
//             <Image
//               src={
//                 project?.env?.find((item: any) => item.key === "BG_IMAGE")
//                   ?.comment || "/default-image.png"
//               }
//               alt="Project Preview"
//               width={500}
//               height={300}
//               className="rounded-3xl border-2 border-[#333333]"
//               priority // Add this property to load the image immediately
//             />
//           </div>

//           {/* Detial container */}
//           <div className="w-[45%] flex items-start flex-col mt-[50px]">
//             {/* Project overview */}
//             <div className="flex flex-col items-start gap-y-5">
//               <h1 className="text-3xl font-sans font-medium tracking-wide">
//                 Project Overview
//               </h1>
//               <p className="text-[#999999] pl-8 text-justify ">
//                 {project?.env?.find(
//                   (item: any) => item.key === "PROJECT_OVERVIEW"
//                 )?.comment || "No project overview available."}
//               </p>
//             </div>

//             {/* Key Features */}
//             <div className="flex flex-col items-start gap-y-5 mt-8">
//               <h1 className="text-3xl font-sans font-medium tracking-wide">
//                 Key Features
//               </h1>
//               <ul className="list-disc pl-8 text-[#999999]">
//                 {project?.env
//                   ?.find((item: any) => item.key === "KEY_FEATURES")
//                   ?.comment.split(".") // Split the comment by commas
//                   .map((feature: string, index: number) => (
//                     <li key={index} className="mb-2">
//                       {feature.trim()} {/* Trim any extra whitespace */}
//                     </li>
//                   )) || <li>No key features available.</li>}
//               </ul>
//             </div>
//           </div>
//         </div>
//         {/* Contact */}
//         <Contact />

//         {/* Copyright footer */}
//         <CopyrightFooter />
//       </div>
//     );
//   } catch (error) {
//     return (
//       <div className="p-8 flex min-h-[100vh] min-w-[100vw] items-center justify-center">
//         <h1 className="text-3xl font-bold">Error</h1>
//         <p className="text-gray-600 mt-4">
//           Failed to load project details. Please try again later.
//         </p>
//       </div>
//     );
//   }
// };

// export default ProjectDetails;

// // import React from "react";
// // import ProjectDetailsClient from "@/components/ProjectDetailsClient";

// // const ProjectDetails = ({ params }: { params: { id: string } }) => {
// //   const id = params?.id;

// //   if (!id) {
// //     return (
// //       <div className="p-8">
// //         <h1 className="text-3xl font-bold">Error</h1>
// //         <p className="text-gray-600 mt-4">Project ID is missing.</p>
// //       </div>
// //     );
// //   }

// //   return <ProjectDetailsClient id={id} />;
// // };

// // export default ProjectDetails;

import Contact from "@/components/Contact";
import CopyrightFooter from "@/components/CopyrightFooter";
import Header from "@/components/Header";
import Image from "next/image";
import React from "react";

type ProjectPageProps = {
  params: {
    id: string;
  };
};

export default async function ProjectDetails({
  params,
}: ProjectPageProps): Promise<JSX.Element> {
  const id = params.id;

  if (!id) {
    return (
      <div className="p-8 flex min-h-[100vh] min-w-[100vw] items-center justify-center">
        <h1 className="text-3xl font-bold">Error</h1>
        <p className="text-gray-600 mt-4">Project ID is missing.</p>
      </div>
    );
  }

  try {
    const response = await fetch(`https://api.vercel.com/v9/projects/${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_API_KEY}`,
      },
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(
        `Failed to fetch project details: ${response.statusText}`
      );
    }

    const project = await response.json();

    const formatName = (name: string) => {
      return name
        .replace(/-/g, " ")
        .split(" ")
        .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(" ");
    };

    const getMonthsAgo = (timestamp: number): string => {
      const createdAt = new Date(timestamp);
      const now = new Date();
      const diffInMonths =
        (now.getFullYear() - createdAt.getFullYear()) * 12 +
        (now.getMonth() - createdAt.getMonth());

      return diffInMonths > 0
        ? `${diffInMonths} month${diffInMonths > 1 ? "s" : ""} ago`
        : "Less than a month ago";
    };

    return (
      <div className="flex flex-col items-center">
        <Header />
        <div className="mt-[130px] flex flex-col w-full items-center gap-y-10">
          <div className="rounded-4xl py-1 px-5 border-[#333333] border-2 bg-[#1e1e1e] text-white">
            Project Details
          </div>
          <h1 className="text-6xl font-sans font-medium tracking-wide">
            {formatName(project?.name)}
          </h1>
          <p className="text-[#999999] text-lg font-sans text-center w-[50%]">
            {project?.env?.find((item: any) => item.key === "ABOUT_PROJECT")
              ?.comment || "No description available."}
          </p>
          <div className="w-[30%] flex items-center justify-between">
            <div className="rounded-lg py-2 px-5 border-[#333333] border-2 bg-[#0e0e0e] text-[#999999] capitalize flex items-center gap-x-2">
              <i className="fa-solid fa-seedling"></i>
              Web Design
            </div>
            <div className="rounded-lg py-2 px-5 border-[#333333] border-2 bg-[#0e0e0e] text-[#999999] capitalize flex items-center gap-x-2">
              <i className="fa-solid fa-clock"></i>
              {getMonthsAgo(project?.createdAt)}
            </div>
            <div className="rounded-lg py-2 px-5 border-[#333333] border-2 bg-[#0e0e0e] text-[#999999] capitalize flex items-center gap-x-2">
              <i className="fa-solid fa-earth-americas"></i>
              {(() => {
                const liveLinkFromEnv = project?.env?.find(
                  (item: any) => item.key === "LIVE_LINK"
                )?.comment;
                const liveLinkFromAlias =
                  project?.targets?.production?.alias?.[0];
                const liveLink = liveLinkFromEnv || liveLinkFromAlias;

                return liveLink ? (
                  <a
                    href={
                      liveLink.startsWith("http")
                        ? liveLink
                        : `https://${liveLink}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Visit project
                  </a>
                ) : (
                  "No live link available"
                );
              })()}
            </div>
          </div>
          <div>
            <Image
              src={
                project?.env?.find((item: any) => item.key === "BG_IMAGE")
                  ?.comment || "/default-image.png"
              }
              alt="Project Preview"
              width={500}
              height={300}
              className="rounded-3xl border-2 border-[#333333]"
              priority
            />
          </div>
          <div className="w-[45%] flex items-start flex-col mt-[50px]">
            <div className="flex flex-col items-start gap-y-5">
              <h1 className="text-3xl font-sans font-medium tracking-wide">
                Project Overview
              </h1>
              <p className="text-[#999999] pl-8 text-justify ">
                {project?.env?.find(
                  (item: any) => item.key === "PROJECT_OVERVIEW"
                )?.comment || "No project overview available."}
              </p>
            </div>
            <div className="flex flex-col items-start gap-y-5 mt-8">
              <h1 className="text-3xl font-sans font-medium tracking-wide">
                Key Features
              </h1>
              <ul className="list-disc pl-8 text-[#999999]">
                {project?.env
                  ?.find((item: any) => item.key === "KEY_FEATURES")
                  ?.comment.split(".")
                  .map((feature: string, index: number) => (
                    <li key={index} className="mb-2">
                      {feature.trim()}
                    </li>
                  )) || <li>No key features available.</li>}
              </ul>
            </div>
          </div>
        </div>
        <Contact />
        <CopyrightFooter />
      </div>
    );
  } catch (error) {
    return (
      <div className="p-8 flex min-h-[100vh] min-w-[100vw] items-center justify-center">
        <h1 className="text-3xl font-bold">Error</h1>
        <p className="text-gray-600 mt-4">
          Failed to load project details. Please try again later.
        </p>
      </div>
    );
  }
}
