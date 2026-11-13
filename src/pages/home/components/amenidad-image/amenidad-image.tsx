import { AnimatePresence, motion } from "motion/react";

type AmenidadImageProps = {
  src: string;
  alt: string;
  delay?: number;
};

export function AmenidadImage({ src, alt, delay = 0 }: AmenidadImageProps) {
  return (
    <AnimatePresence initial={false}>
      <motion.img
        key={src}
        src={src}
        alt={alt}
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
        }}
        exit={{ opacity: 0, transition: { duration: 0.4, delay } }}
        className="absolute inset-0 h-full w-full object-cover"
      />
    </AnimatePresence>
  );
}
