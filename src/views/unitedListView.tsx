import React from 'react';
import './UnitedListView.css'; 
import gufaLogo from '../assets/gufaLogo.png';

const UnitedItemComponent = ({ imageSrc, text }) => {
    return (
      <div className="roundRect">
        <img
        src={imageSrc}
        alt="Item"
        className="image-overlay"
      />
        
      </div>
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