import { motion } from "framer-motion";

export default function AnimatedSkillCard({ Icon, name }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="w-35 h-35 flex flex-col items-center p-6 rounded-2xl shadow-md border border-gray-200 
                 dark:border-gray-700 hover:shadow-xl transition bg-white dark:bg-gray-900 cursor-pointer"
    >
      <Icon className="w-12 h-12 text-indigo-500 dark:text-indigo-400" />
      <p className="mt-5 text-lg font-semibold text-gray-200 dark:text-gray-200">{name}</p>
    </motion.div>
  );
}
