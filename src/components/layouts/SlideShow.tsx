import React, { useState, useEffect } from 'react';
import './SlideShow.css'; // 슬라이드 스타일 파일을 임포트합니다.

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    // 1초마다 이미지 변경
    const intervalId = setInterval(changeImage, 2000);

    return () => {
      // 컴포넌트 언마운트 시 인터벌 제거
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="slide">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
    </div>
  );
};

export default SlideShow;