import { FaReact, FaBootstrap, FaJs, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiRedux } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";

const Skills = () => {
   return (
      <section id="skills" className="skills mt-10 pt-20">
         <h1 className="text-center text-4xl uppercase tracking-widest">
            Skills
         </h1>
         <div className="container mx-auto px-4">
            <div className="flex gap-7 justify-center mt-10 flex-wrap">
               <FaHtml5 className="text-6xl text-orange-600 animate-pulse" />
               <FaCss3Alt className="text-6xl text-sky-600 animate-pulse" />
               <FaJs className="text-6xl text-yellow-400 animate-pulse" />
               <FaBootstrap className="text-6xl text-violet-700 animate-pulse" />
               <FaReact className="text-6xl text-sky-400 animate-pulse" />
               <SiRedux className="text-6xl text-violet-600 animate-pulse" />
               <RiTailwindCssFill className="text-6xl text-sky-400 animate-pulse" />
               <TbBrandNextjs className="text-6xl animate-pulse" />
            </div>
         </div>
      </section>
   );
};

export default Skills;
