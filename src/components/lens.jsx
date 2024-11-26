"use client";
import Link from "next/link";
import { motion, useTransform } from "framer-motion";

const Lens = ({ scrollYProgress }) => {
  const rotatesForward1 = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const rotatesForward2 = useTransform(scrollYProgress, [0, 1], [0, 180]);
  const rotatesForward3 = useTransform(scrollYProgress, [0, 1], [0, 90]);
  const rotatesForward4 = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const rotatesBackward1 = useTransform(scrollYProgress, [0, 1], [0, -360]);
  const rotatesBackward2 = useTransform(scrollYProgress, [0, 1], [0, -180]);
  const rotatesBackward3 = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const rotatesBackward4 = useTransform(scrollYProgress, [0, 1], [0, -45]);
  return (
    <div className="w-full h-full">
      <svg
        height="250px"
        width="250px"
        stroke="#000000"
        strokeWidth="0.00465"
        viewBox="0 0 28.3 28.3"
      >
        <g>
          <g>
            <motion.path
              id="path-1"
              style={{ rotate: rotatesForward1 }}
              d="M8.495,3.628c0,0-3.556,1.322-5.656,6.294l11.585-2.19L8.495,3.628z"
            />
            <motion.path
              id="path-2"
              style={{ rotate: rotatesForward1 }}
              d="M2.664,10.631c0,0-1.568,3.455,0.481,8.448l6.612-9.763L2.664,10.631z"
            />
            <motion.path
              id="path-3"
              style={{ rotate: rotatesForward1 }}
              d="M3.588,19.571c0,0,1.322,3.556,6.294,5.656L7.693,13.64L3.588,19.571z"
            />
            <motion.path
              id="path-4"
              style={{ rotate: rotatesForward1 }}
              d="M10.591,25.401c0,0,3.455,1.567,8.448-0.481l-9.763-6.61L10.591,25.401z"
            />
            <motion.path
              id="path-5"
              style={{ rotate: rotatesForward1 }}
              d="M19.722,24.629c0,0,3.557-1.322,5.656-6.296l-11.586,2.189L19.722,24.629z"
            />
            <motion.path
              id="path-6"
              style={{ rotate: rotatesForward1 }}
              d="M25.071,9.177l-6.61,9.763l7.093-1.316C25.554,17.625,27.12,14.17,25.071,9.177z"
            />
            <motion.path
              id="path-7"
              style={{ rotate: rotatesForward1 }}
              d="M24.628,8.685c0,0-1.322-3.556-6.295-5.655l2.189,11.585L24.628,8.685z"
            />
            <motion.path
              id="path-8"
              style={{ rotate: rotatesForward1 }}
              d="M17.624,2.855c0,0-3.453-1.568-8.447,0.482l9.764,6.61L17.624,2.855z"
            />
            <motion.path
              id="path-9"
              style={{ rotate: rotatesForward1 }}
              d="M14.151,0C6.336,0,0,6.336,0,14.15C0,21.963,6.335,28.3,14.151,28.3
			c7.813,0,14.149-6.338,14.149-14.15C28.301,6.336,21.965,0,14.151,0z M14.151,27.206c-7.199,0-13.057-5.857-13.057-13.056
			S6.952,1.094,14.151,1.094c7.197,0,13.055,5.857,13.055,13.056C27.206,21.349,21.348,27.206,14.151,27.206z"
            />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default Lens;
