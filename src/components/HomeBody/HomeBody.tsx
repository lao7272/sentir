import { useInView } from 'react-intersection-observer';
export default function HomeBody() {
    const { ref, inView } = useInView({ triggerOnce: true });
    return (
        <div className="home-body">
            <div className={`home-body-section ${inView ? "show" : "hidden"}`}>
                <div className="home-body-info" ref={ref}>
                    <h3>¿Que hacemos?</h3>
                    <p>
                        Sentir es existir es un evento  creado desde el amor,
                        un espacio para animarse a conectar y ser atravesado/a por nuestro sentir.
                    </p>
                    <p>
                        El propósito es invitar a la conciencia, al presente absoluto.
                    </p>
                    <p>Sentí desde la multisensorialidad que nos abarca.</p>
                    <p>¿Te animas?</p>
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
                    <p>Sentir busca generar un espacio para conectar con el arte
                        y cuando hablamos de conexión
                        es poder observar, registrar, mirar todos los ángulos

                        observar que emoción trae a tu cuerpo
                        a qué recuerdo te lleva
                        o a que lugares va tu imaginación

                        cerrar los ojos para escuchar algún instrumento, abrir la creatividad viendo esa imagen o cuadro , abrir los sentidos en cada pincelada
                        dejarse atravesar siendo consciente de que cada uno/a transmitió su sentir, su experiencia desorden o paz mental en algo tangible para que alguien más pueda apreciar.

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
                        <img src="./assets/gallery/home/experience.jpeg" alt=""/>
                    </div>
                </div>
            </div>
        </div>
    )
}
