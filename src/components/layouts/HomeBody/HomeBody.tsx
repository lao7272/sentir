import { useInView } from 'react-intersection-observer';
export default function HomeBody() {
    const { ref, inView } = useInView({ threshold: .05, triggerOnce: true });
    return (
        <div ref={ref} className="home-body">
            <div className={`home-body-section ${inView ? "show" : "hidden"}`}>
                <div className="home-body-info">
                    <h3>¿Que hacemos?</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quos eligendi odio eos tempore explicabo deleniti cum aliquid voluptatibus totam quis et cupiditate rem amet distinctio voluptate blanditiis nihil, asperiores exercitationem eveniet esse reiciendis. Temporibus minima quis veritatis aperiam commodi!
                    </p>
                </div>
                <div>
                    <img src="./assets/gallery/sentir-3/body.jpeg" alt="imagen" />
                </div>
            </div>
            <div className="music-section" >
                <div className='music-img'>
                    <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><g fill="#b87a43"><circle r="147" cx="350" cy="200"></circle><circle r="65" cx="601" cy="385"></circle><circle r="76" cy="550" cx="80"></circle></g></svg>
                    <img src="./assets/gallery/sentir-1/bg-removed.png" alt="imagen" />
                </div>
                <div className="music-description">
                    <h3>Musica</h3>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum placeat possimus dolores voluptatum, nostrum voluptate dicta vitae cum corporis optio.</p>
                </div>
            </div>
            <div className="experience-section">
                <div className="experience-description">
                    <h3>Experiencia</h3>
                </div>
                <div className='experience-img'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quam temporibus possimus repudiandae consequatur illo accusantium est doloremque cupiditate amet aut reiciendis fuga, delectus, placeat debitis beatae maxime asperiores iste!
                </div>
            </div>
        </div>
    )
}
