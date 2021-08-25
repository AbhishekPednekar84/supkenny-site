import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images, selectedImage }) => {
  return (
    <Carousel
      dynamicHeight
      showStatus={false}
      showArrows={true}
      showThumbs={false}
      showIndicators={false}
      infiniteLoop
      selectedItem={selectedImage}
    >
      {images.map((image) => {
        return <img key={image.assetId} src={image.secure_url} alt="Gallery" />;
      })}
    </Carousel>
  );
};

export default ImageCarousel;
