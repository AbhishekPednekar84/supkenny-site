import React, { Fragment } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <Fragment>
      <div className="logo__style">
        <Link href="/">
          <a>
            <Image src="/logo.svg" alt="logo" height={50} width={50} />
          </a>
        </Link>
      </div>

      <div className="home__style">
        {router.pathname !== "/" && (
          <Link href="/">
            <a className="home__link">
              <Image src="/home.svg" alt="Home" width={50} height={50} />
            </a>
          </Link>
        )}
      </div>
    </Fragment>
  );
};

export default Logo;
