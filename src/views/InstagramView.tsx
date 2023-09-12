import React from 'react';
import './InstagramView.css'; 
import instagram1 from '../assets/instagram1.png';
import instagram2 from '../assets/instagram2.png';
import instagram3 from '../assets/instagram3.png';
import instagram4 from '../assets/instagram4.png';

const InstagramItemComponent = ({ imageSrc }) => {
    return (
        <img src={imageSrc} alt="Item" className='instagram-image'/>
    );
  };

const InstagramView = () => {
    const instagramItemComponents = [
        { id: 1, imageSrc: instagram1, text: 'Item 1' },
        { id: 2, imageSrc: instagram2, text: 'Item 2' },
        { id: 3, imageSrc: instagram3, text: 'Item 3' },
        { id: 4, imageSrc: instagram4, text: 'Item 4' },
      ].map((item) => (
        <InstagramItemComponent
          key={item.id}
          imageSrc={item.imageSrc}
        />
      ));
    
      return (
        <div className="unitedlistview">
            <div className="centered-content">INSTAGRAM</div>
            <div className="grid-container">
                {instagramItemComponents}
            </div>
        </div>
      );
};

export default InstagramView;