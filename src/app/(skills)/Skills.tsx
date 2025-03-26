"use client";
import { motion } from "framer-motion";
import Image from "next/image";

// مصفوفة المهارات مع مسارات صور SVG
const frontEndSkillList = [
    { name: "Next.js", icon: "/icons-frontEnd/nextjs-icon.svg" },
    { name: "React.js", icon: "/icons-frontEnd/react-js-icon.svg" },
    { name: "WordPress", icon: "/icons-frontEnd/icons8-wordpress.svg" },
    { name: "TypeScript", icon: "/icons-frontEnd/typescript-programming-language-icon.svg" },
    { name: "Tailwind CSS", icon: "/icons-frontEnd/tailwind-css-icon.svg" },
    { name: "JavaScript", icon: "/icons-frontEnd/javascript-programming-language-icon.svg" },
    { name: "CSS", icon: "/icons-frontEnd/css-icon.svg" },
    { name: "HTML", icon: "/icons-frontEnd/html-icon.svg" },
    { name: "React Redux", icon: "/icons-frontEnd/redux-icon.svg" },
    { name: "Git", icon: "/icons-frontEnd/git-icon.svg" },
    { name: "GitHub", icon: "/icons-frontEnd/github-icon.svg" },
    { name: "SupaBase", icon: "/icons-frontEnd/icons8-supabase.svg" },
    { name: "Postgres SQL", icon: "/icons-frontEnd/postgresql-icon.svg" },
];
const ItSkillList= [
    { name: "Troubleshooting", icon: "/icons-IT/maintenance-icon.svg" },
    { name: "Linux", icon: "/icons-IT/ubuntu-color-icon.svg" },
    { name: "Windows", icon: "/icons-IT/windows-10-icon.svg" },
    { name: "Active Directory", icon: "/icons-IT/folder-directory-files-icon.svg" },
    { name: "Servers", icon: "/icons-IT/client-server-color-icon.svg" },  
    { name: "Virtual Machines", icon: "/icons-IT/virtual-machine.svg" },
    { name: "Networking ", icon: "/icons-IT/globe-network-color-icon.svg" },
    { name: "Cybersecurity", icon: "/icons-IT/encrypted-icon.svg" },
    { name: "ATM Repair", icon: "/icons-IT/atm-cash-withdrawal-icon.svg" },
    { name: "GPS tracking platforms ", icon: "/icons-IT/world-map-pin-icon.svg" },
    { name: "Laptop Sales & Maintenance", icon: "/icons-IT/laptop-open-icon.svg" },
];
const Skills = ({ id }: { id: string }) => {
  return (
    <section id={id} className="py-20 ">
      <div className="container mx-auto px-6">
        {/* العناوين */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent"
        >
          Frontend Development
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-gray-300 mb-8"
        >
          Building responsive and interactive user interfaces
        </motion.p>

        {/* شبكة المهارات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {frontEndSkillList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 20px rgba(255, 215, 0, 0.5)", // تأثير التوهج الذهبي,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#000814]/70 to-[#001D3D]/70 border border-[#FFD700]/30 rounded-xl p-4 flex flex-col items-center justify-center  transition-all duration-50 hover:from-[#FFD700] hover:to-[#f1e863c5] "
            >
              {/* الأيقونة SVG */}
              <div className="w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center">
                <Image src={skill.icon} alt={skill.name}  className="object-contain" width={56} height={56} quality={80}  />
              </div>
              {/* اسم المهارة */}
              <p className="text-sm md:text-base font-semibold text-yellow-100 mt-3">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>


      <div className="container mx-auto px-6 mt-24">
        {/* العناوين */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-extrabold text-center mb-3 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent"
        >
          IT Support
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center text-gray-300 mb-8"
        >
Professional IT Support: Troubleshooting, networking & system security to keep your tech running smoothly.        </motion.p>

        {/* شبكة المهارات */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {ItSkillList.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 4px 20px rgba(255, 215, 0, 0.5)", // تأثير التوهج الذهبي,
              }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#000814]/70 to-[#001D3D]/70 border border-[#FFD700]/30 rounded-xl p-4 flex flex-col items-center justify-center  transition-all duration-50 hover:from-[#FFD700] hover:to-[#f1e863c5] "
            >
              {/* الأيقونة SVG */}
              <div className="w-8 h-8 sm:w-14 sm:h-14 flex items-center justify-center">
                <Image src={skill.icon} alt={skill.name}  className="object-contain" width={56} height={56} quality={80}  />
              </div>
              {/* اسم المهارة */}
              <p className="text-sm md:text-base font-semibold text-yellow-100 mt-3">
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
