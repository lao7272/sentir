import { useInView } from 'react-intersection-observer';
export default function HomeBody() {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div className="home-body">
            <div className={`home-body-section ${inView ? "show" : "hidden"}`}>
                <div>
                    <h3>¿Qué hacemos?</h3>
                    <div className="home-body-info" ref={ref}>
                        <p>
                            Sentir es existir es un evento  creado desde el amor,
                            un espacio para animarse a conectar y ser atravesado/a por nuestro sentir.
                        </p>
                        <p>
                            El propósito es invitar a la conciencia, al presente absoluto.
                        </p>
                        <p>Sentir desde la multisensorialidad que nos abarca.</p>
                        <p><b>¿Te animas?</b></p>
                    </div>
                </div>
                <div className="home-body-img">
                    <img src="./assets/gallery/home/body.jpeg" alt="imagen" />
                </div>
            </div>
            <div className="art-section" >
                <div className='art-img'>
                    <svg id="visual" viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg" version="1.1"><g><circle r="147" cx="350" cy="200"></circle><circle r="65" cx="601" cy="385"></circle><circle r="76" cy="550" cx="80"></circle></g></svg>
                    <img src="./assets/gallery/home/bg-removed.png" alt="imagen" />
                </div>
                <div className="art-description">
                    <h3>Arte</h3>
                    <p>
                        Sentir busca generar un espacio para conectar con el arte.
                    </p>
                    <p>
                        Cuando hablamos de conexión,
                        es poder observar, registrar, mirar todos los ángulos.
                    </p>
                    <p>
                        Observar que emociones trae a tu cuerpo,
                        a qué recuerdo te lleva,
                        o a que lugares va tu imaginación.
                    </p>
                    <p>
                        Cerrar los ojos para escuchar algún instrumento, abrir la creatividad viendo esa imagen o cuadro , abrir los sentidos en cada pincelada.
                    </p>
                    <p>
                        Dejarse atravesar siendo consciente de que cada uno/a transmitió su sentir, su experiencia, desorden o paz mental en algo tangible para que alguien más pueda apreciar.
                    </p>
                </div>
            </div>
            <div className="video-section">
                <h3>¿Qué es sentir?</h3>
                <div className='video-container'>
                    <video controls>
                        <source src="/assets/gallery/home/sentir-video.mp4" type="video/mp4" />
                    </video>
                </div>
            </div>
            <div className="experience-section">
                <div className="exp-container">
                    <div className="exp-description">
                        <h3>Experiencia</h3>
                        <p>
                            Te invitamos a ser parte de esta hermosa comunidad
                            donde sentirse artista es prioridad,
                            donde sentir en libertad no entra en duda,
                            donde el respeto está ante todo,
                            y el registrarnos nos invade.
                        </p>
                        <p>
                            Dónde nuestros 5 sentidos se alteran
                            y nuestro rol es habitarlo y compartirlo.
                        </p>
                        <p>
                            En fin… ¿Nos encontramos para disfrutar(nos)?
                        </p>
                    </div>
                    <div className="exp-img">
                        <img src="./assets/gallery/home/experience.jpeg" alt="" />
                    </div>
                </div>
            </div>
            <div className="sponsors-section">
                <h3>Nos acompañan</h3>
                <div className="sponsors">
                    <img src="./assets/sponsors/sponsor-1.jpg" alt="" />
                </div>
            </div>
        </div>
    )
}
