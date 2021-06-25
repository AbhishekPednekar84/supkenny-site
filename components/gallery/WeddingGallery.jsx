import React, { useContext, useEffect } from "react";
import Image from "next/image";
import SiteContext from "../../context/siteContext";

// Component imports
import AltGalleryMessage from "./AltGalleryMessage";
import GalleryLayout from "./GalleryLayout";

const WeddingGallery = ({ styles }) => {
  const siteContext = useContext(SiteContext);
  const { setLoading, loading, images, getWeddingImages } = siteContext;

  useEffect(() => {
    setLoading();
    getWeddingImages();
  }, []);

  if (loading) {
    return (
      <div className="loader__container">
        <Image src="/loader.svg" alt="Loading..." height={100} width={100} />
      </div>
    );
  }

  return (
    <div>
      {images && images.resources && images.resources.length !== 0 ? (
        <GalleryLayout images={images && images.resources} />
      ) : (
        <AltGalleryMessage
          styles={styles}
          eventDate={process.env.NEXT_PUBLIC_WEDDING_DATE}
        />
      )}
    </div>
  );
};

export default WeddingGallery;
