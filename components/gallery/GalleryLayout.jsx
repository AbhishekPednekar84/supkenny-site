import React, { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Modal from "react-modal";
import ImageCarousel from "./ImageCarousel";
import { motion } from "framer-motion";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const breakpoints = {
  default: 4,
  1100: 3,
  900: 2,
  500: 1,
};

Modal.setAppElement("#__next");

const variants = {
  tap: { y: "2px" },
};

const GalleryLayout = ({ images, styles }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showImages, setShowImages] = useState(20);

  const handleClick = (index) => {
    setOpenModal(true);
    setSelectedImage(index);
  };

  return (
    <div>
      <Masonry
        breakpointCols={breakpoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {images &&
          images.slice(0, showImages).map((image, index) => (
            <div
              key={image.assetId}
              onClick={() => handleClick(index)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={image.public_id + "." + image.format}
                alt="Image from the gallery"
                height={image.height / 2}
                width={image.width / 2}
              />
            </div>
          ))}
      </Masonry>

      {images.length > showImages && (
        <div className={styles.load__more__images__button__container}>
          <motion.button
            variants={variants}
            whileTap="tap"
            onClick={() => setShowImages(showImages + 20)}
            className={styles.load__more__images__button}
          >
            Show More Images
          </motion.button>
        </div>
      )}

      <Modal
        style={{
          overlay: {
            zIndex: 9999,
            opacity: 1,
            backgroundColor: "#343434",
            overflow: "scroll",
            maxWidth: "100%",
          },
        }}
        isOpen={openModal}
        shouldFocusAfterRender={true}
        onRequestClose={() => setOpenModal(false)}
        className="modal__style"
      >
        <div className={styles.carousel__image__container}>
          <FontAwesomeIcon
            icon={faTimes}
            className="close__icon__alt"
            onClick={() => setOpenModal(false)}
          />
          <span className="esc__icon__alt" style={{ color: "#FFF" }}>
            ESC
          </span>
          {/* <div className="images__in__modal">
            <img
              src={images && images[selectedImage].secure_url}
              alt="enlarged-image"
              height={images && images[selectedImage].height / 1.8}
              width={images && images[selectedImage].width / 1.8}
            />
          </div> */}

          <ImageCarousel
            images={images}
            selectedImage={selectedImage}
            setOpenModal={setOpenModal}
          />
        </div>
      </Modal>
    </div>
  );
};

export default GalleryLayout;
