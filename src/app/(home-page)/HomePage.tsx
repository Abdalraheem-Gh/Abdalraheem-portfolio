'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { FiCode, FiClock, FiFolder, FiStar, FiDownload, FiMail  } from "react-icons/fi";
 
const stats = [
  { icon: <FiClock />, title: "Years Experience", value: "5+" },
  { icon: <FiCode />, title: "Technologies", value: "15+" },
  { icon: <FiFolder />, title: "Projects", value: "10+" },
  { icon: <FiStar  />, title: "Client Satisfaction", value: "100%" },
];

const HomePage = ({id}:{id:string}) => {
  return (
    <section id={id}  >
      {/* المحتوى الرئيسي */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* القسم الأيسر */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center md:text-left"
        >
          <div className="relative w-48 h-48 mx-auto md:mx-0 mb-8">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFD700] to-[#000080] rounded-full blur-lg opacity-15 transition-all duration-500" />
            <Image
              src="/Images/Profile-image/Abdalraheem-Ghannam.jpg"
              alt="عبد الرحيم غنام"
              width={256}
              height={256}
              priority={true}
              className="rounded-full object-cover border-4 border-[#FFD700]/50  shadow-2xl"
            />
          </div>

          <h1 className="sm:text-4xl text-2xl md:text-5xl font-extrabold bg-gradient-to-r from-[#FFD700] via-[#FF8C00] to-[#FFD700] bg-clip-text text-transparent">  
    Abdalraheem Ghannam
 </h1>

          
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl text-yellow-100 md:font-semibold font-medium   mb-6 mt-2 p-3   bg-gradient-to-br from-[#000814]/70 to-[#001D3D]/70 rounded-2xl border border-[#FFD700]/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden"
          >
              Front-End Developer  and <br />
            Information Technology Professional 
          </motion.p>

 <div className="md:mt-6 mt-3 gap-3 sm:gap-2 grid grid-cols-1 sm:grid-cols-2 md:gap-4 justify-center md:justify-start">
  {/* زر تحميل السيرة الذاتية */}
  <motion.a
    href="/Abdalraheem_Ghannam'cv.pdf" // ضع رابط ملف السيرة الذاتية هنا
    download="Abdalraheem_Ghannam_CV.pdf"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center gap-2 md:px-6 md:py-3 py-1 px-3 bg-[#FFD700] text-[#000814] font-semibold rounded-lg shadow-lg     transition-all duration-300"
  >
    <FiDownload className="md:text-xl text-lg" />
    Download CV
  </motion.a>

  {/* زر التواصل */}
  <motion.a
    href="/#contact-me"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center justify-center gap-2 px-6 py-3 border-2 border-[#FFD700] text-[#FFD700] font-semibold rounded-lg shadow-lg hover:bg-[#FFD700] hover:text-[#000814] transition-all duration-300"
  >
    <FiMail className="md:text-xl text-lg" />
    Contact Me
  </motion.a>
</div>
         </motion.div>

        {/* القسم الأيمن */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 grid gap-2 md:gap-6  grid-cols-2  md:max-w-xl"
        >
          {stats.map((item, index) => (
            <div 
              key={index}
              className="p-3   bg-gradient-to-br from-[#000814]/70 to-[#001D3D]/70 rounded-2xl border border-[#FFD700]/30 backdrop-blur-sm hover:scale-105 transition-all duration-300 overflow-hidden"
            >
              <div className="text-[#FFD700] md:text-3xl text-xl mb-1 md:mb-3">{item.icon}</div>
              <div className="md:text-4xl text-xl font-bold text-[#FFD700] mb-1 md:mb-2">
                {item.value}
              </div>
              <div className="text-gray-300 text-sm md:text-base mt-2 mr-2 ">{item.title}</div>
            </div>
          ))}
        </motion.div>
      </div>


    </section>
  );
};

export default HomePage;
