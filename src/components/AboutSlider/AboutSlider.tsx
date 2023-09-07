import Slider, { Settings } from "react-slick";
import { NextArrow, PrevArrow } from "../SliderArrows/SliderArrows";
export default function AboutSlider() {
    const settings: Settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }
            }
        ]
    };
    return (
        <div className="about-slider">
            <Slider {...settings}>
                <div className="about-card about-card-1">
                    <h3>Sentir 1.0</h3>
                </div>
                <div className="about-card about-card-2">
                    <h3>Sentir 2.0</h3>
                </div>
                <div className="about-card about-card-3">
                    <h3>Sentir 3.0</h3>
                </div>
                <div className="about-card about-card-4">
                    <h3>Sentir(nos)</h3>
                </div>
            </Slider>
        </div>
    )
}
