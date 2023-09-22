import React, { useState } from 'react';
import './DropdownMenu.css';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={`dropdown-menu ${isOpen ? 'open' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button>메뉴 열기/닫기</button>
      <ul>
        <li>메뉴 항목 1</li>
        <li>메뉴 항목 2</li>
        <li>메뉴 항목 3</li>
      </ul>
    </div>
  );
}

export default DropdownMenu;
