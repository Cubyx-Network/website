import { motion } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import React from "react";

/**
 * Section with headline, text and image
 */
const Section = ({
  headline,
  rightImage,
  leftImage,
  alt,
  children,
  className,
}: {
  headline: string;
  rightImage?: StaticImageData;
  leftImage?: StaticImageData;
  alt: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const colCount: number =
    rightImage && leftImage ? 3 : rightImage || leftImage ? 2 : 1;

  return (
    <motion.section
      initial={{ x: -40, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      className={`grid-cols-${colCount} place-items-center gap-4 md:grid ${className}`}
    >
      {rightImage && (
        <div className="my-4 max-w-2xl lg:max-w-5xl">
          <Image src={rightImage} alt={alt} className={""} />
        </div>
      )}

      <div className={!leftImage && !rightImage ? "text-center" : ""}>
        <h1 className="text-3xl font-bold lg:text-4xl">{headline}</h1>
        <p className="mt-4 max-w-2xl xl:max-w-4xl">{children}</p>
      </div>

      {leftImage && (
        <div className="my-4 max-w-2xl lg:max-w-5xl">
          <Image src={leftImage} alt={alt} className={""} />
        </div>
      )}
    </motion.section>
  );
};

export default Section;
