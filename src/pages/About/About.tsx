import AboutSlider from "../../components/AboutSlider/AboutSlider";
export default function About() {
    
    return (
        <div className="about">
            <div className="about-main">
                <div className="about-main-img">
                    <img src="./assets/gallery/about/about.jpg" alt="" />
                </div>
                <div className="about-main-description">
                    <h3><i>Sobre Nosotros</i></h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, error officia. Minus ipsam reiciendis dolorem ad aliquam at consequuntur ex!
                    </p>
                </div>
            </div>
            <div className="about-history">
                <div className="about-history-wrapper">
                    <h3>Nuestra historia</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet voluptatibus eaque recusandae molestias tenetur corporis ut possimus expedita vitae, accusantium quis temporibus vel dicta. Eius?</p>
                </div>
            </div>
            <AboutSlider/>
        </div>
    )
}