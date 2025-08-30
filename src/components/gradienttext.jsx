import { motion } from "framer-motion";

export default function GradientText({ text, gradient }) {
  return (
    <motion.span
      className="font-bold text-5xl bg-clip-text text-transparent"
      style={{
        backgroundImage: gradient,
        backgroundSize: "200% auto",   // make gradient wider
      }}
      animate={{
        backgroundPosition: ["0% center", "100% center"], // scroll left → right
      }}
      transition={{
        duration: 1,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}
