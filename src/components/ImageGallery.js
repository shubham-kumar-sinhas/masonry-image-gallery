import React, { useState, useCallback } from "react";
import { isMobile } from 'react-device-detect';
import styled from "styled-components";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";
import { album1 } from "../constants/album1";

const Container = styled.div`
    margin: 3rem 8rem;
    @media only screen and (max-width: 900px) {
        margin: .5rem;
    }
`;

const StyledCarousel = styled(Carousel)`
    max-width: 100px;
`;

const ImageGallery = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const openLightbox = useCallback((event, { photo, index }) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  }, []);

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  return (
    <Container>
        <h2><center>Masonry Image Gallery</center></h2>
        <br />
        <Gallery onClick={openLightbox} photos={album1} direction={"column"} columns={ isMobile ? 2 : 4 } />
        <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <StyledCarousel
              currentIndex={currentImage}
              views={album1.map(x => ({
                ...x,
                srcset: x.srcSet,
                caption: x.title
              }))}
            />
            {/* </IKContext> */}
          </Modal>
        ) : null }
      </ModalGateway>
    </Container>
  )
}

export default ImageGallery;