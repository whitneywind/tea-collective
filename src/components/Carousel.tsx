import carouselImg1 from '../assets/IMG_7117.jpg';
import carouselImg2 from '../assets/IMG_7120.jpg';
import carouselImg3 from '../assets/img8.jpg';
import staticImg1 from '../assets/IMG_7491.jpg';
import staticImg2 from '../assets/IMG_1029.jpg';
import staticImg3 from '../assets/IMG_7152.jpg';
import { Carousel, CarouselItem, CarouselIndicators } from 'reactstrap';
import { useState } from 'react';



const CarouselComponent = () => {
            // State for Active index
            const [activeIndex, setActiveIndex] = useState(0);
        
            // State for Animation
            const [animating, setAnimating] = useState(false);
            
            // Sample items for Carousel
            const items = [
                {src: carouselImg1
                },
                {src: carouselImg2
                },
                {src: carouselImg3
                }
            ];
            
            // Items array length
            const itemLength = items.length - 1
            
            // Previous button for Carousel
            const previousButton = () => {
                if (animating) return;
                const nextIndex = activeIndex === 0 ?
                    itemLength : activeIndex - 1;
                setActiveIndex(nextIndex);
            }
            
            // Next button for Carousel
            const nextButton = () => {
                if (animating) return;
                const nextIndex = activeIndex === itemLength ?
                    0 : activeIndex + 1;
                setActiveIndex(nextIndex);
            }
            
            // Carousel Item Data
            const carouselItemData = items.map((item) => {
                return (
                    <CarouselItem
                        key={item.src}
                        onExited={() => setAnimating(false)}
                        onExiting={() => setAnimating(true)}
                    >
                        <img src={item.src} className="w-70 img-fluid" />
                    </CarouselItem>
                );
            });

    return (
        <>
            <div className="row row-content">
                <div className="col col-lg-10 offset-lg-1">
                    <div className="d-md-block w-70 d-xs-none">
                        <Carousel previous={previousButton} next={nextButton} 
                            activeIndex={activeIndex}>
                            <CarouselIndicators items={items}
                                activeIndex={activeIndex}
                                onClickHandler={(newIndex: number) => {
                                    if (animating) return;
                                    setActiveIndex(newIndex);
                                }} />
                            {carouselItemData}
                        </Carousel>
                    </div >
                    
                </div>
            </div>
            <div className="row row-content">
                <div className="clickables col col-lg-10 offset-lg-1 d-flex my-4">
                    <a className="mr-4"><img className="img-fluid row-img" src={ staticImg1 } alt="pic1" /></a>
                    <a className="mx-2"><img className="img-fluid row-img" src={ staticImg2 } alt="pic1" /></a>
                    <a className="ml-4"><img className="img-fluid row-img" src={ staticImg3 } alt="pic1" /></a>
                </div>
            </div>
        </>
    )
}

export default CarouselComponent;