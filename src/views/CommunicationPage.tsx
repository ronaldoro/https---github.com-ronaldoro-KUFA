import './CommunicationPage.css';
import { ScrollAnimationContainer } from "../styles/ScrollAnimationContainer.tsx";
import { MainVerticalScrollAnimationContainer } from "../styles/VerticalScrollAnimationContainer.tsx";


function CommunicationPage() {  
  return (
    <div className="communi-centered-image-container">      
        <MainVerticalScrollAnimationContainer>
          <p>
            <span className='communi-text' >"전국 모든 대학축구동아리들이 한 곳에 모여"</span> 
          </p>
        </MainVerticalScrollAnimationContainer>
    
        <MainVerticalScrollAnimationContainer>
            <p>
                <span className='communi-text'>교류하고 소통하는 장을 만들자</span> 
            </p>
        </MainVerticalScrollAnimationContainer>
     
        <MainVerticalScrollAnimationContainer>
            <div className="flex-container">
                <div className="rectangle-container">
                    <div className="rectangle">
                        <p className="text">대회 시스템 구축</p>
                    </div>
                </div>
                <div className="rectangle-container">
                    <div className="rectangle">
                        <p className="text">문화 창조</p>
                    </div>
                </div>
                <div className="rectangle-container">
                    <div className="rectangle">
                        <p className="text">축구산업전문가 양성</p>
                    </div>
                </div>
                <div className="rectangle-container">
                    <div className="rectangle">
                        <p className="text">축구동아리 지원</p>
                    </div>
                </div>
            </div> 
        </MainVerticalScrollAnimationContainer>
    </div>
  );
}

export default CommunicationPage;