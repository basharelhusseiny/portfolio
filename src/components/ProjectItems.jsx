import { motion } from "framer-motion";
import { FaGithub, FaLink } from "react-icons/fa";

const ProjectItems = ({ data }) => {
   return (
      <>
         {data.map((project) => {
            return (
               <motion.div
                  key={project.id}
                  className="border-2 border-white/20 rounded-md overflow-hidden" initial={{opacity:0, y:50}} whileInView={{opacity:1,y:0}} transition={{duration:2}} >
                  <img
                     src={`/images/${project.img}`}
                     alt="project"
                     className="w-full h-[230px] max-w-full "
                  />
                  <div className="p-5 flex flex-col justify-between h-[330px] ">
                     <div>
                        <h3 className="text-[21px] mb-2" >{project.title}</h3>
                        <p className="opacity-80 text-[15px] tracking-wider mb-4 h-[110px]" >{project.desc}</p>
                        <h4>Tech Stack :</h4>
                        {project.techStack.map((tech, index) => (
                           <span key={index} className="inline-block mt-1 text-xs opacity-90 border border-fuchsia-500/70 py-1 px-2 mx-1 rounded-full">
                              {tech}
                           </span>
                        ))}
                     </div>
                     <div className="flex justify-center">
                        <a href="#" className="text-lg mx-2 border p-[5px] rounded-full hover:text-fuchsia-500 duration-100">
                           <FaGithub />
                        </a>
                        <a href="#" className="text-lg mx-2 border p-[5px] rounded-full hover:text-fuchsia-500 duration-100">
                           <FaLink />
                        </a>
                     </div>
                  </div>
               </motion.div>
            );
         })}
      </>
   );
};

export default ProjectItems;
