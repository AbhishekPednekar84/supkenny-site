import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ImageCarousel = ({ images, selectedImage }) => {
  return (
    <Carousel
      dynamicHeight
      showStatus={false}
      showArrows={true}
      autoPlay
      interval={3000}
      showThumbs={false}
      infiniteLoop
      selectedItem={selectedImage}
    >
      {images.map((image) => {
        return (
          <div
            key={image.assetId}
            style={{
              maxWidth: 600,
              margin: "10px auto",
              padding: "0 20px",
              overflow: "hidden",
            }}
          >
            <img src={image.secure_url} alt="Gallery" />
          </div>
        );
      })}
    </Carousel>
  );
};

export default ImageCarousel;
