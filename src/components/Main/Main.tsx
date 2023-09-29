import Carousel from 'react-bootstrap/Carousel';
import { homeSlider } from '../../constants/constants';
export default function Main() {
  return (
    <Carousel className='h-100'>
      {
        homeSlider.map((image, i) => {
          return (
            <Carousel.Item key={`${i}-home`}  interval={3000}>
              <div
                className='d-block w-100 carousel-img'
                style={{ background: `linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${image})` }}>
              </div>
              <Carousel.Caption>
                <h3>Sentite Artista</h3>
              </Carousel.Caption>
            </Carousel.Item>
          )
        })
      }
    </Carousel>
  )
}