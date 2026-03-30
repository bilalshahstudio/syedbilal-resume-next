"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

type IntroScreenProps = {
  onFinish: () => void;
};

export default function IntroScreen({ onFinish }: IntroScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 6000); // show for 3 seconds
    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-[9999]"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-extrabold text-highlight mb-4"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to Bit Lens
      </motion.h1>

      <motion.p
        className="text-lg text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        Clarity in every bit ✨
      </motion.p>

      <motion.p
        className="text-sm mt-4 text-gray-500"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        Hi, I’m Syed Bilal – Web Designer
      </motion.p>
    </motion.div>
  );
}
