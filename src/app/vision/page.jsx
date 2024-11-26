"use client";

import { motion } from "framer-motion";

const VisionPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
      transition:{
        duration:3
      }
    },
    variant2: {
      x: 100,
      y: -300,
      rotation: 90,
    },
  };

  return (
    <div className="h-full flex ">
      Vision.

    </div>
  );
};

export default VisionPage;
