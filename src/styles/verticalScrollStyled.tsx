import styled, { keyframes } from "styled-components";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100%{
    opacity: 1;
    transform: translateY(30%);
  }
`;

export const VerticalScrollContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0; /* 초기에 투명하게 설정 */
  

  &.frame-in {
    animation: ${frameInAnimation} 3s forwards;
  }
`;


const mainVerticalframeInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150%);
  }

  100%{
    opacity: 1;
    transform: translateY(100%);
  }
`;

export const MainVerticalScrollContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  opacity: 0; /* 초기에 투명하게 설정 */
  
  

  &.frame-in {
    animation: ${mainVerticalframeInAnimation} 3s forwards;
  }
`;