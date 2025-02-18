import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const Landing = () => {
   return (
      <section id="bashar" className="landing pt-15 md:mt-10 md:pt-20">
         <div className="container mx-auto">
            <div className="w-[600px] max-w-full mx-auto text-center max-sm:mt-35 max-sm:px-3 ">
               <motion.h1
                  initial={{ opacity: 0, y:-20 }}
                  whileInView={{ opacity: 1, y:0}}
                  transition={{ duration: 2 }}
                  className="uppercase text-2xl lg:text-4xl tracking-widest">
                  Bashar ElHusseiny
               </motion.h1>
               <motion.h3
                  initial={{ y: 50 }}
                  whileInView={{ y: 0 }}
                  transition={{duration: 1 }}
                  className="opacity-80 font-light text-lg lg:text-[22px] ">
                  Frontend Developer
               </motion.h3>
               <motion.p
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1.5 }}
                  className="text-md lg:text-xl font-extralight mt-4 tracking-wide ">
                  I craft high-performance, scalable web applications with a
                  seamless user experience. Always open to exciting and
                  impactful projects.
               </motion.p>
               <motion.a
                  className="flex items-center mt-7 sm:mt-4 border-2 border-white/30 w-fit mx-auto py-2 px-4 rounded-full hover:backdrop-brightness-150 duration-100"
                  initial={{ opacity: 0}}
                  whileInView={{ opacity: 1}}
                  transition={{ delay:1.2 ,duration: 1 }}
                  href="/test.pdf"
                  target="_blank"
                  download>
                  Download Resume{" "}
                  <FiArrowUpRight className="ml-2 text-xl font-bold animate-pulse" />
               </motion.a>
               <motion.img
                  initial={{ opacity: 0,y:10}}
                  whileInView={{ opacity: 1,y:0}}
                  transition={{ delay:1.5 ,duration: 1 }}
                  src="/images/basharelhusseiny2.JPG"
                  alt="Bashar"
                  className="w-[220px] rounded-xl border border-white/30 p-1 mx-auto mt-11 md:mt-6"
               />
            </div>
         </div>
      </section>
   );
};

export default Landing;
