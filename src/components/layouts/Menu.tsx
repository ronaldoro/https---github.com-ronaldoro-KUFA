import React from 'react';
import './Menu.css';

const Menu = () => {
    const menuItems = ['연맹 소개', '지역 연맹', '공지사항', '자료실', 'Q/A'];
  
    return (
      <div className="menu-container">
        <div>
          {menuItems.map((item, index) => (
            <span key={index} className="menu-item">
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  };
  

export default Menu;