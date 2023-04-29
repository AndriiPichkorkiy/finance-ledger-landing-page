import { useState } from 'react';
import { CasesSection, CasesContent, CasesGalleryWrapper, GalleryList, GalleryItem, ImageCaption } from "./Cases.styled";
import { TitleH2 } from '../../TitleH2';
// import Lightbox from 'react-spring-lightbox';
import Lightbox from 'react-18-image-lightbox';
import { images, imagesForSlider } from './imagesData';
import ResponsiveImg from '../../ResponsiveImg/ResponsiveImg';

import 'react-18-image-lightbox/style.css';
import './slider.scss'

import { Loader } from '../../Loader';
// import FsLightbox from 'fslightbox-react';



console.log('imagesForSlider', imagesForSlider)
export default function Cases() {
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const gotoPrevious = () =>
    setCurrentIndex((currentImageIndex + imagesForSlider.length - 1) % imagesForSlider.length);

  const gotoNext = () =>
    setCurrentIndex((currentImageIndex + 1) % imagesForSlider.length);

  const hanlderOnClick = (e) => {
    const index = Number(e.currentTarget.dataset.index);
    console.log('index', index)
    setCurrentIndex(index)
    setIsOpen(true)
    // document.body.style.overflow = "hidden"
    // document.body.style.top = -(document.documentElement.scrollTop) + 'px';
    // document.body.classList.add("noscroll")
  }
  const handleClose = () => {
    setIsOpen(false)
    // const temp = -document.body.style.top.slice(0, -2)
    // document.body.classList.remove("noscroll")
    // window.scroll({
    //   top: temp,
    //   left: 0,
    //   behavior: "instant",
    // })
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
