import styles from "./Header.module.css";
import Image from "next/image";
import { NextSeo } from "next-seo";
import Link from "next/link";

const Header = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => {
  return (
    <>
      <NextSeo title={`${title} | Cubyx Network`} description={description} />
      <div className={styles.header}>
        <div className={styles.header__logo}>
          <Image
            src="/img/netzwerk.png"
            alt="CubyxNetwork Logo"
            width="70px"
            height="70px"
          />
          <h1>Cubyx Network</h1>
        </div>
        <div className={styles.rightbox}>
          <Link href="/">
            <a className="color-secondary">Home</a>
          </Link>
          <Link href="/team">
            <a>Team</a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
