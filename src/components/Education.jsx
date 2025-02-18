import { motion } from "framer-motion";

const Education = () => {
   return (
      <section id="education" className="education mt-10 pt-20">
         <h1 className="text-center text-4xl uppercase tracking-widest">
            Education
         </h1>
         <div className="container mx-auto px-4">
            <motion.div initial={{opacity:0, x:-200}} whileInView={{opacity:1, x:0}} transition={{duration:1}} className="w-[800px] max-w-full mx-auto mt-12 rounded-md border-2 border-white/20 p-6">
               <h2 className="text-2xl">Bachelor’s Degree in Computer Science</h2>
               <h3 className="text-sm mt-3 tracking-wide ">
                  Shorouk Academy - Higher Institute for Computers & Information
               </h3>
               <p className="text-sm opacity-80 mt-1">Sep 2019 – Jun 2023</p>
               <p className="mt-4 opacity-80">
                  Relevant Coursework : Software Engineering, Web Programming,
                  Data Structures & Algorithms.
               </p>
               <p className="opacity-80 mt-2">Overall Grade : Good</p>
            </motion.div>
         </div>
      </section>
   );
};

export default Education;
