import Carousel from 'react-bootstrap/Carousel';
export default function Main() {
  return (
    <Carousel className='h-100'>
      <Carousel.Item interval={3000}>
        <div 
        className='d-block w-100 carousel-img' 
        style={{background: "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/gallery/sentir-1/main.jpg)"}}>
        </div>
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <div 
        className='d-block w-100 carousel-img' 
        style={{background: "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/gallery/sentir-2/main-2.JPG)"}}>
        </div>
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
      <div 
        className='d-block w-100 carousel-img' 
        style={{background: "linear-gradient(to right, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(/assets/gallery/sentir-1/sentir-1-1.jpg)"}}>
        </div>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    )
}