"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const words = `I specialize in crafting visually appealing and user-friendly web pages. Each project is a chance for me to refine designs, ensuring a seamless user experience. Eager to contribute to your projects.
`;

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
