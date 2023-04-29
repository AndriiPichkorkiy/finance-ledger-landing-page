import { useState } from 'react';
import { CasesSection, CasesContent, CasesGalleryWrapper, GalleryList, GalleryItem, ImageCaption } from "./Cases.styled";
import { TitleH2 } from '../../TitleH2';
import Lightbox from 'react-18-image-lightbox';
import { images, imagesForSlider } from './imagesData';
import ResponsiveImg from '../../ResponsiveImg/ResponsiveImg';

import 'react-18-image-lightbox/style.css';
import './slider.scss'

import { Loader } from '../../Loader';

export default function Cases() {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const gotoPrevious = () =>
    setCurrentIndex((currentImageIndex + imagesForSlider.length - 1) % imagesForSlider.length);

  const gotoNext = () =>
    setCurrentIndex((currentImageIndex + 1) % imagesForSlider.length);

  const hanlderOnClick = (e) => {
    const index = Number(e.currentTarget.dataset.index);
    setCurrentIndex(index)
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  return (
    <>
      {isOpen &&
        <Lightbox
          mainSrc={imagesForSlider[currentImageIndex]}
          nextSrc={imagesForSlider[(currentImageIndex + 1) % imagesForSlider.length]}
          prevSrc={imagesForSlider[(currentImageIndex + imagesForSlider.length - 1) % imagesForSlider.length]}

          onCloseRequest={handleClose}
          onMovePrevRequest={gotoPrevious}
          onMoveNextRequest={gotoNext}

          loader={<Loader />}
          imageCaption={<ImageCaption>{images[currentImageIndex].alt}</ImageCaption>}
        />
      }
      <CasesSection id="cases">
        <CasesContent>
          <p>This is what we do</p>
          <TitleH2>Business Cases</TitleH2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, sapiente!</p>
        </CasesContent>
        <CasesGalleryWrapper>
          <GalleryList>
            {images.map((img, i) => {
              return (
                <GalleryItem key={i} data-index={i} onClick={hanlderOnClick}>
                  <ResponsiveImg settings={img} />
                </GalleryItem>
              )
            })}
          </GalleryList>
        </CasesGalleryWrapper>
      </CasesSection>
    </>
  )
}
