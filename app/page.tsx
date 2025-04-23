// "use client";
// import Cursor from "@/components/Cursor";
// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import Image from "next/image";
// import flower from "../public/flower.png";
// import useProjects from "@/hooks/useProjects";
// import ProjectsSection from "@/components/ProjectsSection";
// import { slideInFromBottom } from "@/utils/motion";
// import { useInView } from "react-intersection-observer";
// import About from "@/components/About";
// import Marquee from "react-fast-marquee";
// import { MarqueeText } from "@/utils/constants";
// import Career from "@/components/Career";
// import WhyMe from "@/components/WhyMe";
// import Testimonials from "@/components/Testimonials";
// import FAQ from "@/components/FAQ";
// import CopyrightFooter from "@/components/CopyrightFooter";
// import Contact from "@/components/Contact";

// export default function Home() {
//   useProjects();
//   // Scroll-based animation setup
//   const { scrollYProgress } = useScroll();

//   // Map scroll progress to rotation and vertical movement ranges
//   const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, 400]); // Rotate from 0deg to 360deg
//   const yTransform = useTransform(scrollYProgress, [0, 1], [0, 500]); // Move vertically
//   // Smooth spring animations for rotation and vertical movement
//   const rotate = useSpring(rotateTransform, {
//     stiffness: 500,
//     damping: 100,
//     restDelta: 0.8,
//   });

//   const { ref, inView } = useInView({
//     triggerOnce: false,
//   });

//   const y = useSpring(yTransform, {
//     stiffness: 500, //faster animation
//     damping: 100, //Less resistance
//     restDelta: 1, // Very precise, animation stops only when very close to the targets
//   });
//   return (
//     <div className="bg-black min-h-[5000px]">
//       <Header />
//       <Hero />
//       {/*  Flower */}
//       <motion.div
//         ref={ref}
//         variants={slideInFromBottom(0.27)}
//         initial="hidden"
//         animate={inView ? "visible" : "hidden"}
//         className="relative h-[500px]"
//       >
//         <motion.div
//           className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-10"
//           style={{
//             rotate: rotate, // Rotate the image as you scroll
//             y: y, // Move the image vertically as you scroll
//           }}
//         >
//           <Image
//             src={flower}
//             alt="Scrolling and Rotating Effect"
//             width={500}
//             height={500}
//             className="rounded-full shadow-2xl z-20"
//           />
//         </motion.div>

//         <div className="absolute bg-white rounded-full blur-[150px] min-h-[250px] min-w-[250px] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  "></div>

//         <div className=" bg-gradient-to-t from-black via-[#000000]  min-h-[600px] absolute -bottom-60 w-full z-20"></div>
//       </motion.div>

//       {/* Projects */}
//       <ProjectsSection />

//       {/* small para about me */}
//       <div className="flex w-full justify-center items-center flex-col mt-[210px]">
//         <p className=" text-center w-[45%] text-3xl tracking-wider">
//           Building impactful solutions that are both efficient and user-focused.{" "}
//           <span className="text-[#999999]">
//             With strong problem-solving skills and expertise in{" "}
//           </span>
//           software engineering and DSA,{" "}
//           <span className="text-[#999999]">
//             I create scalable products that deliver value and leave a lasting
//           </span>{" "}
//           impression for all stakeholders.
//         </p>
//       </div>

//       {/* About me  */}
//       <About />

//       {/* Marquee */}
//       <div className="mt-[150px] w-full flex items-center justify-center">
//         <div className="w-[1280px] p-4 border-2 border-[#333333]  rounded-xl bg-[#0e0e0e] ">
//           <Marquee
//             gradient={true}
//             speed={70}
//             gradientColor="#0c0c0c"
//             gradientWidth={200}
//           >
//             {MarqueeText.map((item, index) => (
//               <p className="mx-10" key={index}>
//                 {item.text}
//               </p>
//             ))}
//           </Marquee>
//         </div>
//       </div>

//       {/* Career*/}
//       <Career />

//       {/* Why me ?*/}
//       <WhyMe />

//       {/* Testimonials */}
//       <Testimonials />

//       {/* FAQ */}
//       <FAQ />

//       {/* Footer  */}
//       <Contact />

//       {/* Copyright footer */}
//       <CopyrightFooter />

//       <Cursor />
//     </div>
//   );
// }

// import ProjectsSection from "@/components/ProjectsSection";
// import Header from "@/components/Header";
// import Hero from "@/components/Hero";
// import About from "@/components/About";
// import Career from "@/components/Career";
// import WhyMe from "@/components/WhyMe";
// import Testimonials from "@/components/Testimonials";
// import FAQ from "@/components/FAQ";
// import Contact from "@/components/Contact";
// import CopyrightFooter from "@/components/CopyrightFooter";
import ProjectsHydrator from "@/components/ProjectsHydrator"; // New component to hydrate Redux
// import Cursor from "@/components/Cursor";
// import Marquee from "react-fast-marquee";
// import { MarqueeText } from "@/utils/constants";
// import { motion, useScroll, useTransform, useSpring } from "framer-motion";
// import Image from "next/image";
// import flower from "../public/flower.png";
// import { slideInFromBottom } from "@/utils/motion";
// import { useInView } from "react-intersection-observer";
import Body from "@/components/Body";

export default async function Home() {
  // Fetch data on the server side
  const response = await fetch("https://api.vercel.com/v9/projects", {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_VERCEL_API_KEY}`,
    },
    cache: "no-store", // Ensure fresh data is fetched
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch projects: ${response.statusText}`);
  }

  const projects = await response.json();
  console.log("Project  ", projects);

  // const { scrollYProgress } = useScroll();

  // const rotateTransform = useTransform(scrollYProgress, [0, 1], [0, 400]); // Rotate from 0deg to 360deg
  // const yTransform = useTransform(scrollYProgress, [0, 1], [0, 500]); // Move vertically

  // const rotate = useSpring(rotateTransform, {
  //   stiffness: 500,
  //   damping: 100,
  //   restDelta: 0.8,
  // });

  // const { ref, inView } = useInView({
  //   triggerOnce: false,
  // });

  // const y = useSpring(yTransform, {
  //   stiffness: 500, //faster animation
  //   damping: 100, //Less resistance
  //   restDelta: 1, // Very precise, animation stops only when very close to the targets
  // });

  return (
    <div className="bg-black min-h-[5000px]">
      {/* Hydrate Redux store */}
      <ProjectsHydrator projects={projects} />

      <Body />
    </div>
  );
}
