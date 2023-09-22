import styled, { keyframes } from "styled-components";

const frameInAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-70%);
  }

  100%{
    opacity: 1;
    transform: translateX(-30%);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  

  &.frame-in {
    animation: ${frameInAnimation} 5s forwards;
  }
`;