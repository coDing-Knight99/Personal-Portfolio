import { motion } from "framer-motion";

export default function Profile({ Icon ,link }) {
  return (
    <motion.div
      whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="w-35 h-35 flex flex-col items-center p-6 rounded-2xl shadow-md
                 hover:shadow-xl transition cursor-pointer"
    >
      <Icon onClick={()=>{
        window.open(link,'_blank');
      }} className="xl:w-12 xl:h-12 w-10 h-10 text-indigo-500 dark:text-indigo-400" />
      
    </motion.div>
  );
}
