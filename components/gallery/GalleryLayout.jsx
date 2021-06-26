import React, { useState } from "react";
import Image from "next/image";
import Masonry from "react-masonry-css";
import Modal from "react-modal";

// Fontawesome imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const breakpoints = {
  default: 4,
  1100: 3,
  900: 2,
  500: 1,
};

const GalleryLayout = ({ images }) => {
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

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
          images.map((image, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              style={{ cursor: "pointer" }}
            >
              <Image
                src={image.secure_url}
                alt={`Image-${index}`}
                height={image.height / 2}
                width={image.width / 2}
              />
            </div>
          ))}
      </Masonry>

      <Modal
        style={{
          overlay: {
            zIndex: 99999,
            opacity: 1,
            backgroundColor: "rgba(255, 255, 255, 0.97)",
          },
        }}
        isOpen={openModal}
        shouldFocusAfterRender={true}
        onRequestClose={() => setOpenModal(false)}
        className="modal__style"
      >
        <div>
          <FontAwesomeIcon
            icon={faTimes}
            className="close__icon__alt"
            onClick={() => setOpenModal(false)}
          />
          <span className="esc__icon__alt">ESC</span>
          <div className="images__in__modal">
            <img
              src={images && images[selectedImage].secure_url}
              alt="enlarged-image"
              height={images && images[selectedImage].height / 1.8}
              width={images && images[selectedImage].width / 1.8}
            />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default GalleryLayout;
