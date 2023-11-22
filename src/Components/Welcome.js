import Carousel from 'react-bootstrap/Carousel';
import image1 from '../assets/images/image 3.png';
import image2 from '../assets/images/image 4.png';
import leftArrow from '../assets/images/Left.png';
import rightArrow from '../assets/images/right.png';

function Welcome() {
  return (
    <Carousel
                fade
                prevIcon={<img src={leftArrow} alt="prevIcon" />}
                nextIcon={<img src={rightArrow} alt="nextIcon" />}
            >
                <Carousel.Item className="container d-flex justify-content-center">
                    <img src={image1} alt="img1" />
                </Carousel.Item>
                <Carousel.Item className="container d-flex justify-content-center">
                    <img src={image2} alt="img2" />
                </Carousel.Item>
                {/* Add more Carousel.Items as needed */}
            </Carousel>
  );
}

export default Welcome;
