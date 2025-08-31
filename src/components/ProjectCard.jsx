import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";

export default function ProjectCard({ title, description, image }) {
  return (

<motion.div
        
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6}}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -5 }}
            className="relative rounded-2xl p-[2px] bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 shadow-xl overflow-hidden"
          >
            <div className="bg-black/60 backdrop-blur-xl rounded-2xl overflow-hidden">
              <img
                src="project.image"
                alt="project.title"
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold text-white">"project.title"</h3>
                <p className="text-gray-300 text-sm mt-2">"project.description"</p>
                <div className="flex gap-3 mt-4">
                  <a
                    href="project.demo"
                    className="px-3 py-1 rounded-lg bg-green-500 hover:bg-green-600 text-white text-sm shadow-md"
                  >
                    Demo
                  </a>
                  <a
                    href="project.code"
                    className="px-3 py-1 rounded-lg bg-violet-500 hover:bg-violet-600 text-white text-sm shadow-md"
                  >
                    Code
                  </a>
                </div>
              </div>
            </div>
          </motion.div>



  );
}
