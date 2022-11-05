import Image, { StaticImageData } from "next/image";
import React from "react";

/**
 * Section with headline and text on the left and a picture on the right
 * @constructor
 */
const SectionHTLeftPRight = ({
  headline,
  image,
  children,
}: {
  headline: string;
  image: StaticImageData;
  children: React.ReactNode;
}) => {
  return (
    <section className="flex flex-col lg:flex-row-reverse lg:items-center lg:gap-4">
      <Image
        src={image}
        alt={"Schiff in einer Bucht"}
        className={"w-full md:w-1/2 lg:w-1/2"}
      />

      <div className="flex-col lg:flex lg:w-1/2">
        <h1 className="mt-4 text-4xl font-bold lg:float-left lg:text-6xl">
          {headline}
        </h1>
        <p className="mt-4 w-full lg:float-left lg:w-3/4 lg:text-lg">
          {children}
        </p>
      </div>
    </section>
  );
};

export default SectionHTLeftPRight;
