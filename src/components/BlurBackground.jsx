import { motion } from "framer-motion";

const circleVariants = {
   animate1: {
      scale: [1, 1.1, 1],
      x: [0, 100, 0],
      y: [0, 50, 0],
      transition: {
         duration: 2,
         repeat: Infinity,
         ease:"easeInOut"
      },
   },
   animate2: {
      scale: [1, 1.2, 1],
      x: [0, 140, 0],
      y: [0, -70, 0],
      transition: {
         duration: 2,
         repeat: Infinity,
         ease:"easeInOut"
      },
   },
   animate3: {
      scale: [1, 1.3, 1],
      x: [0, 180, 0],
      y: [0, 90, 0],
      transition: {
         duration: 2,
         repeat: Infinity,
         ease:"easeInOut"
      },
   },
};

const BlurBackground = () => {
   return (
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 flex justify-center items-center blur-[100px]  opacity-50 ">
         <motion.div className="bg-blue-500 w-[350px] h-[300px] rounded-full absolute" variants={circleVariants} animate="animate1"></motion.div>
         <motion.div className="bg-pink-500 w-[350px] h-[300px] rounded-full absolute" variants={circleVariants} animate="animate2"></motion.div>
         <motion.div className="bg-fuchsia-500 w-[350px] h-[300px] rounded-full absolute" variants={circleVariants} animate="animate3"></motion.div>
      </div>
   );
};

export default BlurBackground;
