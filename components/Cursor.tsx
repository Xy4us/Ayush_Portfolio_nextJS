// // Note: This component is used to create a custom cursor that follows the mouse position on the screen. It uses the GSAP library for smooth animations.

"use client";

import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { useSelector } from "react-redux";
import { RootState } from "../utils/store";

const Cursor = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isMouseConnected, setIsMouseConnected] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Get the cursor type from Redux
  const cursorType = useSelector((state: RootState) => state.cursor.type);

  useEffect(() => {
    const checkMouse = () => {
      const hasMouse = window.matchMedia("(pointer: fine)").matches;
      setIsMouseConnected(hasMouse);
    };

    checkMouse();
    window.addEventListener("resize", checkMouse);

    return () => {
      window.removeEventListener("resize", checkMouse);
    };
  }, []);

  useEffect(() => {
    if (!isMouseConnected) return;

    const cursor = document.getElementById("cursor");

    const updateCursor = (x: number, y: number) => {
      gsap.to(cursor, {
        x,
        y,
        duration: 0.5, // Slower movement (increased from 0.2)
        ease: "power4.out", // Smooth easing (less snappy)
      });
    };

    const handleMouseMove = (event: MouseEvent) => {
      const { clientX, clientY } = event; // Viewport-relative position
      setMousePosition({ x: clientX, y: clientY });
      setIsVisible(true);
      updateCursor(clientX + window.scrollX, clientY + window.scrollY);
    };

    const handleScroll = () => {
      // Ensure the cursor follows smoothly even when scrolling
      updateCursor(
        mousePosition.x + window.scrollX,
        mousePosition.y + window.scrollY
      );
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isMouseConnected, mousePosition]);

  // Do not render the cursor if no mouse is connected
  if (!isMouseConnected) return null;

  return (
    <div
      id="cursor"
      className={`pointer-events-none rounded-full z-50 absolute ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        cursorType === "explore"
          ? "bg-[#ffffff0d] flex items-center justify-center border border-[#ffffff40]"
          : "bg-white"
      } `}
      style={{
        top: 0,
        left: 0,
        transform: "translate(-50%, -50%)",
        width: cursorType === "explore" ? "100px" : "14px", // Dynamically set width
        height: cursorType === "explore" ? "100px" : "14px", // Dynamically set height
        transition:
          "width 0.3s ease, height 0.3s ease, background-color 0.3s ease",
      }}
    >
      {cursorType === "explore" && (
        <span
          className={`text-white text-sm font-semibold transition-all duration-700 ease-in-out ${
            cursorType === "explore"
              ? "opacity-100 scale-100"
              : "opacity-0 scale-0"
          }`}
        >
          See Project
        </span>
      )}
    </div>
  );
};

export default Cursor;
