import Lottie from "lottie-react";
import coffeSpillingAnimation from "./lottie/coffee_spilling_404.json";
import { Wrapper } from "./index.style";

export default function NotFoundView() {
  return (
    <Wrapper>
      <Lottie animationData={coffeSpillingAnimation} loop={true} />
    </Wrapper>
  );
}
