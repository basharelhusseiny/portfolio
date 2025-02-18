import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
   return (
      <section id="contact" className="education mt-10 pt-20">
         <h1 className="text-center text-4xl uppercase tracking-widest mb-15">
            Contact
         </h1>
         <div className="container mx-auto px-4">
            <div className="flex w-[1000px] max-w-full mx-auto max-sm:flex-col gap-15 ">
               <motion.div
                  className="flex-1"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}>
                  <h1 className="text-5xl font-light tracking-wider uppercase mb-5">
                     let's work on something great{" "}
                  </h1>
                  <p className="tracking-widest opacity-70">
                     I'm excited to collaborate on project that push boundaries
                     and create meaningful impact. let's build something
                     innovative and exceptional together.
                  </p>
                  <div className="flex gap-4 justify-center mt-6">
                     <a
                        href="https://github.com/basharelhusseiny"
                        target="_blank">
                        <FaGithub className="text-3xl hover:text-fuchsia-500 duration-150" />
                     </a>
                     <a
                        href="https://www.linkedin.com/in/basharelhusseiny/"
                        target="_blank">
                        <FaLinkedin className="text-3xl hover:text-sky-700 duration-150" />
                     </a>
                  </div>
               </motion.div>
               <motion.form
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                  action="https://formsubmit.co/basharelhusseiny@gmail.com"
                  method="POST"
                  className=" text-black justify-center w-fit mx-auto overflow-hidden">
                  <label
                     htmlFor="name"
                     className="text-white capitalize  block text-sm mb-2">
                     Full Name
                  </label>
                  <input
                     type="text"
                     name="Name"
                     id="name"
                     required
                     className="block bg-white/50 rounded-lg pl-3 py-1 outline-none w-[250px] md:w-[300px] mb-5 "
                  />
                  <label
                     htmlFor="email"
                     className="text-white capitalize  block text-sm  my-2">
                     Email
                  </label>
                  <input
                     type="email"
                     name="Email"
                     id="email"
                     required
                     className="block  bg-white/50 rounded-lg pl-3 py-1 outline-none w-[250px] md:w-[300px] mb-5"
                  />
                  <label
                     htmlFor="message"
                     className="text-white capitalize block text-sm  my-2">
                     Message
                  </label>
                  <textarea
                     name="Message"
                     id="message"
                     rows="2"
                     required
                     className="block bg-white/50 rounded-lg pl-3 py-1 outline-none w-[250px] md:w-[300px]"></textarea>
                  <button
                     type="submit"
                     className="text-white border-2 block w-fit mx-auto border-white/30 cursor-pointer mt-5 px-7 py-1 rounded-full hover:backdrop-brightness-200">
                     Send
                  </button>
               </motion.form>
            </div>
         </div>
      </section>
   );
};

export default Contact;
