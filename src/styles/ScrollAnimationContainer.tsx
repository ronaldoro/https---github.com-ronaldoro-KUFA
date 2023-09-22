import { Container } from "./styled.tsx";
import { useScrollAnimation } from "./useScrollAnimation.tsx";

type PropsType = {
  children: React.ReactNode;
};

export const ScrollAnimationContainer = ({ children }: PropsType) => {
  const { ref, isInViewport } = useScrollAnimation();
  return (
    <Container ref={ref} className={isInViewport ? "frame-in" : ""}>
      {children}
    </Container>
  );
};