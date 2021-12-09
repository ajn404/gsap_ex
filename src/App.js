import React from "react";
import FadeInAnimation from "./FadeInAnimation";

export default function App() {
  return (
    <div>
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="1">
        Hello darkness my old friend
      </FadeInAnimation>
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="2">
        Hello darkness my old friend
      </FadeInAnimation>
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="3">
        Hello darkness my old friend
      </FadeInAnimation>
      <FadeInAnimation direction="left" style={{
        fontWeight:"bold"
      }} delay="4">
        Hello darkness my old friend
      </FadeInAnimation>
    </div>
  );
}
