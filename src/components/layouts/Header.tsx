import React, { useState, useEffect } from 'react';
import './Header.css'; // 스타일 파일을 임포트합니다.
import kufaLogo from '../../assets/kufaLogo.png';
import { motion } from "framer-motion";


interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {  
  const [shouldRenderMenu, setShouldRenderMenu] = useState(window.innerWidth > 1600);
  const [aboutText, setAboutText] = useState('ABOUT');
  const [matchText, setMatchText] = useState('MATCH');
  const [newsText, setNewsText] = useState('NEWS');

  const handleAboutMouseEnter = () => {
    setAboutText('연맹 소개');
  };

  const handleAboutMouseLeave = () => {
    setAboutText('ABOUT');
  };

  const handleMatchMouseEnter = () => {
    setMatchText('대회 정보');
  };

  const handleMatchMouseLeave = () => {
    setMatchText('MATCH');
  };

  const handleNewsMouseEnter = () => {
    setNewsText('연맹 소식');
  };

  const handleNewsMouseLeave = () => {
    setNewsText('NEWS');
  };

  useEffect(() => {
    // 윈도우 크기가 변경될 때 상태를 업데이트
    const handleResize = () => {
      setShouldRenderMenu(window.innerWidth > 1600);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      // 컴포넌트 언마운트 시 리스너 제거
      window.removeEventListener('resize', handleResize);
    };
  }, []);


    return (
      <header className="header-container">
        <div className="logo-container">
          <img src={kufaLogo} alt="kufaLogo" className="logo" />
        </div>
        
        <div className="logo-container">
          {shouldRenderMenu && (
            <>
                <motion.div className="menu-prop"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                        CONTACT
                </motion.div>
                <motion.div className="menu-prop"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                        GALLERY
                </motion.div>
                <motion.div className="menu-prop"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}>
                        ACTIVITY
                </motion.div>
                <motion.div className="menu-prop"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={handleNewsMouseEnter}
                    onMouseLeave={handleNewsMouseLeave}>
                        {newsText}
                </motion.div>                
                <motion.div className="menu-prop"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={handleMatchMouseEnter}
                    onMouseLeave={handleMatchMouseLeave}>
                        {matchText}
                </motion.div>                   
                <motion.div className="menu-prop"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    onMouseEnter={handleAboutMouseEnter}
                    onMouseLeave={handleAboutMouseLeave}>
                        {aboutText}
                </motion.div>
            </>
          )}       
        </div>
      </header>
    );
  };

export default Header;