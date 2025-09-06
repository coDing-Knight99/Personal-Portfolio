import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import GradientText from "./gradienttext";

export default function ProjectCard({d, title, description, image, demo, code}) {
  return (

<motion.div
        
            initial={{ opacity: 0, y: 50 }}
            whileInView ={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6,delay:d*0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-xl overflow-hidden"
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden md:w-100 md:h-170 h-150 w-80">
              <img
                src={image}
                alt={title}
                className="w-full h-[60%] md:h-[75%] object-cover"
              />
              <div className="p-5">
                <GradientText text={title} gradient="linear-gradient(90deg, #3b82f6 0%, #a855f7 50%, #ec4899 100%)" />
                <p className="text-gray-300 text-lg mt-2">{description}</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href={demo}
                    target="_blank"
                    
                    className="cursor-pointer px-3 py-1 rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-bold text-lg  shadow-md"
                  >
                    Demo
                  </a>
                  <a
                    href={code}
                    target="_blank"
        
                    className="cursor-pointer px-3 py-1 rounded-lg bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 font-bold text-lg  shadow-md"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>



  );
}
