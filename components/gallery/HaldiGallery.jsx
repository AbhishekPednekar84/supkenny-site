import React, { useEffect, useContext } from "react";
import Image from "next/image";
import SiteContext from "../../context/siteContext";

// Component imports
import GalleryLayout from "./GalleryLayout";
import AltGalleryMessage from "./AltGalleryMessage";

const HaldiGallery = ({ styles }) => {
  const siteContext = useContext(SiteContext);
  const { setLoading, loading, images, getHaldiImages } = siteContext;

  useEffect(() => {
    setLoading();
    getHaldiImages();
  }, []);

  if (loading) {
    return (
      <div className="loader__container">
        <Image
          src="/gallery/site_images/loader_rmmrqd.svg"
          alt="Loading..."
          height={100}
          width={100}
        />
      </div>
    );
  }

  return (
    <div>
      {images && images.resources && images.resources.length !== 0 ? (
        <GalleryLayout images={images && images.resources} styles={styles} />
      ) : (
        <AltGalleryMessage
          styles={styles}
          eventDate={process.env.NEXT_PUBLIC_HALDI_DATE}
        />
      )}
    </div>
  );
};

export default HaldiGallery;
