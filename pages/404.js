import React from "react";
import Image from "next/image";

const PageNotFound = () => {
  return (
    <div className="notfound__container">
      <Image
        src="/gallery/site_images/404_sodjt9.svg"
        alt="Page not found"
        height={400}
        width={500}
      />
    </div>
  );
};

export default PageNotFound;
