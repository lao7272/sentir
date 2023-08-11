import { useInView } from 'react-intersection-observer';
export default function HomeBody() {
    const { ref, inView } = useInView({threshold: .1, triggerOnce: true});
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
        </div>
    )
}
