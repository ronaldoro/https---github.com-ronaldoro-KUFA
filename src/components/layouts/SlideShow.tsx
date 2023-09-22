import React, { useState, useEffect } from 'react';
import './SlideShow.css'; // 슬라이드 스타일 파일을 임포트합니다.

const SlideShow = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // 다음 슬라이드로 이동
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); 

    return () => {
      clearInterval(intervalId);
    };
  }, [images]);

  return (
    <div class="center" className="slide-container">
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