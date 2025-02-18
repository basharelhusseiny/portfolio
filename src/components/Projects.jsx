import ProjectItems from "./ProjectItems";

const projectsData = [
   {
      id: 1,
      title: "E-commerce Website",
      desc: "A Full-featured e-commerce website built with react and nodejs. it includes user authentication, product management, and an untegrated payment gatway. ",
      img: "project1.jpg",
      techStack: ["React.js", "TailwindCSS", "Node.js", "Express", "MongoDB"],
   },
   {
      id: 2,
      title: "Social Media App",
      desc: "A real-time social media app with chat, notifications, and a customizable profile page. Built with React.js, Firebase, and Redux for state management.",
      img: "project2.jpg",
      techStack: ["React.js", "TailwindCSS", "Firebase", "Redux"],
   },
   {
      id: 3,
      title: "Portfolio Website",
      desc: "A personal portfolio website showcasing project and skills, Fully responsive and optimized for performance.",
      img: "project3.jpg",
      techStack: ["Next.js", "TailwindCSS"],
   },
];

const Projects = () => {
   return (
      <section id="projects" className="projects mt-30 pt-20">
         <h1 className="text-center text-3xl uppercase tracking-widest">
            Projects
         </h1>
         <div className="container mx-auto px-4">
            <div className="w-[1100px] max-w-full mx-auto mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-7 ">
               <ProjectItems data={projectsData} />
            </div>
         </div>
      </section>
   );
};

export default Projects;
