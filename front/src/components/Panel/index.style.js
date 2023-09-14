import styled from 'styled-components'

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  height: 100vh;
  width: 100vw;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const AnimatedTitle = {
  Box: styled.div`
  width: 400px;
  height: 200px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 60px;
  font-family: Coffee;
  flex-grow: 1;
  cursor: pointer;

  ${(props) => props.play &&
    `span {
      animation: breeze ${props.duration || 1000}ms ease;
      animation-delay: calc(50ms * var(--i));
    }`
  }
  
  @keyframes breeze {
    0%, 100% {
      transform: scale(1);
    }

    50% {
      transform: scale(1.2) translateY(-10px);
      filter: blur(5px);
      opacity: 0.2
    }
  }
  `,
  Fragment: styled.span`
    padding: 0px 2px;
  `
}