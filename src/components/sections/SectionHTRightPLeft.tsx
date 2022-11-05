import Image, { StaticImageData } from "next/image";
import React from "react";

/**
 * Section with headline and text on the right and a picture on the left
 * @constructor
 */
const SectionHTLeftPRight = ({
  headline,
  image,
  alt,
  children,
}: {
  headline: string;
  image: StaticImageData;
  alt: string;
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-4">
      <div className="flex-col lg:flex lg:w-1/2 lg:items-end">
        <h1 className="mt-4 text-4xl font-bold lg:float-right lg:text-6xl">
          {headline}
        </h1>
        <p className="mt-4 mb-4 w-full lg:float-right lg:w-3/4 lg:text-right lg:text-lg">
          {children}
        </p>
      </div>

      <Image src={image} alt={alt} className={"w-auto md:w-1/2 lg:w-1/2"} />
    </section>
  );
};

export default SectionHTLeftPRight;
