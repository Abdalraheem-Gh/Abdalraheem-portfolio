"use client";
import { useState } from "react";
import { ProjectCard } from "./ProjectCard";
import { Project } from "@/lib/types";


 const projects: Project[] = [
    {
      title: "Extra Shop (E-Commerce)",
      image: "/Images/Projects-Images/Extra-Shop.png",
      tech: ["Next.js", "React.js","TypeScript", "Tailwind CSS","Prisma","Shadcn/UI"],
      github: "https://github.com/Abdalraheem-Gh/extra-shop.git",
      live: "https://extra-shop.vercel.app/",
    },
    {
      title: "Sama Shop (E-Commerce)",
      image: "/Images/Projects-Images/Sama-Shop.png",
      tech: ["WordPress","PHP", "JavaScript", "CSS"],
      github: "https://sama-shop.net",
      live: "https://sama-shop.net",
    },
    {
      title: "The Wild Oasis (Booking Hotel)",
      image: "/Images/Projects-Images/The-Wild-Oasis.png",
      tech: ["Next.js", "React" , "Tailwind CSS","Supabase"],
      github: "https://github.com/Abdalraheem-Gh/the-wild-oasis-haven.git",
      live: "https://the-wild-oasis-haven.vercel.app/",
    },
    {
      title: "The Wild Oasis (Manage Hotel Bookings)",
      image: "/Images/Projects-Images/The-Wild-Oasis-Manager.png",
      tech: ["React.js","Redux", "React Router","Styled Component" ,"SupaBase" ],
      github: "https://github.com/Abdalraheem-Gh/the-wild-oasis.git",
      live: "https://the-wild-oasis-worldwide.vercel.app/",
    },
    // يمكنك إضافة المزيد من المشاريع هنا
  ];
  

  const ProjectsPage = ({ id }: { id: string }) => {
    const [visibleCount, setVisibleCount] = useState(3);
  
    const loadMoreProjects = () => {
      setVisibleCount(projects.length);
    };
  


  return (
    <section id={id} >
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-6xl font-extrabold text-center my-12 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.slice(0, visibleCount).map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
        {visibleCount < projects.length && (
          <div className="mt-10 flex justify-center">
            <button
              onClick={loadMoreProjects}
              className="px-6 py-3 bg-[#FFD700] text-[#000814] font-semibold rounded-lg shadow hover:bg-[#FF8C00] transition-all duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectsPage;
