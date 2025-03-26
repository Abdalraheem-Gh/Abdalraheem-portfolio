import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Project } from "@/lib/types";

export const ProjectCard = ({ project }: { project: Project }) => {
  const [overlayVisible, setOverlayVisible] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.05, boxShadow: "0px 10px 20px rgba(255, 215, 0, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden group bg-gradient-to-br from-[#000814]/70 to-[#001D3D]/70 border rounded-lg"
    >
      {/* صورة المشروع */}
      <div
        className="relative w-full h-48 sm:h-64 cursor-pointer"
        onClick={() => setOverlayVisible(true)}
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-t-md"
        />
      </div>

      {/* تفاصيل المشروع */}
      <CardHeader className="sm:p-4 p-2">
        <CardTitle className="text-base sm:text-2xl font-extrabold text-[#FFD700]">
          {project.title}
        </CardTitle>
        <CardDescription className="flex flex-wrap gap-2 mt-2">
          {project.tech.map((tech, index) => (
            <span
              key={index}
              className="sm:px-3 sm:py-1 p-1 text-xs sm:text-sm font-semibold text-black rounded-md bg-gradient-to-r from-white to-yellow-100 shadow-md hover:scale-105 transition-transform duration-300"
            >
              {tech}
            </span>
          ))}
        </CardDescription>
      </CardHeader>

      {/* التغبيش والزرين عند النقر */}
      {overlayVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute inset-0 bg-black bg-opacity-70 flex flex-col items-center justify-center space-y-4"
        >
          <button
            onClick={() => window.open(project.github, "_blank")}
            className="px-4 py-2 bg-[#FFD700] text-black font-semibold rounded hover:bg-[#FF8C00] transition-colors duration-300"
          >
            GitHub
          </button>
          <button
            onClick={() => window.open(project.live, "_blank")}
            className="px-4 py-2 bg-[#FFD700] text-black font-semibold rounded hover:bg-[#FF8C00] transition-colors duration-300"
          >
            Live Site
          </button>
          <button
            onClick={() => setOverlayVisible(false)}
            className="px-2 py-1 text-white underline"
          >
            Close
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};
