import { Wrapper } from "./index.style";

export default function Container({ height, width, children }) {
  return (
    <Wrapper height={height} width={width}>
      {children}
    </Wrapper>
  );
}