import { Variant } from "framer-motion";

export const animationStart = 6;

export const reveal: Variant = {
  hiddenVariant: { y: 50, opacity: 0 },
  revealedVariant: {
    y: 0,
    opacity: 1,
  },
};
