import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const overlayVariants = {
  initial: { opacity: 1, x: 0 },
  animate: { opacity: 0, x: "-100%" },
};

const Overlay = ({ onComplete }) => {
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setHasAnimated(true);
    }, 1000); // Duration of the animation

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasAnimated) {
      onComplete();
    }
  }, [hasAnimated, onComplete]);

  return (
    <motion.div
      className="fixed inset-0 bg-yellow-500 z-50"
      variants={overlayVariants}
      initial="initial"
      animate="animate"
      transition={{ duration: 1, ease: "easeInOut" }}
    />
  );
};

export default Overlay;
