import './AboutPage.css';
import { ScrollAnimationContainer } from "../styles/ScrollAnimationContainer.tsx";
import { VerticalScrollAnimationContainer } from "../styles/VerticalScrollAnimationContainer.tsx";
import kufaLogo from '../assets/kufaLogo.png';


function AboutPage() {  
  return (
    <div className="about-centered-image-container">
      <VerticalScrollAnimationContainer>
          <p>
            <span className="KUFA-text">한국대학축구동아리연맹</span> 
          </p>
        </VerticalScrollAnimationContainer>

      <ScrollAnimationContainer>
        <div className="image-text-container">
          <img src={kufaLogo} alt="" className="left-image" /> {/* 이미지 추가 */}
          <p>
            <span className="United-text">한국대학축구동아리연맹</span> 
            <span className="KUFA-text">KUFA</span>
          </p>
        <div>
          <p>
          <span className="small-text">2014년 서울권 대학축구동아리연맹을 시작으로</span> 
          </p>
          <p>
          <span className="small-text">경기, 부산, 충청, 전라광주, 대구경북, 인천권 지역 연맹들이 설립되었으며</span> 
          </p>
          <p>
          <span className="small-text">각 지역권 연맹들의 교류를 활성화하고</span> 
          </p>
          <p>
          <span className="small-text">대학아마추어문화발전을 이루기 위해 창설되었습니다.</span> 
          </p>
        </div>
        </div>
      </ScrollAnimationContainer>

      
    </div>
  );
}

export default AboutPage;