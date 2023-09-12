import React from 'react';
import './Header.css'; // 스타일 파일을 임포트합니다.
import kufaLogo from '../../assets/kufaLogo.png';
import gufaLogo from '../../assets/gufaLogo.png';
import sufaLogo from '../../assets/sufaLogo.png';
import cufaLogo from '../../assets/cufaLogo.png';


interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
    return (
      <header className="header-container">
        <div className="logo-container">
          <img src={kufaLogo} alt="kufaLogo" className="logo" />
        </div>
        
        <div className="logo-container">
          <img src={gufaLogo} alt="gufaLogo" className="right-logo" />
          <img src={sufaLogo} alt="sufaLogo" className="right-logo" />
          <img src={cufaLogo} alt="cufaLogo" className="right-logo" />
          <img src={cufaLogo} alt="cufaLogo" className="right-logo" />
          <img src={cufaLogo} alt="cufaLogo" className="right-logo" />
          <img src={cufaLogo} alt="cufaLogo" className="right-logo" />
        </div>
      </header>
    );
  };

export default Header;