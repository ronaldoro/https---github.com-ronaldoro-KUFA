import React from 'react';
import './MainPage2.css';
import { motion } from "framer-motion";
import mainImage from '../assets/mainImage2.png';


function mainPage2() {
    const variants: {} = {
        hidden: {
          opacity: 0.2,
          y: 15
        },
        visible: (i: number) => ({
          opacity: 1,
          y: 0,
          transition: {
            delay: i * 0.2,
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse"
          }
        })
      };

  return (
    <div className="centered-image-container">
        <motion.div className='about-kufa-text'
            initial="hidden"
            animate="visible"
            variants={variants}>
                ABOUT KUFA
        </motion.div>
    </div>
  );
}

export default mainPage2;
