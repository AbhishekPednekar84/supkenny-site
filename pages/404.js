import React from "react";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="notfound__container">
      <Image
        src="/images/404/404.svg"
        alt="Page not found"
        height={400}
        width={500}
      />
    </div>
  );
};

export default PageNotFound;
