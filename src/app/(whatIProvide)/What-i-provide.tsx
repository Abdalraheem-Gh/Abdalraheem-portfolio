'use client'
import { motion } from "framer-motion";
import { FiCode, FiDatabase, FiLifeBuoy, FiMonitor } from "react-icons/fi";

// تعريف مصفوفة الخدمات مع تفاصيل كل خدمة
const services = [
  {
    title: "Web Development",
    icon: <FiCode className="text-3xl text-[#FFD700]" />,
    description:
      "End-to-end solutions using cutting-edge technologies. Creating seamless, scalable, and innovative digital experiences.",
    details: [
      "Next.js & React & WordPress",
      "Modern Architecture",
      "Cloud Solutions",
      "Performance",
    ],
  },
  {
    title: "Database Solutions",
    icon: <FiDatabase className="text-3xl text-[#FFD700]" />,
    description:
      "Architecting high-performance database solutions. Optimized for scale, security, and lightning-fast queries.",
    details: [
      "SQL & NoSQL & Postgres & Prisma",
      "Data Modeling",
      "Optimization",
      "Scaling",
    ],
  },  {
    title: "IT Support & CCTV & GPS Tracker",
    icon: <FiMonitor className="text-3xl text-[#FFD700]" />,
    description:
      "Technical Support Specialist with over 5 years of experience in ATM repair, laptop sales, and maintenance. Proficient in diagnosing and resolving complex hardware and software issues efficiently. ",
    details: [
      "CCTV & IP Camera Installation",
      "GPS Tracker",
      "IT Support",
    ],
  },
  {
    title: "Elite Support",
    icon: <FiLifeBuoy className="text-3xl text-[#FFD700]" />,
    description:
      "24/7 premium support and maintenance. Keeping your applications secure, updated, and performing at their peak.",
    details: [
      "24/7 Coverage",
      "Proactive Care",
      "Updates & Patches",
      "Monitoring",
    ],
  },

];

const WhatIProvide = ({ id }: { id: string }) => {
  return (
    <section id={id} >
      <div className="container mx-auto px-6 pt-8">
        {/* عنوان القسم */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-5xl  font-extrabold text-center mb-12 bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent"
        >
          What I Provide
        </motion.h2>
       {/* عرض الخدمات في شبكة (grid) */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      whileHover={{
        scale: 1.05,
        y: -5,
        boxShadow: "0px 4px 20px rgba(255, 215, 0, 0.5)", // تأثير التوهج الذهبي
      }}
      whileTap={{ scale: 0.98 }}
      className="p-6 bg-gradient-to-br from-[#000814]/70 to-[#001D3D]/70 rounded-2xl border border-[#FFD700]/30 backdrop-blur-sm shadow-lg transition-all duration-300"
    >
      <div className="flex items-center gap-4 mb-4">
        {service.icon}
        <h3 className="text-xl md:text-2xl font-bold text-[#FFD700]">
          {service.title}
        </h3>
      </div>
      <p className="text-gray-300 mb-4">{service.description}</p>
      <ul className="list-disc list-inside text-gray-300 space-y-1">
        {service.details.map((item, idx) => (
          <li key={idx} className="text-sm md:text-base">
            {item}
          </li>
        ))}
      </ul>
    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default WhatIProvide;
