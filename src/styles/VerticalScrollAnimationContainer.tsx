import { VerticalScrollContainer, MainVerticalScrollContainer } from "./verticalScrollStyled.tsx";
import { useScrollAnimation } from "./useScrollAnimation.tsx";

type PropsType = {
  children: React.ReactNode;
};

export const VerticalScrollAnimationContainer = ({ children }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <VerticalScrollContainer ref={ref} className={isInViewport ? "frame-in" : ""}>
      {children}
    </VerticalScrollContainer>
  );
};

export const MainVerticalScrollAnimationContainer = ({ children }: PropsType) => {
    const { ref, isInViewport } = useScrollAnimation();
    return (
      <MainVerticalScrollContainer ref={ref} className={isInViewport ? "frame-in" : ""}>
        {children}
      </MainVerticalScrollContainer>
    );
  };