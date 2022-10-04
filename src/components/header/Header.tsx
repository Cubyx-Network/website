import Image from "next/image";
import { NextSeo } from "next-seo";
import redaxios from "redaxios";
import { User } from "@prisma/client";

function logout() {
  redaxios.delete("/api/sessions").then((r) => {
    if (r.status === 200) {
      window.location.href = "/";
    }
  });
}

const Header = ({
  title,
  description,
  disableNavigation = false,
  noIndex = false,
  isIntern = false,
  user,
}: {
  title: string;
  description: string;
  disableNavigation?: boolean;
  noIndex?: boolean;
  isIntern?: boolean;
  user?: User;
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
        {!disableNavigation ||
          (!isIntern && (
            <div className="flex items-center gap-4">
              Navigation comming soon...
            </div>
          ))}
        {isIntern && (
          <div className="flex items-center justify-center gap-4">
            <span className="color-third">
              {user ? user.username : "Unbekannter"}
            </span>
            <input
              type="button"
              value="Ausloggen"
              className="hover:cursor-pointer"
              onClick={logout}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
