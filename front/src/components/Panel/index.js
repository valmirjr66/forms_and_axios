import { Toaster } from "react-hot-toast";
import { Wrapper } from "./index.style";

export default function Panel({ height, width, children }) {
  return (
    <Wrapper height={height} width={width}>
      <Toaster />
      {children}
    </Wrapper>
  );
}
