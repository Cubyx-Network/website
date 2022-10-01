import Image from "next/image";
import { NextSeo } from "next-seo";

const Header = ({
  title,
  description,
  disableNavigation = false,
  noIndex = false,
}: {
  title: string;
  description: string;
  disableNavigation?: boolean;
  noIndex?: boolean;
}) => {
  return (
    <>
      <NextSeo
        title={`${title} | Cubyx Network`}
        description={description}
        noindex={noIndex}
      />
      <div className="fixed top-0 left-0 z-40 flex w-full items-center justify-between p-4">
        <div className="flex items-center gap-4 text-4xl">
          <Image
            src="/img/netzwerk.png"
            alt="CubyxNetwork Logo"
            width="70px"
            height="70px"
          />
          <h1 className="m-0 hidden font-bold md:block">Cubyx Network</h1>
        </div>
        {!disableNavigation && (
          <div className="flex items-center gap-4">
            Navigation comming soon...
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
