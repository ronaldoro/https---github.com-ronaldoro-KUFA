import React from 'react';
import { motion } from "framer-motion";
import './UnitedListView.css'; 
import gufaLogo from '../assets/gufaLogo.png';

const UnitedItemComponent = ({ imageSrc, text }) => {
    return (
      <motion.div
      className="roundRect"
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      initial={{ scale: 0 }}
      animate={{ scale: 1, rotateZ: 360 }}
      >
        <img
        src={imageSrc}
        alt="Item"
        className="image-overlay"
        />
      </motion.div>
    );
  };

const UnitedListView = () => {
    const unitedItemComponents = [
        { id: 1, imageSrc: gufaLogo, text: 'Item 1' },
        { id: 2, imageSrc: gufaLogo, text: 'Item 2' },
        { id: 3, imageSrc: gufaLogo, text: 'Item 3' },
        { id: 4, imageSrc: gufaLogo, text: 'Item 4' },
      ].map((item) => (
        <UnitedItemComponent
          key={item.id}
          imageSrc={item.imageSrc}
          text={item.text}
        />
      ));
    
      return (
        <div className="unitedlistview">
            <div className="centered-content">대학 아마추어 축구동아리 연맹</div>
            <div className="grid-container">
                {unitedItemComponents}
            </div>
        </div>
      );
};

export default UnitedListView;