import React, { useState, useEffect } from 'react';
import './SlideShow.css'; // 슬라이드 스타일 파일을 임포트합니다.

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(1);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 슬라이드로 이동
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // 1초마다 슬라이드 변경

    return () => {
      // 컴포넌트 언마운트 시 인터벌 제거
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <div className="slide-container">
      {images.map((image, index) => (
        <div
          key={index}
          className={`slide ${index === currentIndex ? 'active' : ''}`}
        >
          <img src={image} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </div>
  );
};

export default SlideShow;