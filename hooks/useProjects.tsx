// import { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { addProjects } from "@/utils/projectsSlice";

// const useProjects = () => {
//   const dispatch = useDispatch();
//   const [loading, setLoading] = useState(true); // Track loading state
//   //   const [error, setError] = useState(null); // Track errors

//   const getSiteList = async () => {
//     try {
//       setLoading(true); // Start loading
//       const response = await fetch("https://api.vercel.com/v9/projects", {
//         headers: {
//           Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_API_KEY}`, // Use API key from .env
//         },
//       });

//       if (!response.ok) {
//         throw new Error(`Failed to fetch projects: ${response.statusText}`);
//       }

//       const json = await response.json();
//       dispatch(addProjects(json)); // Dispatch projects to Redux store
//     } catch (error) {
//       //   setError(error.message); // Set error message
//       console.error("Error fetching projects:", error);
//     } finally {
//       setLoading(false); // Stop loading
//     }
//   };

//   useEffect(() => {
//     getSiteList();
//   }, []); // Run only once when the component mounts

//   return { loading }; // Return loading and error states
// };

// export default useProjects;
