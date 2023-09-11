import { useInView } from 'react-intersection-observer';
export default function HomeBody() {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div className="home-body">
            <div className={`home-body-section ${inView ? "show" : "hidden"}`}>
                <div className="home-body-info" ref={ref}>
                    <h3>¿Que hacemos?</h3>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia, quos eligendi odio eos tempore explicabo deleniti cum aliquid voluptatibus totam quis et cupiditate rem amet distinctio voluptate blanditiis nihil, asperiores exercitationem eveniet esse reiciendis. Temporibus minima quis veritatis aperiam commodi!
                    </p>
                </div>
                <div className="home-body-img">
                    <img src="./assets/gallery/sentir-3/body.jpeg" alt="imagen" />
                </div>
            </div>
            <div className="music-section" >
                <div className='music-img'>
                    <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><g><circle r="147" cx="350" cy="200"></circle><circle r="65" cx="601" cy="385"></circle><circle r="76" cy="550" cx="80"></circle></g></svg>
                    <img src="./assets/gallery/sentir-1/bg-removed.png" alt="imagen" />
                </div>
                <div className="music-description">
                    <h3>Música</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa odit iste cumque debitis non qui, veritatis, consectetur molestias ea at reicien itaque dolorum, facilis sint. Blanditiis similique fugiat repudiandae asperiores!
                        dolorum, facilis sint. Blanditiis similique fugiat repudiandae asperiores!
                    </p>
                </div>
            </div>
            <div className="experience-section">
                <div className="exp-container">
                    <div className="exp-description">
                        <h3>
                            Experiencia
                        </h3>
                        <p>Te invitamos a cerrar los ojos y abrir los sentidos. </p>

                        <p>Sentir desde la multisensorialidad que nos abarca. </p>

                        <p>Prestar atención a cada instrumento, a cada sonido, a cada artista vinculado/a con su pasión. </p>

                        <p>Sentir desde los miles de ángulos,
                            Sentir desde la amorosa simpleza de darle permiso

                            El ingreso a una sensación, a una emoción. </p>
                        <p>Sentir como fuerza vital, así poder conectar con el

                            Deseo y placer real.</p>
                    </div>
                    <div className="exp-img">
                        <img src="./assets/gallery/sentir-3/experience.jpeg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
