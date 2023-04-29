import { useState } from 'react';
import { CasesSection, CasesContent, CasesGalleryWrapper, GalleryList, GalleryItem } from "./Cases.styled";
import { TitleH2 } from '../../TitleH2';
import Lightbox from 'react-spring-lightbox';
import { images, imagesForSlider } from './imagesData';
import ResponsiveImg from '../../ResponsiveImg/ResponsiveImg';
console.log('imagesForSlider', imagesForSlider)
export default function Cases() {
  // react-spring-lightbox settings
  const [currentImageIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  const gotoPrevious = () =>
    currentImageIndex > 0 && setCurrentIndex(currentImageIndex - 1);

  const gotoNext = () =>
    currentImageIndex + 1 < images.length &&
    setCurrentIndex(currentImageIndex + 1);

  const hanlderOnClick = (e) => {
    // console.log('e.currentTarget', e.currentTarget)
    // console.log('e.currentTarget.dataset', e.currentTarget.dataset)
    const index = Number(e.currentTarget.dataset.index);
    setCurrentIndex(index)
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }
  // react-spring-lightbox end
  return (
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

        <Lightbox
          isOpen={isOpen}
          onPrev={gotoPrevious}
          onNext={gotoNext}
          images={images}
          currentIndex={currentImageIndex}
          /* Add your own UI */
          // renderHeader={() => (<CustomHeader />)}
          // renderFooter={() => (<CustomFooter />)}
          // renderPrevButton={() => (<CustomLeftArrowButton />)}
          // renderNextButton={() => (<CustomRightArrowButton />)}
          // renderImageOverlay={() => (<ImageOverlayComponent >)}

          /* Add styling */
          className="lazyImage"
          style={{
            background: "#000000B3", // black with 70% opacity
          }}

          /* Handle closing */
          onClose={handleClose}

          /* Use single or double click to zoom */
          singleClickToZoom

        /* react-spring config for open/close animation */
        // pageTransitionConfig={{
        //   from: { transform: "scale(0.75)", opacity: 0 },
        //   enter: { transform: "scale(1)", opacity: 1 },
        //   leave: { transform: "scale(0.75)", opacity: 0 },
        //   config: { mass: 1, tension: 320, friction: 32 }
        // }}
        />
      </CasesGalleryWrapper>
    </CasesSection>
  )
}
